<template>
    
    <div>
        <!-- コマンド一覧 -->
        <ul 
            v-bind:style="commandListTranslate"
            class="command-item-body__list"
        >


            <li 
                v-for="(subCategory,index) in commandList"
                v-bind:key="subCategory.name"
            >

                <!-- サブカテゴリ -->
                <ul 
                    v-bind:title="subCategory.name"
                    ref="commandList"
                    class="command-list"
                >


                    <!-- コマンド要素 -->
                    <li
                        v-for="(item, itemIndex) in subCategory.itemList"
                        v-bind:key="item.id"
                        v-bind:ref="`subCategoryItem-${index}`"
                        v-bind:style="item.style" 

                        class="command-list__item"
                    >
                        {{ item.name }}

                        <!-- メモ -->
                        <span
                            v-on:click="toggleCommandMemoVisibility(index, itemIndex)"
                            class="angle-down command-list__item--opener"
                        >
                        </span>

                        <!-- 編集アイコン -->
                        <span
                            v-on:click="toggleMenuVisibility(index, itemIndex, $event)"
                        >
                            <i class="fas fa-cog command-edit"></i>
                        </span>

                        <!-- メモ開閉 -->
                        <div 
                            v-bind:ref="`itemMemo-${index}`"
                            v-show="item.isMemoVisible"
                            class="command-list__item--memo"
                        >


                                <pre class="command-memo">test1</pre>
                        </div>

                    </li>
                </ul>
            </li>
        </ul>
        <!-- コマンド編集メニュー -->
        <modal-component
            v-bind:params="commandMenuParams"
            v-bind:visible="commandMenuParams.visible"
            v-bind:content="commandMenu"
            v-bind:option="commandMenuOption"

            v-on:close="closeModal"
        >
        </modal-component>
    </div>


</template>

<script>
import Modal from '../Util/Modal.vue'
import CommandMenu from './CommandMenu.vue'

import CommandSubcategory from '../../models/CommandSubCategory.js'
import CommandItem from '../../models/CommandItem.js'
const ORIGIN_COMMAND_HEIGHT = 40

export default {

    name: 'commandList',

    components: {
        ModalComponent: Modal
    },

    props: {
        commandInputScale: Number // コマンド入力欄の大きさ
    },

    watch: {
        /**
         * コマンド入力欄の大きさが変動すると、表示領域の確保・余分なスペースの削除を行うため、
         * コマンド一覧の位置を連動させる
         */
        commandInputScale() {
            this.commandListTranslate.transform = `translateY(${this.commandInputScale}px)`
        }
    },

    data() {

		return {
            // コマンド一覧の位置を決めるスタイル
			commandListTranslate: {
				transform: ''
			},
            
            // コマンド一覧 サブカテゴリと、それに紐づくコマンド一覧で構成
			commandList: [
                    // サブカテゴリ
                    new CommandSubcategory('SubCategory1', 
                        [
                            // コマンド
                            new CommandItem('0', 'item1', '', {height: ''}),
                            new CommandItem('1', 'item2', '', {height: ''}),
                        ]),

                    new CommandSubcategory('SubCategory2', 
                        [
                            new CommandItem('2', 'item2-1', '', {height: ''}),
                            new CommandItem('3', 'item2-2', '', {height: ''}),
                        ]),
            ],
            
            // メニューに渡すパラメータ
            // ・編集対象
            // ・メニューの描画位置 クリックしたアイコンをもとに導出
            // ・メニューが表示されているか
            commandMenuParams: {

                currentEditCommand: {
                    subCategoryName: '',
                    id: -1,
                    name: '',
                    memo: ''
                },
                posX: -1,
                posY: -1,
                visible: false

            },

            // メニューの描画オプション
            commandMenuOption: {
                layer: 1,
                backgroundAlpha: 0 // メニュー表示中はオーバーレイは見せない方が自然なので非表示
            },

            commandMenu: CommandMenu
		}

    },
    methods: {

        toggleMenuVisibility(subCategoryIndex, itemIndex, event) {

            const commandItem = this.commandList[subCategoryIndex]["itemList"][itemIndex]

            this.commandMenuParams.currentEditCommand.subCategoryName = this.commandList[subCategoryIndex].name
            this.commandMenuParams.currentEditCommand.id = commandItem.id
            this.commandMenuParams.currentEditCommand.name = commandItem.name
            this.commandMenuParams.currentEditCommand.memo = commandItem.memo


            this.commandMenuParams.posX = this.$refs.commandList[0].clientWidth
            this.commandMenuParams.posY = event.clientY

            this.commandMenuParams.visible = !this.commandMenuParams.visible

        },

        closeModal() {

            this.commandMenuParams.currentEditCommand.subCategoryName = ''
            this.commandMenuParams.currentEditCommand.id = -1
            this.commandMenuParams.currentEditCommand.name = ''
            this.commandMenuParams.currentEditCommand.memo = ''

            this.commandMenuParams.posX = -1
            this.commandMenuParams.posY = -1

            this.commandMenuParams.visible = false

        },

        /**
         * コマンドに紐づくメモ欄の表示を切り替え
         * パラメータは、紐づく要素を一意に識別するために利用
         * @param {Number} subCategoryIndex 紐づくサブカテゴリ
         * @param {Number} itemIndex 紐づくコマンド
         */
        toggleCommandMemoVisibility(subCategoryIndex, itemIndex) {

            // インデックスから一意に識別されたコマンド要素
            const commandItem = this.commandList[subCategoryIndex]["itemList"][itemIndex]

            commandItem.isMemoVisible = !commandItem.isMemoVisible

            // メモの表示/非表示が切り替わった後に高さの変動を反映
            this.$nextTick(() => {

                const itemHeight = this.$refs[`subCategoryItem-${subCategoryIndex}`][itemIndex].clientHeight
                const memoHeight = this.$refs[`itemMemo-${subCategoryIndex}`][itemIndex].clientHeight

                // メモが非表示のとき、高さは固定値となるので、決め打ちで設定
                if (memoHeight === 0) {
                    commandItem.style.height = `${ORIGIN_COMMAND_HEIGHT}px`

                    return

                }
				commandItem.style.height = `${memoHeight + itemHeight}px`
            })

        }
    }
}
</script>

<style>
</style>