<script lang="ts">
	import { beforeUpdate, getContext } from 'svelte';
	import brands from '$lib/assets/brandsFA.json';
	import solid from '$lib/assets/solidFA.json';
	import type { Writable } from 'svelte/store';
	const themeContext: Writable = getContext('themeContext');

	let themes;
	themeContext.subscribe((value) => {
		themes = value.themes;
	});

	// Clean up crud that fontAwesome just leaves lying around
	beforeUpdate(() => {
		const invisibleDiv = document.querySelector('#fa-secret-container');
		if (invisibleDiv) {
			let trackedIcons: Array<string | number | null> = [];
			invisibleDiv.childNodes.forEach((n) => {
				if (n.nodeName == '#comment') {
					invisibleDiv.removeChild(n);
				}
				if (n.nodeName == 'svg') {
					const symbol = n.firstChild;
					if (symbol) {
						if (trackedIcons.includes(symbol.dataset['icon'])) invisibleDiv.removeChild(n);
						else trackedIcons.push(symbol.dataset['icon']);
					}
				}
			});
		}
	});
</script>

<div id="fa-secret-container">
	{#if themes}
		{#each themes as theme ((theme.id, theme.themeIcon))}
			{#each theme.styles as style (style.id)}
				{#each style.icons as icon (icon)}
					{#if brands.brands.includes(icon)}
						<i data-fa-symbol={'fa-symbol-' + icon} class={'fa-brands fa-' + icon}></i>
					{:else if solid.solid.includes(icon)}
						<i data-fa-symbol={'fa-symbol-' + icon} class={'fa-solid fa-' + icon}></i>
					{:else}
						<i data-fa-symbol={'fa-symbol-' + icon} class={'fa-regular fa-' + icon}></i>
					{/if}
				{/each}
			{/each}
			{#if brands.brands.includes(theme.themeIcon)}
				<i data-fa-symbol={'fa-symbol-' + theme.themeIcon} class={'fa-brands fa-' + theme.themeIcon}
				></i>
			{:else if solid.solid.includes(theme.themeIcon)}
				<i data-fa-symbol={'fa-symbol-' + theme.themeIcon} class={'fa-solid fa-' + theme.themeIcon}
				></i>
			{:else}
				<i
					data-fa-symbol={'fa-symbol-' + theme.themeIcon}
					class={'fa-regular fa-' + theme.themeIcon}
				></i>
			{/if}
		{/each}
	{/if}
</div>
