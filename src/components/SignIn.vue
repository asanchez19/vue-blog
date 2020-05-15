<template>
	<button @click="login">Sign in with Google</button>
</template>

<script>
import Firebase from '../app/Firebase'

export default {
	/**
	 * The component's local methods.
	 *
	 * @type {Object}
	 */
	methods: {
		async login() {
			await Firebase.login()

			if (this.user.loggedIn) {
				this.$router.push({ name: 'Home' })
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
			if (!user) {
				this.user.loggedIn = false
				return (this.user.data = {})
			}

			this.user.loggedIn = true
			this.user.data = user
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
