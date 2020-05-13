<template>
	<div>
		<div class="container-fluid">
			<div class="row content">
				<Sidebar />

				<div class="col-sm-9">
					<h4><small>MIS POSTS</small></h4>
					<hr />
					<div v-for="post in posts" :key="post.date">
						<h2 v-html="post.title"></h2>
						<b-icon-trash @click.prevent="onDelete(post.id)" />
						<h5>
							<span class="glyphicon glyphicon-time"></span> Post
							by {{ post.displayName }}.
						</h5>
						<br />
						<p v-html="post.post"></p>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import firebase from '../app/Firebase.js'
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
		onDelete(id) {
			console.log(id)

			firebase.db
				.collection('posts')
				.doc(id)
				.delete()
		},
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
		firebase.db
			.collection('posts')
			.get()
			.then(querySnapshot => {
				this.posts = querySnapshot.docs.map(doc => {
					return { ...doc.data(), id: doc.id }
				})
			})
	},

	/**
	 * Get the component's initial state.
	 *
	 * @return {Object}
	 */
	data() {
		return {
			posts: [],
		}
	},
}
</script>
