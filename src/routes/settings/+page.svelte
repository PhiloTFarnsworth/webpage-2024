<script>
	import { getContext } from 'svelte';
	import LayoutForm from '$lib/components/layoutForm.svelte';
	const themeContext = getContext('themeContext');

	let theme;
	let themes;
	themeContext.subscribe((value) => {
		theme = value.theme;
		themes = value.themes;
	});

	function createNewTheme() {
		console.log("click")
		themeContext.update((t) => {
			console.log(t)
			const newId = t.themes.length
			return {
				themes: [
					...t.themes,
					{
						id: newId,
						name: 'custom',
						background: '#111111',
						contentBackground: '#EEEEEE',
						handleColor: '#DDDDDD',
						textColor: '#000000',
						fontSize: "16px",
						styles: [
							{
								id: 0,
								name: 'custom',
								icons: ['aviato'],
								density: 1,
								size: 500,
								colors: ['#FF00FF'],
							}
						]
					}
				],
				theme: {
					id: newId,
					name: 'custom',
					background: '#111111',
					contentBackground: '#EEEEEE',
					handleColor: '#DDDDDD',
					textColor: '#000000',
					font: "monospace",
					fontSize: 16,
					styles: [
						{
							id: 0,
							density: 1,
							name: 'custom',
							icons: ['aviato'],
							size: 500,
							colors: ['#FF00FF'],
						}
					]
				}
			};
		});
	}
</script>

<button class="create-new" on:click={createNewTheme}>Create New!</button>
<div class="settings-container">
	<h2>Background Settings</h2>
	<form>
		<h3>{theme.name}</h3>
		{#if theme}
			<LayoutForm bind:theme />
		{/if}
	</form>
</div>

<style>
	.create-new {
		position: absolute;
		right: 50px;
		top: 150px;
		width: 75px;
	}

	.settings-container {
		background-color: rgba(240, 240, 240, 0.65);
		border-radius: 10px;
		padding: 5px;
		overflow: auto;
		width: 100%;
		display: flex;
		flex-direction: column;
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
