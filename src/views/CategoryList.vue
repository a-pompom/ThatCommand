
<template>

    <!-- カテゴリ一覧 -->
    <aside v-bind:style="categoryListTranslate" class="command-category-body__list">

        <!-- カテゴリ編集アイコン カテゴリ名の組 -->
        <ul 
            v-for="category in categoryList"
            v-bind:key="category.id"
            class="category-list">

            <span><i class="fas fa-cog category-edit"></i></span>
            <li class="category-list__item">
                {{ category.name }}
            </li>
        </ul>
    </aside>
    
</template>

<script>
export default {
    name: 'categoryList',

    props: {
        categoryInputScale: Number // カテゴリ入力欄の大きさ
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
		}

	}
}
</script>

<style>
</style>