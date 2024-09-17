<script>

	import { base } from "$app/paths";

</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/projects">Projects</a>
	<a href="{base}/settings">Settings</a>
</nav>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}

	nav a {
		font-size: x-large;
	}
</style>