<template>
    <div class="top">
	
        <!-- ヘッダ -->
        <header class="top-header"> 
            <h1 class="top-header__text">That Command</h1>
            <h1 class="top-header__icon">ICON</h1>
        </header>

        <!-- ボディ -->
		<section class="top-body">
        
        <!-- タイトル -->
        <main class="top-title">
          
          <h1 class="top-title__primary">What was</h1>
          <h1 class="top-title__secondary">That Command?</h1>
          
        </main>
        
        <!-- 検索フォーム -->
        <form action="#" method="post" class="top-search-form">
        
          <label for="searchCategoryName" class="top-input top-search-form__item">
            <input type="text" id="searchCategoryName" placeholder=" ">
            <span class="top-input__placeholder">Category</span>
            <span class="top-input__border"></span>
          </label>
          
          <label for="searchCommandName" class="top-input top-search-form__item">
            <input type="text" id="searchCommandName" placeholder=" ">
            <span class="top-input__placeholder">Command</span>
            <span class="top-input__border"></span>
          </label>
          
          <br>
          
          <button type="submit" class="top-search-form__button button--search">SEARCH</button>
            
        </form>
        
      </section><!-- /ボディ -->
		
        <!-- カテゴリ一覧 -->
		<article class="top-category">
			
            <!-- 最新カテゴリ -->
			<section class="top-category--recent">
			
				<header class="recent-category-header">

					<h2 class="recent-category-header__text">
						Recent
					</h2>

				</header>
				
				<ul class="recent-categories">
					<li class="recent-categories__item">
						Git
					</li>
					<li class="recent-categories__item">
						Linux
					</li>
					<li class="recent-categories__item">
						Vim
					</li>
					<li class="recent-categories__item">
						Docker
					</li>
					<li class="recent-categories__item">
						Excel
					</li>
				</ul>

			</section>

            <!-- 全カテゴリ -->
			<section class="top-category--all">

				<header class="all-category-header">

					<h2 class="all-category-header__text">
						All
					</h2>

				</header>
				
				<ul class="all-categories">
					<li class="all-categories__item">
						Git
					</li>
					<li class="all-categories__item">
						Linux
					</li>
					<li class="all-categories__item">
						Vim
					</li>
					<li class="all-categories__item">
						Sass
					</li>
					<li class="all-categories__item">
						Docker
					</li>
					<li class="all-categories__item">
						Excel
					</li>
					<li class="all-categories__item">
						Vue
					</li>
					<li class="all-categories__item">
						JavaScript
					</li>
					<li class="all-categories__item">
						Java
					</li>
				</ul>

			</section>
            
		</article> <!-- カテゴリ一覧/ -->
	</div> <!-- /Top -->
</template>

<script>

export default {
  name: 'top',
}
</script>

<style lang="scss">
</style>
