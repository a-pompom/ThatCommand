<template>
    <!--カテゴリエリア--> 
    <article class="command-category">

        <header class="command-category-header">
            <h2 class="command-category-header__title">
            Category
            </h2> 

            <h2 v-on:click="toggleCategoryInputVisibility" class="command-category-header__button button--round new-category"></h2>

        </header>

        <div class="command-category-body">

            <!-- カテゴリ入力 -->
			<transition name="input-toggle">
				<form ref="categoryInput" v-show="isCategoryInputVisible" class="command-category-body__input">

					<label for="categoryName" class="category-input">
						<input type="text" id="categoryName" placeholder=" ">
						<span class="category-input__placeholder">Category</span>
						<span class="category-input__border"></span>
					</label>

					<input type="submit" value="ADD" class="button--category-add">
				</form>
			</transition>

            <!-- カテゴリ一覧 -->
            <aside v-bind:style="categoryListTranslate" class="command-category-body__list">

                <!-- カテゴリ編集アイコン カテゴリ名の組 -->
                <ul class="category-list">
                    <span><i id="categoryEdit-1" class="fas fa-cog category-edit"></i></span>
                    <li id="categoryListItem-1" class="category-list__item">
                        Category1
                    </li>

                    <span><i id="categoryEdit-2" class="fas fa-cog category-edit"></i></span>
                    <li id="categoryListItem-2" class="category-list__item">
                        Category2
                    </li>
                </ul>
            </aside>
        </div>

    </article>


</template>

<script>

export default {
    name: 'categoryList',

    data() {

		return {
			isCategoryInputVisible: false,


			categoryListTranslate: {
				transform: ''
			},
		}

	},

	methods: {

		toggleCategoryInputVisibility() {
			this.isCategoryInputVisible = !this.isCategoryInputVisible

			this.$nextTick(() => {
				const categoryListHeight = this.$refs.categoryInput.clientHeight
				this.categoryListTranslate.transform = `translateY(${categoryListHeight}px)`
			})
		}

	}
}
</script>

<style lang="scss">
</style>