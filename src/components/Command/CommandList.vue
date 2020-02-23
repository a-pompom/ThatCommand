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
                            v-bind:class="item.cssClass"
                            class="command-list__item--opener"
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

                            <pre class="command-memo">{{ item.memo }}</pre>
                        </div>

                    </li>
                </ul>
            </li>
        </ul>
        <!-- コマンド編集メニュー -->
        <modal-component
            v-bind:params="menuParams"
            v-bind:visible="menuParams.menu.visible"
            v-bind:content="commandMenu"
            v-bind:option="menuParams.menu.option"

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
import Menu from '../../models/Menu.js'

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
                            new CommandItem('0', 'item1', 'memo1', {height: ''}),
                            new CommandItem('1', 'item2', 'memo2', {height: ''}),
                        ]),

                    new CommandSubcategory('SubCategory2', 
                        [
                            new CommandItem('2', 'item2-1', 'memo2-1', {height: ''}),
                            new CommandItem('3', 'item2-2', 'memo2-2', {height: ''}),
                        ]),
            ],
            
            // メニュー・ダイアログに渡すパラメータ
            menuParams: {

                currentEdit: new CommandItem('-1', '', '', {}, ''),
                menu: new Menu({layer: 1, backgroundAlpha: 0})
            },

            commandMenu: CommandMenu
		}

    },

    methods: {

        /**
         * メニューの表示・非表示を切り替える
         * @param {Number} subCategoryIndex どのカテゴリに属するかを表すインデックス
         * @param {Number} itemIndex コマンド要素のインデックス
         * @param {Event} event メニューの表示位置を特定するためのイベントオブジェクト
         */
        toggleMenuVisibility(subCategoryIndex, itemIndex, event) {

            const commandItem = this.commandList[subCategoryIndex]["itemList"][itemIndex]

            // ダイアログの編集対象を切り替え
            this.menuParams.currentEdit.subCategoryName = this.commandList[subCategoryIndex].name
            this.menuParams.currentEdit.id = commandItem.id
            this.menuParams.currentEdit.name = commandItem.name
            this.menuParams.currentEdit.memo = commandItem.memo

            this.menuParams.menu.setPos(this.$refs.commandList[0].clientWidth, event.clientY)
            this.menuParams.menu.toggleVisibility()
        },

        /**
         * モーダルを閉じる
         */
        closeModal() {

            this.menuParams.currentEdit.init()

            this.menuParams.menu.init()
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