<template>
	<footer class="container-fluid">
		<p class="text-center">
			Copyright 2020 by
			<a href="https://github.com/asanchez19"> Alejandro Sanchez </a> All
			Rights Reserved.
			<a @click="onVersionClick"> Version: {{ version }} </a>
		</p>
	</footer>
</template>

<script>
export default {
	/**
	 * The component's local methods.
	 *
	 * @type {Object}
	 */
	methods: {
		/**
		 * Handle the click event.
		 *
		 * @return {void}
		 */
		onVersionClick() {
			this.$emit(
				'mi-emit',
				'Este es un mensaje desde el componente footer.'
			)
		},
	},

	/**
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Footer',

	/**
	 * The component's inherited properties.
	 *
	 * @type {Object}
	 */
	props: {
		/**
		 * The app version.
		 *
		 * @type {String}
		 */
		version: {
			type: String,
			default: '1.0',
		},
	},
}
</script>

<style></style>
