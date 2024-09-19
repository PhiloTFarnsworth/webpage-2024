<script>
	import { browser } from '$app/environment';
	import LabelCombo from '$lib/components/forms/labelCombo.svelte';
	import StyleForm from '$lib/components/forms/styleForm.svelte';
	import fontConfig from '$lib/assets/fonts.json';
	import { onMount } from 'svelte';
	import allFA from '$lib/assets/allFA.json';

	let allIcons = allFA.fontAwesome;
	export let theme;

	let fonts = [...fontConfig.bundled];

	let selectedStyle;

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
	<div class="group-container">
		<LabelCombo id={'form-layout-name' + theme.id} name="Layout Name">
			<input type="text" id={'form-layout-name' + theme.id} bind:value={theme.name} />
		</LabelCombo>
		<div class="theme-icon-container">
			<LabelCombo id={'form-layout-theme-icon' + theme.id} name="Theme Icon Name">
				<input
					type="text"
					id={'form-layout-theme-icon' + theme.id}
					value={theme.themeIcon}
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
			<svg class="icon">
				<use href={'#fa-symbol-' + theme.themeIcon}></use>
			</svg>
		</div>
		<div class="theme-icon-container">
		<LabelCombo id={'form-font' + theme.id} name="Font">
			<input
				type="text"
				id={'form-font' + theme.id}
				bind:value={theme.font}
				list={'all-fonts-list'}
			/>
		</LabelCombo>
		<span style="font-size: 32px;">ABC</span>
		</div>
		<LabelCombo id={'form-font-size' + theme.id} name="Font Size">
			<input type="number" id={'form-font-size' + theme.id} bind:value={theme.fontSize} />
		</LabelCombo>
	</div>
	<details open>
		<summary>
			Colors:
			<span>
				<span class="color-preview" style={'--color-preview:' + theme.background}></span>
				<span class="color-preview" style={'--color-preview:' + theme.contentBackground}></span>
				<span class="color-preview" style={'--color-preview:' + theme.handleColor}></span>
				<span class="color-preview" style={'--color-preview:' + theme.textColor}></span>
			</span>
		</summary>
		<div class="theme-colors">
			<div>
				<LabelCombo id={'form-background-color' + theme.id} name="Background Color" reverse={true}>
					<input
						type="color"
						id={'form-background-color' + theme.id}
						bind:value={theme.background}
					/>
				</LabelCombo>
			</div>
			<div>
				<LabelCombo
					id={'form-content-background-color' + theme.id}
					name="Content Background Color"
					reverse={true}
				>
					<input
						type="color"
						id={'form-content-background-color' + theme.id}
						bind:value={theme.contentBackground}
					/>
				</LabelCombo>
			</div>
			<div>
				<LabelCombo id={'form-handle-color' + theme.id} name="Handles Color" reverse={true}>
					<input type="color" id={'form-handle-color' + theme.id} bind:value={theme.handleColor} />
				</LabelCombo>
			</div>
			<div>
				<LabelCombo id={'form-text-color' + theme.id} name="Text Color" reverse={true}>
					<input type="color" id={'form-text-color' + theme.id} bind:value={theme.textColor} />
				</LabelCombo>
			</div>
		</div>
	</details>
</div>
<div class="style-choice-container">
	<label>Styles</label>
	<button>Create New</button>
	<div class="style-button-container">
		{#each theme.styles as style}
			<button
				class="style-button"
				on:click={(e) => {
					e.preventDefault();
					selectedStyle = style.id;
				}}
				style={'background-color:' + (style.id === selectedStyle ? theme.handlesColor : 'unset')}
				>{style.name}</button
			>
		{/each}
	</div>
</div>

{#each theme.styles as style}
	{#if selectedStyle === style.id}
		<StyleForm bind:style bind:theme />
	{/if}
{/each}

<style>
	.layout-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.theme-colors {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 600px;
		min-width: 300px;
	}

	.theme-colors div {
		width: 150px;
	}

	.color-preview {
		display: block;
		background-color: var(--color-preview);
		height: 20px;
		width: 20px;
		border-radius: 100%;
	}

	.theme-icon-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.group-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: baseline;
		width: 100%;
	}

	.style-choice-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.style-button-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.style-button {
		min-height: 30px;
		width: 125px
	}

	summary span {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	details[open] .color-preview {
		height: 0px;
		width: 0px;
	}

	summary span span {
		margin-left: 5px;
		margin-right: 5px;
	}
</style>
