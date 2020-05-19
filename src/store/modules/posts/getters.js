/**
 * The module's reactive state getters.
 *
 * @author Alejandro Sanchez <rasso92@gmail.com>
 */
export default {
	/**
	 * Get the total number of records.
	 *
	 * @param {Object} state
	 * @return {Number}
	 */
	getTotalRecords(state) {
		return state.ids.length
	},
}
