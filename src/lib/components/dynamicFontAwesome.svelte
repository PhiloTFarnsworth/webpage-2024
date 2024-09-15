<script lang="ts">
	import { beforeUpdate } from 'svelte';

	export let uniques: Array<string>;
	let count = 0;

	beforeUpdate(() => {
		if (count > 1) {
			const invisibleDiv = document.querySelector('#fa-secret-container');
			if (invisibleDiv) {
				invisibleDiv.replaceChildren();
			}
		}
        count++
	});
</script>

<div id="fa-secret-container">
	{#each uniques as icon (icon)}
		<i data-fa-symbol={'fa-symbol-' + icon} class={'fa-solid fa-' + icon}></i>
	{/each}
</div>
