<template>
	<div>
		<Logout />
	</div>
</template>

<script>
import Logout from '../components/Logout.vue'
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
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Home',
}
</script>
