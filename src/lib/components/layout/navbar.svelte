<script>

	import { base } from "$app/paths";

</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/settings">Settings</a>
	<a href="{base}/peace">Peace</a>
	<a href="{base}/about">About</a>
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		background-color: white;
		border-radius: 5px;
	}

	nav a {
		font-size: x-large;
		padding-left: 5px;
		padding-right: 5px;
	}
</style>