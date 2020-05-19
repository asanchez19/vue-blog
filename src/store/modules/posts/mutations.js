import Vue from 'vue'
import { ADD_ITEMS, REMOVE_ITEM } from '../../mutation-types'

const push = (state, model) => {
	Vue.set(state.items, model.id, model)

	if (!state.ids.includes(model.id)) {
		state.ids.push(model.id)
	}
}

/**
 * The module's state mutators.
 *
 * @author Alejandro Sanchez <rasso92@gmail.com>
 */
export default {
	/**
	 * Add the given model(s) to the store.
	 *
	 * @param {Object} state
	 * @param {Array} posts
	 * @return {void}
	 */
	[ADD_ITEMS](state, posts) {
		posts.forEach(model => push(state, model))
	},

	/**
	 * Remove the given id from the store.
	 *
	 * @param {Object} state
	 * @param {Number} id
	 * @return {void}
	 */
	[REMOVE_ITEM](state, id) {
		if (state.ids.includes(id)) {
			delete state.items[id]

			state.ids.splice(
				state.ids.findIndex(item => item === id),
				1
			)
		}
	},
}
