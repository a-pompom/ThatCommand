<template>
<div class="command-category">

    <!-- カテゴリヘッダ -->           
    <header class="command-category-header">
        <h2 class="command-category-header__title">
        Category
        </h2> 

        <h2 v-on:click="toggleCategoryInputVisibility" 
            class="command-category-header__button button--round"
            v-bind:class="inputToggle"
        >
        </h2>

    </header>

    <div class="command-category-body">

        <!-- カテゴリ入力 -->           
        <category-input
            v-on:modifyScale="modifyCategoryInputScale"
            v-bind:visible="isCategoryInputVisible"
        >
        </category-input>

        <!-- カテゴリ一覧 -->           
        <category-list
            v-bind:categoryInputScale="categoryInputScale"
        >
        </category-list>

    </div>

</div>
    
</template>

<script>
import CategoryInput from './CategoryInput.vue'
import CategoryList from './CategoryList.vue'

export default {
    name: 'categoryContainer',

    components: {
        categoryInput: CategoryInput, // カテゴリ入力欄
        categoryList: CategoryList // カテゴリ一覧
    },

    data() {
        return {
            isCategoryInputVisible: false,  // カテゴリ入力欄の表示・非表示を管理
            categoryInputScale: 0  // カテゴリ入力欄の大きさ(高さ)
        }
    },
    computed: {

        /**
         * 入力要素の表示・非表示を切り替えるCSSクラス
         */
        inputToggle() {
            return {
                "new-category": !this.isCategoryInputVisible,
                "close-category": this.isCategoryInputVisible
            }
        }

    },

    methods: {

        /**
         * カテゴリ入力欄の表示/非表示を切り替え
         */
        toggleCategoryInputVisibility() {

            this.isCategoryInputVisible = !this.isCategoryInputVisible
        },

        /**
         * カテゴリ入力欄の大きさの変更を反映
         * @param {Number} scale 変動後の大きさ
         */
        modifyCategoryInputScale(scale) {
            this.categoryInputScale = scale
        }
    }
    
}
</script>

<style>
</style>