import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyAEdjvcTsmzOx8WFmR7Lkt_md2MPTcjMfM',
	authDomain: 'vue-blog-main-fdb2d.firebaseapp.com',
	databaseURL: 'https://vue-blog-main-fdb2d.firebaseio.com',
	projectId: 'vue-blog-main-fdb2d',
	storageBucket: 'vue-blog-main-fdb2d.appspot.com',
	messagingSenderId: '475418253165',
	appId: '1:475418253165:web:b9853e4b40ddfa95042c64',
}

firebase.initializeApp(firebaseConfig)

export default {
	/**
	 * The auth token.
	 */
	auth: firebase.auth(),

	/**
	 * Attempt to login in Google.
	 *
	 * @return {void}
	 */
	async login() {
		const provider = new firebase.auth.GoogleAuthProvider()
		await firebase.auth().signInWithPopup(provider)
	},

	/**
	 * Attempt to logout from Google.
	 */
	async logout() {
		await firebase.auth().signOut()
	},
}
