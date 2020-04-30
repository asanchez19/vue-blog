<template>
	<div class="auth">
		<div class="auth-left"></div>
		<div class="auth-right">
			<b-icon-star-half class="h1 my-5" />
			<button v-if="!authenticated" @click="login">
				Sign in with Google
			</button>
		</div>
	</div>
</template>

<script>
import Firebase from '../app/Firebase.js'

export default {
	/**
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Login',

}
</script>

<style></style>
