<script lang="ts">
	import Background from '$lib/components/background.svelte';
	import DynamicFontAwesome from '$lib/components/dynamicFontAwesome.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import coder from '$lib/assets/coder.json';
	import winter from '$lib/assets/winter.json';
	import beach from '$lib/assets/beach.json';
	import { hexToRGB } from '$lib/utilities/palettes';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const themeContext = writable();
	$: themeContext.set({ themes: [coder, winter, beach], theme: winter });

	setContext('themeContext', themeContext);

	export let themes;
	export let theme;
	themeContext.subscribe((value) => {
		themes = value?.themes;
		theme = value?.theme
	});

	function themeUpdate(themeConfig) {
		themeContext.update((s) => {
			return {
				themes: s.themes.map((t) => {
					if (t.id !== themeConfig.id) {
						return t;
					}
					return themeConfig;
				}),
				theme: themeConfig.id === s.theme.id ? themeConfig : s.theme
			};
		});
	}

	function themeChange(themeConfig) {
		themeContext.update((s) => {
			return {
				themes: s.themes,
				theme: themeConfig
			};
		});
	}

	function styleUpdate(detail) {
		themeContext.update((u) => {
			return {
				themes: u.themes.map((t) => {
					if (t.id !== detail.themeID) {
						return t;
					}
					return {
						...t,
						styles: [
							...t.styles.map((s) => {
								if (s.id !== detail.style.id) {
									return s;
								}
								return detail.style;
							})
						]
					};
				}),
				theme:
					detail.themeID !== u.theme.id
						? u.theme
						: {
								...u.theme,
								styles: [
									...u.theme.styles.map((s) => {
										if (s.id !== detail.style.id) {
											return s;
										}
										return detail.style;
									})
								]
							}
			};
		});
	}
</script>

<svelte:window
	on:configChange={(e) => {
		themeUpdate(e.detail);
	}}
	on:themeChange={(e) => {
		themeChange(e.detail);
	}}
	on:styleChange={(e) => {
		styleUpdate(e.detail);
	}}
/>

<DynamicFontAwesome />

<Background />

<div
	class="site-content"
	style={'--site-font:' +
		theme.font +
		'; --text:' +
		theme.textColor +
		'; --fontSize:' +
		theme.fontSize +
		'px'}
>
	<Header />

	<div class="main-slot-viewer" style={'--content-bg:' + hexToRGB(theme.contentBackground, 0.5)}>
		<slot></slot>
	</div>

	<Footer />
</div>

<style>
	.site-content {
		height: calc(100% - 20px);
		width: 100%;
		z-index: 0;
		border-radius: 10px;
		font-family: var(--site-font);
		overflow: hidden;
		color: var(--text);
		font-size: var(--fontSize);
	}

	.main-slot-viewer {
		height: calc(100% - 200px);
		display: flex;
		justify-content: center;
		overflow: auto;
		padding: 20px 10px;
		background-color: var(--content-bg);
	}

	@font-face {
		font-family: 'AmaticSC';
		font-style: normal;
		src: url('/fonts/AmaticSC-Bold.ttf');
	}

	@font-face {
		font-family: 'Caveat';
		font-style: normal;
		src: url('/fonts/Caveat-VariableFont_wght.ttf');
	}

	@font-face {
		font-family: 'Cinzel';
		font-style: normal;
		src: url('/fonts/cinzel-VariableFont_wght.ttf');
	}

	@font-face {
		font-family: 'Fascinate';
		font-style: normal;
		src: url('/fonts/FascinateInline-Regular.ttf');
	}

	@font-face {
		font-family: 'JF Shadow';
		font-style: normal;
		src: url('/fonts/JacquesFrancoisShadow-Regular.ttf');
	}

	@font-face {
		font-family: 'Kolker Brush';
		font-style: normal;
		src: url('/fonts/KolkerBrush-Regular.ttf');
	}

	@font-face {
		font-family: 'Lacquer';
		font-style: normal;
		src: url('/fonts/Lacquer-Regular.ttf');
	}

	@font-face {
		font-family: 'Noto Sans';
		font-style: normal;
		src: url('/fonts/NotoSans-VariableFont_wdth,wght.ttf');
	}

	@font-face {
		font-family: 'Orbitron';
		font-style: normal;
		src: url('/fonts/Orbitron-VariableFont_wght.ttf');
	}

	@font-face {
		font-family: 'Plaster';
		font-style: normal;
		src: url('/fonts/Plaster-Regular.ttf');
	}

	@font-face {
		font-family: 'Playwright CU';
		font-style: normal;
		src: url('/fonts/PlaywriteCU-VariableFont_wght.ttf');
	}

	@font-face {
		font-family: 'Protest Guerrilla';
		font-style: normal;
		src: url('/fonts/ProtestGuerrilla-Regular.ttf');
	}

	@font-face {
		font-family: 'Broken Fax';
		font-style: normal;
		src: url('/fonts/RubikBrokenFax-Regular.ttf');
	}

	@font-face {
		font-family: 'Sankofa Display';
		font-style: normal;
		src: url('/fonts/SankofaDisplay-Regular.ttf');
	}

	@font-face {
		font-family: 'Sofadi One';
		font-style: normal;
		src: url('/fonts/SofadiOne-Regular.ttf');
	}

	@font-face {
		font-family: 'Warnes';
		font-style: normal;
		src: url('/fonts/Warnes-Regular.ttf');
	}

	@font-face {
		font-family: 'Wavefont';
		font-style: normal;
		src: url('/fonts/Wavefont-VariableFont_ROND,YELA,wght.ttf');
	}
</style>
