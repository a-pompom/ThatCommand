<template>

    <!-- カテゴリ一覧 -->
    <div>
        <aside
            v-bind:style="categoryListTranslate"
            class="command-category-body__list"
        >

            <!-- カテゴリ編集アイコン カテゴリ名の組 -->
            <ul 
                v-for="category in categoryList"
                v-bind:key="category.id"
                class="category-list">

                <!-- カテゴリ編集アイコン --> 
                <span
                    v-on:click="toggleVisibility(category.id, category.name, $event)"
                >
                    <i class="fas fa-cog category-edit"></i>
                </span>
                
                <!-- カテゴリ名 --> 
                <li class="category-list__item">
                    {{ category.name }}
                </li>
            </ul>
        </aside>

        <!-- カテゴリ編集メニュー -->
        <modal-component
            v-bind:params="categoryMenuParams"
            v-bind:visible="categoryMenuParams.visible"
            v-bind:content="categoryMenu"
            v-bind:option="categoryMenuOption"

            v-on:close="closeModal"
        >
        </modal-component>

    </div>
    
</template>

<script>
import CategoryMenu from './CategoryMenu.vue'
import Modal from '../Util/Modal.vue'

export default {
    name: 'categoryList',

    props: {
        categoryInputScale: Number // カテゴリ入力欄の大きさ 連動して位置を操作するために利用
    },

    components: {
        ModalComponent: Modal,
    },

    watch: {
        /**
         * カテゴリ入力欄の大きさが変動すると、表示領域の確保・余分なスペースの削除を行うため、
         * カテゴリ一覧の位置を連動させる
         */
        categoryInputScale() {
            this.categoryListTranslate.transform = `translateY(${this.categoryInputScale}px)`
        }
    },

    data() {

		return {
            // カテゴリ一覧
            categoryList: [
                {
                    id: 1,
                    name: 'Category-1'
                },
                {
                    id: 2,
                    name: 'Category-2'
                }
            ],

            // カテゴリ一覧の位置を決めるスタイル
			categoryListTranslate: {
				transform: ''
            },
            
            // カテゴリ編集メニュー
            categoryMenu: CategoryMenu,

            // メニューに渡すパラメータ
            // ・編集対象
            // ・メニューの描画位置 クリックしたアイコンをもとに導出
            // ・メニューが表示されているか
            categoryMenuParams: {

                currentEditCategory: {
                    id: -1,
                    name: ''
                },
                posX: -1,
                posY: -1,
                visible: false

            },

            // メニューの描画オプション
            categoryMenuOption: {
                layer: 1,
                backgroundAlpha: 0 // メニュー表示中はオーバーレイは見せない方が自然なので非表示
            },
		}
    },

    methods: {

        /**
         * 編集アイコンクリックで呼ばれる処理
         * メニューの表示位置を決定し、メニューの表示を制御
         * @param {Number} categoryId 編集対象カテゴリの識別子
         * @param {String} categoryName 編集対象のカテゴリ名
         * @param {Event} event イベントオブジェクト
         */
        toggleVisibility(categoryId, categoryName, event) {

            this.categoryMenuParams.currentEditCategory.id = categoryId
            this.categoryMenuParams.currentEditCategory.name = categoryName

            this.categoryMenuParams.posX = event.clientX
            this.categoryMenuParams.posY = event.clientY
            
            this.categoryMenuParams.visible = !this.categoryMenuParams.visible
        },

        /**
         * モーダルを閉じる
         */
        closeModal() {

            this.categoryMenuParams.currentEditCategory.id = -1
            this.categoryMenuParams.currentEditCategory.name = ''
            
            this.categoryMenuParams.visible = false
        }
    }
    
}
</script>

<style>
</style>