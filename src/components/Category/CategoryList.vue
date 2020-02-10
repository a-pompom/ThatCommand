<template>

    <!-- カテゴリ一覧 -->
    <div>
        <aside v-bind:style="categoryListTranslate" class="command-category-body__list">

            <!-- カテゴリ編集アイコン カテゴリ名の組 -->
            <ul 
                v-for="category in categoryList"
                v-bind:key="category.id"
                class="category-list">

                <span
                    v-on:click="toggleVisibility(category.id, category.name, $event)"
                >
                    <i class="fas fa-cog category-edit"></i>
                </span>
                <li class="category-list__item">
                    {{ category.name }}
                </li>
            </ul>
        </aside>
        <modal-component
            v-bind:params="getCategoryEditParam()"
            v-bind:visible="categoryEditOption.visible"
            v-bind:content="categoryMenu"

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
        categoryInputScale: Number // カテゴリ入力欄の大きさ
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

            categoryEditOption: {

                currentEditCategory: {
                    id: -1,
                    name: ''
                },
                posX: -1,
                posY: -1,
                visible: false

            },


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
            
            categoryMenu: CategoryMenu,
		}

    },

    methods: {

        toggleVisibility(categoryId, categoryName, event) {

            this.categoryEditOption.currentEditCategory.id = categoryId
            this.categoryEditOption.currentEditCategory.name = categoryName

            this.categoryEditOption.posX = event.clientX
            this.categoryEditOption.posY = event.clientY
            
            this.categoryEditOption.visible = !this.categoryEditOption.visible
        },

        getCategoryEditParam()
        {
            return this.categoryEditOption
        },

        closeModal() {

            this.categoryEditOption.currentEditCategory.id = -1
            this.categoryEditOption.currentEditCategory.name = ''
            
            this.categoryEditOption.visible = false
        }
    }
    
}
</script>

<style>
</style>