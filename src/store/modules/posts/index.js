import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

/**
 * Determine if the vuex module should be namespaced.
 *
 * @type {Boolean}
 */
const namespaced = true

/**
 * Export the immutable vuex store module.
 *
 * @type {Object}
 */
export default {
	state,
	actions,
	getters,
	mutations,
	namespaced,
}
