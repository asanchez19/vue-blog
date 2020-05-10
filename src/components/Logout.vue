<template>
	<div>
		Hola {{ user.data.displayName }}
		<button @click="logout">Logout</button>
	</div>
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
		/**
		 * Handle the logout event click.
		 *
		 * @return {void}
		 */
		async logout() {
			await Firebase.logout()

			if (!this.user.loggedIn) {
				this.$router.push({ name: 'Login' })
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
