<template>

	<div class="command-container"> 
    
    <!--カテゴリエリア--> 
    <article class="command-category">

        <header class="command-category-header">
            <h2 class="command-category-header__title">
            Category
            </h2> 

            <h2 id="newCategory" class="command-category-header__button button--round new-category"></h2>

        </header>

        <div class="command-category-body">

            <!-- カテゴリ入力 -->
            <form class="command-category-body__input hidden-item" id="categoryInput">

                <label for="categoryName" class="category-input">
                    <input type="text" id="categoryName" placeholder=" ">
                    <span class="category-input__placeholder">Category</span>
                    <span class="category-input__border"></span>
                </label>

                <input type="submit" value="ADD" class="button--category-add">
            </form>

            <!-- カテゴリ一覧 -->
            <aside class="command-category-body__list">

                <!-- カテゴリ編集アイコン カテゴリ名の組 -->
                <ul id="categoryList" class="category-list">
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


		<!--コマンド エリア -->
		<article class="command-item">

            <!-- ヘッダ -->
			<header class="command-item-header">
				<h2>Item</h2>
				<h2 id="newCommand" class="command-item-header__button button--round new-command"></h2>
			</header>

			<main class="command-item-body">

                <!-- 入力欄 -->
				<form class="command-item-body__input hidden-item" id="commandInput">

					<label for="title" class="command-input">
						<input type="text" id="title" placeholder=" ">
						<span class="command-input__placeholder">Title</span>
						<span class="command-input__border"></span>
					</label>

					<label for="subCategory" class="command-input">
						<input type="text" id="subCategory" placeholder=" ">
						<span class="command-input__placeholder">Sub Category</span>
						<span class="command-input__border"></span>
					</label>


					<label for="memo" class="command-textarea">
						<textarea id="memo" placeholder=" "></textarea>
						<span class="command-textarea__placeholder">Memo</span>
						<span class="command-textarea__border"></span>
					</label>

					<input type="submit" 
						value="ADD" class="button--command-add">
				</form>

                <!-- コマンド一覧 -->
				<ul id="commandList" class="command-item--body__list">
					<li>

						<ul id="commandSubList-1" title="SubCategory 1" class="command-list" >
							<span><i id="commanSubList-1-Edit-1" class="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-1-Item-1" class="command-list__item">
								Item1
								<span id="memoOpener-1-1" class="angle-down command-list__item--opener"></span>
								<div id="memo-1-1" class="command-list__item--memo hidden-accordion">
                                    <pre class="command-memo">test1</pre>
								</div>
							</li>

							<span><i id="commanSubList-1-Edit-2" class="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-1-Item-2" class="command-list__item">
								Item1
								<span id="memoOpener-1-2" class="angle-down command-list__item--opener"></span>
								<div id="memo-1-2" class="command-list__item--memo hidden-accordion">
									test
								</div>
							</li>
						</ul>
					</li>
					
					
					<li>
						<ul id="commandSubList-2" title="SubCategory 2" class="command-list" >
							<span><i id="commanSubList-2-Edit-1" class="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-2-Item-1" class="command-list__item">
								Item1
								<span id="memoOpener-2-1" class="angle-down command-list__item--opener"></span>
								<div id="memo-2-1" class="command-list__item--memo hidden-accordion">
									<pre class="command-memo">testest1</pre>
								</div>
							</li>

							<span><i id="commanSubList-2-Edit-2" class="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-2-Item-2" class="command-list__item">
								Item1
								<span id="memoOpener-2-2" class="angle-down command-list__item--opener"></span>
								<div id="memo-2-2" class="command-list__item--memo hidden-accordion">
									test
								</div>
							</li>
							
							<span><i id="commanSubList-2-Edit-3" class="fas fa-cog command-edit"></i></span>
							<li id="commandSubList-2-Item-3" class="command-list__item">
								Item1
								<span id="memoOpener-2-3" class="angle-down command-list__item--opener"></span>
								<div id="memo-2-3" class="command-list__item--memo hidden-accordion">
									test
								</div>
							</li>
						</ul>
					</li>
					
					
				</ul>

			</main>

		</article>

		<!--オーバーレイ要素-->
		<div id="modalEditOverlay" class="modal-edit__overlay hidden-modal">
	
		</div> <!-- /modalEditOverlay -->
		
		<div id="categoryEditDialog" class="category-edit__dialog hidden-modal">
			
			<header class="category-edit__dialog__header">
				<h3>Edit</h3>
				<h3 id="closeCategoryDialogButton">×</h3>
			</header>

			<form class="category-edit__dialog__input hidden">
				<label for="editCategoryName" class="category-update">
					<input type="text" id="editCategoryName" placeholder=" ">
					<span class="category-update__placeholder">Category</span>
					<span class="category-update__border"></span>
				</label>

				<input type="submit" 
					value="Update Category" class="category-button--update">

			</form>
		</div>

		<div id="commandEditDialog" class="command-edit__dialog hidden-modal">

			<header class="command-edit__dialog__header">
				<h3>Edit</h3>
				<h3 id="closeCommandDialogButton">×</h3>
			</header>

			<form class="command-edit__dialog__input hidden">

				<label for="editTitle" class="command-update">
					<input type="text" id="editTitle" placeholder=" ">
					<span class="command-update__placeholder">Title</span>
					<span class="command-update__border"></span>
				</label>

				<label for="editSubCategory" class="command-update">
					<input type="text" id="editSubCategory" placeholder=" ">
					<span class="command-update__placeholder">Sub Category</span>
					<span class="command-update__border"></span>
				</label>


				<label for="editMemo" class="command-textarea--update">
					<textarea id="editMemo" placeholder=" "></textarea>
					<span class="command-textarea--update__placeholder">Memo</span>
					<span class="command-textarea--update__border"></span>
				</label>

				<input type="submit" 
					value="Update Command" class="command-button--update">

			</form>
		</div>

		<!-- メニュー用オーバーレイ -->
		<div id="modalOverlay" class="modal__overlay hidden-modal">
		
			

		</div>
		<ul id="categoryEditMenu" class="category-edit__menu hidden-modal">
			<li id="categoryEditButton">Edit</li>
			<li>Delete</li>
			<li id="categoryCloseButton">Close</li>
		</ul>

		<ul id="commandEditMenu" class="command-edit__menu hidden-modal">
			<li id="commandEditButton">Edit</li>
			<li>Delete</li>
			<li id="commandCloseButton">Close</li>
		</ul>


	</div><!-- /container -->
</template>

<script>

export default {
  name: 'command',
}
</script>

<style lang="scss">
</style>