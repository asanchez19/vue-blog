<template>
	<div class="auth">
		<div class="auth-left"></div>
		<div class="auth-right">
			<b-icon-star-half class="h1 my-5" />
			<SingIn />
		</div>
	</div>
</template>

<script>
import SingIn from '../components/SignIn.vue'

export default {
	/**
	 * The component's registered child components.
	 *
	 * @type {Object}
	 */
	components: {
		SingIn,
	},

	/**
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Login',
}
</script>

<style></style>
