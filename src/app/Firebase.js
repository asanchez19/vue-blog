import 'firebase/auth'
import 'firebase/firestore'
import * as firebase from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyBBg853J5PWJ_TB16U3ellUnvnUYJiLM2g',
	authDomain: 'blog-live-session-dev.firebaseapp.com',
	databaseURL: 'https://blog-live-session-dev.firebaseio.com',
	projectId: 'blog-live-session-dev',
	storageBucket: 'blog-live-session-dev.appspot.com',
	messagingSenderId: '627933119409',
	appId: '1:627933119409:web:b1e8edb15b4c2403e13390',
}

firebase.initializeApp(firebaseConfig)

export default {
	/**
	 * The auth token.
	 */
	auth: firebase.auth(),

	/**
	 * The database config.
	 */
	db: firebase.firestore(),

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
