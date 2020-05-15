<template>
	<div>
		<div class="container-fluid">
			<div class="row content">
				<Sidebar />
				<div class="col-sm-9 mt-3">
					Título:
					<input v-model="title" type="text" class="my-3" />
					<ckeditor v-model="editorData" :editor="editor"></ckeditor>
					<button class="mt-3" @click="onSave">
						<b-icon-x-diamond /> Guardar
					</button>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
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
		 * Handle the on click event.
		 *
		 * @return {void}
		 */
		onSave() {
			firebase.db.collection('posts').add({
				dateAdded: new Date(),
				displayName: firebase.auth.currentUser.displayName,
				email: firebase.auth.currentUser.email,
				post: this.editorData,
				title: this.title,
			})
			this.$router.push({
				name: 'Home',
			})
		},
	},
	/**
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Create',
	/**
	 * Get the component's initial state.
	 *
	 * @return {Object}
	 */
	data() {
		return {
			editor: ClassicEditor,
			editorData: '',
			title: '',
		}
	},
}
</script>
