<template>
	<div class="login-container">
	
		<header class="login-header">
			
			<h2>That Command</h2>
			
		</header>
		
		<div class="login-form">
		
			<form action="#" method="post">

                <!-- ユーザ名 -->	
				<label for="userName" class="login-input login-form__item">
					<input type="text" placeholder=" " id="userName">
					<span class="login-input__placeholder">Username</span>
					<span class="login-input__border"></span>
				</label>
				
                <!-- パスワード -->	
				<label for="password" class="login-input login-form__item">
					<input type="password" placeholder=" " id="password">
					<span class="login-input__placeholder">Password</span>
					<span class="login-input__border"></span>
				</label>
				
				<br>

				<input type="submit" 
					value="LOGIN" class="login-button login-form__button">

			</form>
			
		</div>
		
	</div>
</template>

<script>

export default {
  name: 'login',
}
</script>

<style lang="scss">
</style>

