<template>
	<div>
		Hola {{ user.data.displayName }}
		<button @click="logout">
			Logout
		</button>
	</div>
</template>
<script>
import Firebase from '../app/Firebase.js'

export default {
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
		async logout() {
			await Firebase.logout()

			if (!this.user.loggedIn) {
				this.$router.push({ name: 'login' })
			}
		},
	},

	/**
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Logout',

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
