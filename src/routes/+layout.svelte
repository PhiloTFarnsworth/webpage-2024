<script>
	import Footer from '$lib/footer.svelte';
	import Navbar from '$lib/navbar.svelte';
</script>

<div class="site-header">
	<h1>Welcome to Michael's Site!</h1>
	<Navbar />
</div>

<div class="main-slot-viewer">
	<slot></slot>
</div>

<Footer />

<style>
	.site-header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: aliceblue;
		height: 100px;
	}

	.site-header h1 {
		margin: 0;
		padding: 5px;
	}

	.main-slot-viewer {
		height: calc(100% - 200px);
        display: flex;
        justify-content: center;
        align-items: center;
	}
</style>
