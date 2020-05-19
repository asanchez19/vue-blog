<template>
	<div class="auth">
		<div class="auth-left"></div>
		<div class="auth-right">
			<b-icon-star-half class="h1 my-5" />
			<sign-in />
		</div>
	</div>
</template>

<script>
import SignIn from '../components/SignIn'

export default {
	/**
	 * The component's registered child components.
	 *
	 * @type {Object}
	 */
	components: {
		SignIn,
	},

	/**
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Login',
}
</script>
