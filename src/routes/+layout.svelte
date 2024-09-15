<script lang="ts">
	import Background from '$lib/components/background.svelte';
	import DynamicFontAwesome from '$lib/components/dynamicFontAwesome.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import { generateRandomFloater } from '$lib/utilities/floaters';
	import { themeIcons } from '$lib/utilities/iconography';
	import { hexToRGB, palettes } from '$lib/utilities/palettes';

	export let theme: 'coder' | 'beach' | 'winter' = 'coder';
	// export let customPalette = ['#FF00FF'];
	export let fonts = {
		"coder": '"Lucida Console", Courier, monospace;',
		"beach": '"Noto Sans", sans serif',
		"winter": "courier"
	}

	export let floaters: Array<any>;
	export let uniques: Array<string>;
	export let innerHeight: number;
	export let innerWidth: number;

	let floatCount: number = 50;

	$: floaters = Array.from({ length: floatCount }).map(() => {
		let color: string = palettes[theme][Math.floor(Math.random() * palettes[theme].length)];
		let icon: string = themeIcons[theme][Math.floor(Math.random() * themeIcons[theme].length)];
		return generateRandomFloater(
			icon,
			color,
			theme,
			innerWidth ? innerWidth : 1000,
			innerHeight ? innerHeight : 1000
		);
	});
	$: uniques = themeIcons[theme];
</script>

<svelte:window bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />

<i data-fa-symbol={'fa-symbol-snowman'} class={'fa-solid fa-snowman'}></i>
<i data-fa-symbol={'fa-symbol-umbrella-beach'} class={'fa-solid fa-umbrella-beach'}></i>
<i data-fa-symbol={'fa-symbol-terminal'} class={'fa-solid fa-terminal'}></i>

<DynamicFontAwesome bind:uniques />

<Background bind:floaters />

<div class="site-content" style={'--site-bg:' + hexToRGB(palettes[theme][3], 0.25) + "; --site-font:" + fonts[theme]}>
	<Header bind:theme />

	<div class="main-slot-viewer">
		<slot></slot>
	</div>

	<Footer bind:theme />
</div>

<style>
	.site-content {
		height: calc(100% - 20px);
		width: 100%;
		z-index: 0;
		background-color: var(--site-bg);
		border-radius: 10px;
		font-family: var(--site-font);
	}

	.main-slot-viewer {
		height: calc(100% - 160px);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
	}
</style>
