<template>
	<button @click="login">
		Sign in with Google
	</button>
</template>
<script>
import Firebase from '../app/Firebase.js'

export default {
	/**
	 * The component's computed properties.
	 *
	 * @type {Object}
	 */
	computed: {
		/**
		 * Determine if the user is authenticated.
		 *
		 * @return {Boolean}
		 */
		authenticated() {
			return this.user.loggedIn
		},
	},
	/**
	 * The component's local methods.
	 *
	 * @type {Object}
	 */
	methods: {
		/**
		 * Hangle the login click event.
		 *
		 * @return {void}
		 */
		async login() {
			await Firebase.login()

			if (this.user.loggedIn) {
				this.$router.push({ name: 'home' })
			}
		},
	},

	/**
	 * The component's mounted lifecycle hook.
	 *
	 * @return {void}
	 */
	mounted() {
		Firebase.auth.onAuthStateChanged(user => {
			if (user) {
				this.user.loggedIn = true
				this.user.data = user
			} else {
				this.user.loggedIn = false
				this.user.data = {}
			}
		})
	},

	/**
	 * Get the component's initial state.
	 *
	 * @return {Object}
	 */
	data() {
		return {
			user: {
				loggedIn: false,
				data: {},
			},
		}
	},
}
</script>
