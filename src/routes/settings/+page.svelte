<script lang="ts">
	import { getContext } from 'svelte';
	import LayoutForm from '$lib/components/forms/layoutForm.svelte';
	import { disableScrollHandling } from '$app/navigation';
	const themeContext = getContext('themeContext');

	let theme;
	let themes;
	themeContext.subscribe((value) => {
		theme = value.theme;
		themes = value.themes;
	});

	const necessaryKeys = ['name', 'styles'];
	const necessaryStyleKeys = ['name', 'icons', 'colors',];

	function createNewTheme() {
		themeContext.update((t) => {
			const newId = t.themes.length;
			return {
				themes: [
					...t.themes,
					{
						id: newId,
						name: 'custom',
						themeIcon: 'anchor',
						background: '#111111',
						contentBackground: '#EEEEEE',
						handleColor: '#DDDDDD',
						textColor: '#000000',
						fontSize: '16px',
						styles: [
							{
								id: 0,
								name: 'custom',
								icons: ['ship'],
								density: 1,
								size: 500,
								colors: ['#FF00FF'],
								initialOpacity: 100
							}
						]
					}
				],
				theme: {
					id: newId,
					name: 'custom',
					themeIcon: 'anchor',
					background: '#111111',
					contentBackground: '#EEEEEE',
					handleColor: '#DDDDDD',
					textColor: '#000000',
					font: 'monospace',
					fontSize: 16,
					styles: [
						{
							id: 0,
							density: 1,
							name: 'custom',
							icons: ['ship'],
							size: 500,
							colors: ['#FF00FF'],
							initialOpacity: 100
						}
					]
				}
			};
		});
	}

	function showExport() {
		const dialog = document.querySelector('#export-theme-dialog');
		if (dialog) {
			dialog.showModal();
		}
	}

	function dismissExport() {
		const dialog = document.querySelector('#export-theme-dialog');
		if (dialog) {
			dialog.close();
		}
	}

	function showImport() {
		const dialog = document.querySelector('#import-theme-dialog');
		if (dialog) {
			dialog.showModal();
		}
	}

	function importTheme() {
		const importArea = document.querySelector('#import-text-area');
		const dialog = document.querySelector('#import-theme-dialog');
		if (importArea) {
			console.log(importArea)
			const importValue = importArea.value;
			console.log(importValue)
			try {
				const newTheme = JSON.parse(importValue);
				console.log(newTheme)
				console.log(Object.keys(newTheme))
				if (necessaryKeys.every((k) => Object.keys(newTheme).includes(k))) {
					console.log("got the keys")
					if (necessaryStyleKeys.every((k) => newTheme.styles.every(m => Object.keys(m).includes(k)))) {
						console.log("got the style keys")
						//Cool, we probably won't crash, just add eligible ids and you're done!
						newTheme.id = Math.max(themes.map((t) => t.id)) + 1;
						newTheme.styles.forEach((s, i) => {
							s.id = i;
						});
						themeContext.update(t => {
							return {
								themes: [...t.themes, newTheme],
								theme: newTheme
							}
						})
						dialog.close();
					} else {
						const instructions = document.querySelector('#import-instructions');
						if (instructions) {
							instructions.setAttribute('border', '1px solid red');
						}
					}
				} else {
					const instructions = document.querySelector('#import-instructions');
					if (instructions) {
						instructions.setAttribute('border', '1px solid red');
					}
				}
			} catch (error) {
				const instructions = document.querySelector('#import-instructions');
				if (instructions) {
					instructions.setAttribute('border', '1px solid red');
				}
			}
		}
	}
</script>

<dialog id="export-theme-dialog" class="tool-dialog">
	<p>This a JSON representation of the theme and background animations! <a href="mailto:IDoDevThings@gmail.com">Email Me Your Theme!</a></p>
	<textarea class="tool-text">{JSON.stringify(theme, null, 2)}</textarea>
	<button class="create-new" on:click={dismissExport}>Dismiss</button>
</dialog>

<dialog id="import-theme-dialog" class="tool-dialog">
	<div class="import-instructions-split">
		<p id="import-instructions">
			A valid theme needs a "name" string and a "styles" array. A valid icon style needs a "name"
			sting, a "colors" array and an "icons" array. For best results, include a "density" number
			(for number of svgs), "size" number and an "initialOpacity" number so that you can actually
			see the icons. Minimum Example:
			<code>
				{JSON.stringify(
					{
						name: 'example',
						background: '#111111',
						contentBackground: '#EEEEEE',
						handleColor: '#DDDDDD',
						textColor: '#000000',
						styles: [
							{
								name: 'example_style',
								colors: ["#FF00FF"],
								icons: ["ship"]
							}
						]
					},
					null,
					2
				)}
			</code>
		</p>
		<textarea class="tool-text-import" id="import-text-area" />
	</div>
	<button on:click={importTheme}>Import!</button>  I don't think anyone is going to miss this feature
</dialog>

<div class="settings-container">
	<button on:click={createNewTheme}>Create New!</button>
	<button on:click={showExport}>Export!</button> 
	<!-- <button on:click={showImport}>Import!</button> -->
	<h2>Background Settings</h2>
	<form>
		<h3>{theme.name}</h3>
		{#if theme}
			<LayoutForm bind:theme />
		{/if}
	</form>
</div>

<style>

	.settings-container {
		background-color: rgba(240, 240, 240, 0.65);
		border-radius: 10px;
		padding: 5px;
		overflow: auto;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.tool-dialog {
		width: 80dvw;
		height: 80dvh;
	}

	.tool-text {
		width: 100%;
		height: calc(100% - 100px);
		margin-bottom: 5px;
	}

	.import-instructions-split {
		display: flex;
		flex-wrap: wrap;
		height: calc(100% - 50px);
	}

	.import-instructions-split p {
		max-width: 300px;
	}

	.tool-text-import {
		min-width: 50%;
		max-width: 100%;
		height: 100%;
	}

	form {
		padding: 5px;
		overflow: auto;
		width: calc(100% - 10px);
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	h2,
	h3 {
		width: 100%;
		text-align: center;
		text-decoration: underline;
		margin-bottom: 10px;
	}
</style>
