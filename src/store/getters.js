/**
 * Global store getters.
 *
 * @author Alejandro Sanchez <rasso92@gmail.com>
 */
export default {
	/**
	 * Get all posts from the module.
	 *
	 * @param {Object} state
	 * @return {Array}
	 */
	posts(state) {
		const posts = state.posts

		return posts.ids.map(id => posts.items[id])
	},
}
