<script lang="ts">
	import { hexToRGB } from '$lib/utilities/palettes';
	import { getContext } from 'svelte';
	import Navbar from './navbar.svelte';
	const themeContext = getContext('themeContext');

	let theme;
	themeContext.subscribe((value) => {
		theme = value.theme;
	});
</script>

<div style={'--header-bg:' + hexToRGB(theme.handleColor, 0.6)} class="site-header">
	<svg class="icon" style={'--icon-color:' + theme.background}>
		<use href={'#fa-symbol-' + theme.themeIcon}></use>
	</svg>
	<div class="nav-combo">
		<h1>Mike G '24</h1>
		<Navbar />
	</div>
	<svg class="icon" style={'--icon-color:' + theme.background}>
		<use href={'#fa-symbol-' + theme.themeIcon}></use>
	</svg>
</div>

<style>
	.site-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--header-bg);
		border-radius: 10px 10px 0 0;
		height: 100px;
	}

	.site-header svg {
		margin-left: 10px;
		margin-right: 10px;
		color: var(--icon-color);
	}

	.nav-combo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
