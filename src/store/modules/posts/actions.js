import firebase from '../../../app/Firebase'
import { ADD_ITEMS, REMOVE_ITEM } from '@/store/mutation-types'

const toArray = item => {
	if (Array.isArray(item)) {
		return item
	}

	if (item) {
		return [].concat(item)
	}

	return []
}

/**
 * The module's dispatchable actions.
 *
 * @author Alejandro Sanchez <rasso92@gmail.com>
 */
export default {
	/**
	 * Get all the posts.
	 *
	 * @param {Function} payload.commit
	 * @return {void}
	 */
	async get({ commit }) {
		const response = await firebase.db
			.collection('posts')
			.get()
			.then(querySnapshot => {
				return querySnapshot.docs.map(doc => {
					return { ...doc.data(), id: doc.id }
				})
			})

		const posts = toArray(response)

		if (posts.length > 0) {
			commit(ADD_ITEMS, posts)
		}
	},

	/**
	 * Remove a post by id.
	 *
	 * @param {Function} payload.commit
	 * @return {void}
	 */
	async remove({ commit }, id) {
		try {
			await firebase.db
				.collection('posts')
				.doc(id)
				.delete()

			commit(REMOVE_ITEM, id)
		} catch (e) {
			console.error(e)
		}
	},
}
