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
            v-bind:params="menuParams"
            v-bind:visible="menuParams.menu.visible"
            v-bind:content="categoryMenu"
            v-bind:option="menuParams.menu.option"

            v-on:close="closeModal"
        >
        </modal-component>

    </div>
    
</template>

<script>
import Category from '../../models/Category.js'
import Menu from '../../models/Menu.js'

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
                new Category(1, 'Category-1'),
                new Category(2, 'Category-2'),
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
            menuParams: {

                currentEdit: new Category(-1, ''),
                menu: new Menu({layer: 1, backgroundAlpha: 0})
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

            this.menuParams.currentEdit.id = categoryId
            this.menuParams.currentEdit.name = categoryName

            this.menuParams.menu.setPos(event.clientX, event.clientY)
            this.menuParams.menu.toggleVisibility()
        },

        /**
         * モーダルを閉じる
         */
        closeModal() {

            this.menuParams.currentEdit.init()
            this.menuParams.menu.init()
        }
    }
    
}
</script>

<style>
</style>