import { mapToArray } from './helpers/getters'

/**
 * Global store getters.
 *
 * @author Pedro Villegas <pedro.villegas@ttec.com>
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
