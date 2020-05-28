<template>
	<div>
		<div class="container-fluid">
			<div class="row content">
				<sidebar />

				<div class="col-sm-9">
					<h4>
						<small>MIS {{ count }} POSTS.</small>
					</h4>
					<hr />
					<div v-for="post in posts" :key="post.date">
						<h2 v-html="post.title"></h2>
						<b-icon-trash @click.prevent="onDelete(post.id)" />
						<h5>
							<span class="glyphicon glyphicon-time"></span> Post
							by {{ post.displayName | toUpperCase }}.
						</h5>
						<br />
						<p v-html="post.post"></p>
					</div>
				</div>
			</div>
		</div>
		<Footer version="2.0" @mi-emit="showMessage" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Footer from '../components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
	/**
	 * The component's registered child components.
	 *
	 * @type {Object}
	 */
	components: {
		Footer,
		Sidebar,
	},

	/**
	 * The component's computed properties.
	 *
	 * @type {Object}
	 */
	computed: {
		...mapGetters({
			count: 'posts/getTotalRecords',
			posts: 'posts',
		}),
	},

	/**
	 * The component's local methods.
	 *
	 * @type {Object}
	 */
	methods: {
		/**
		 * Handle the delete click event.
		 *
		 * @param {Number} id
		 * @return {void}
		 */
		async onDelete(id) {
			await this.deletePost(id)
		},

		/**
		 * Show an alert message.
		 *
		 * @param {String} message
		 * @return {void}
		 */
		showMessage(message) {
			console.log(message, 'alejo')

			alert(message)
		},

		...mapActions({ fetchPosts: 'posts/get', deletePost: 'posts/remove' }),
	},

	/**
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Home',

	/**
	 * The component's before create lifecycle hook.
	 *
	 * @return {void}
	 */
	created() {
		this.fetchPosts()
	},
}
</script>
