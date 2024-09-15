<script lang="ts">
	export let choice: 'single' | 'range' = 'single';
	export let id: string;
</script>

<input type="radio" bind:group={choice} value="single" />
<input type="radio" bind:group={choice} value="range" />

{#if choice === 'single'}
	<input id={id} type="number" />
{:else}
	<div id={id}>
		<input type="number" placeholder="Min" />
		<input type="number" placeholder="Max" />
	</div>
{/if}
