<script>
	import { browser } from '$app/environment';
	import LabelCombo from '$lib/components/labelCombo.svelte';
	import StyleForm from '$lib/components/styleForm.svelte';
	import fontConfig from '$lib/assets/fonts.json';
	import { onMount } from 'svelte';
	import allFA from "$lib/assets/allFA.json"

	let allIcons = allFA.fontAwesome;
	export let theme;

	let fonts = [...fontConfig.bundled];

	onMount(() => {
		if (navigator.platform.indexOf('Mac') === 0) {
			fonts = [...fonts, ...fontConfig.mac].sort();
		} else {
			fonts = [...fonts, ...fontConfig.windows].sort();
		}
	});
	
	$: if (browser)
		window.dispatchEvent(new CustomEvent('configChange', { bubbles: false, detail: theme }));
</script>

<datalist id="all-icons-list">
	{#each allIcons as icon}
		<option value={icon}></option>
	{/each}
</datalist>

<datalist id="all-fonts-list">
	{#each fonts as font}
		<option value={font}></option>
	{/each}
</datalist>

<div class="layout-container">
	<LabelCombo id="form-layout-name" name="Layout Name">
		<input type="text" id="form-layout-name" bind:value={theme.name} />
	</LabelCombo>
	<svg class="icon">
		<use href={'#fa-symbol-' + theme.themeIcon}></use>
	</svg>
	<LabelCombo id="form-layout-theme-icon" name="Theme Icon Name">
		<input
			type="text"
			id="form-layout-theme-icon"
			on:input={(e) => {
				if (e.target) {
					if (allIcons.includes(e.target.value)) {
						theme.themeIcon = e.target.value;
						e.target.setCustomValidity('');
					} else {
						e.target.setCustomValidity('Choose a valid icon');
					}
				}
			}}
			list="all-icons-list"
		/>
	</LabelCombo>
	<LabelCombo id="form-background-color" name="Background Color">
		<input type="color" id="form-background-color" bind:value={theme.background} />
	</LabelCombo>
	<LabelCombo id="form-content-background-color" name="Content Background Color">
		<input
			type="color"
			id="form-content-background-color"
			bind:value={theme.contentBackground}
		/>
	</LabelCombo>
	<LabelCombo id="form-handle-color" name="Handles Color">
		<input type="color" id="form-handle-color" bind:value={theme.handleColor} />
	</LabelCombo>
	<LabelCombo id="form-text-color" name="Text Color">
		<input type="color" id="form-text-color" bind:value={theme.textColor} />
	</LabelCombo>
	<LabelCombo id="form-font" name="Font">
		<input type="text" id="form-font" bind:value={theme.font} list={'all-fonts-list'} />
	</LabelCombo>
	<LabelCombo id="form-font-size" name="Font Size">
		<input type="number" id="form-font-size" bind:value={theme.fontSize} />
	</LabelCombo>
</div>

<details>
	<summary>Styles</summary>
	{#each theme.styles as style}
		<StyleForm bind:style bind:theme />
	{/each}
</details>

<style>
	.layout-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
