import getters from './getters'
import posts from './modules/posts'

/**
 * Export the vuex store configuration.
 *
 * @type {Object}
 */
export default {
	getters,
	modules: { posts },
}
