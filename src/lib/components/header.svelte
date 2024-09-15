<script lang="ts">
	import { headerIcons } from '$lib/utilities/iconography';
	import { hexToRGB, palettes } from '$lib/utilities/palettes';
	import Navbar from './navbar.svelte';

	export let theme: 'coder' | 'winter' | 'beach';
</script>

<div style={'--header-bg:' + hexToRGB(palettes[theme][9], .8)} class="site-header">
	<svg class="icon" style={'--icon-color:' + palettes[theme][1]}>
		<use href={'#fa-symbol-' + headerIcons[theme]}></use>
	</svg>
	<div class="nav-combo">
		<h1>Welcome to Michael's Site!</h1>
		<Navbar />
	</div>
	<svg class="icon" style={'--icon-color:' + palettes[theme][1]}>
		<use href={'#fa-symbol-' + headerIcons[theme]}></use>
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
        color: var(--icon-color)
	}

	.nav-combo {
		display: flex;
		flex-direction: column;
        justify-content: center;
		align-items: center;
	}
</style>
