<template>
	<div>
		<div class="container-fluid">
			<div class="row content">
				<Sidebar />

				<div class="col-sm-9">
					<h4><small>MIS POSTS</small></h4>
					<hr />
					<h2>I Love Food</h2>
					<h5>
						<span class="glyphicon glyphicon-time"></span> Post by
						Jane Dane, Sep 27, 2015.
					</h5>
					<h5>
						<span class="label label-danger">Food</span>
						<span class="label label-primary">Ipsum</span>
					</h5>
					<br />
					<p>
						Food is my passion. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Excepteur sint
						occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'

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
	 * The component's name used for debugging.
	 *
	 * @type {String}
	 */
	name: 'Home',
}
</script>
