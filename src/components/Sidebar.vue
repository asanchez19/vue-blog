<template>
	<div class="col-sm-3 sidenav">
		<logout />
		<ul class="nav nav-pills nav-stacked mt-5">
			<li>
				<a href.prevent="#" @click="onCreate"
					><b-icon-plus-circle /> Crear</a
				>
			</li>
		</ul>
		<br />
	</div>
</template>

<script>
import Logout from './Logout.vue'

export default {
	/**
	 * The component's registered child components.
	 *
	 * @type {Object}
	 */
	components: {
		Logout,
	},

	/**
	 * The component's local methods.
	 *
	 * @type {Object}
	 */
	methods: {
		onCreate() {
			this.$router.push({
				name: 'home.create',
			})
		},
	},

	/**
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Sidebar',
}
</script>

<style></style>
