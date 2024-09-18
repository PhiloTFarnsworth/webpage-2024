<script lang="ts">
	export let id: string;
	export let value: number | Array<number> | undefined;

	let choice: 'single' | 'range' | undefined;
	if (typeof value === 'number') {
		choice = 'single';
	} else if (typeof value === 'object' && value?.length > 1) {
		choice = 'range';
	} else {
		choice = undefined;
	}
</script>
<div class="fieldset-container">
<fieldset>
	<div class="label-radio">
		<input
			type="radio"
			bind:group={choice}
			on:input={() => {
				value = 0;
			}}
			value="single"
			id={"radio-single" + id}
		/>
		<label for={"radio-single" + id}>Single Value</label>
	</div>
	<div class="label-radio">
		<input
			type="radio"
			bind:group={choice}
			on:input={() => {
				value = [0, 0];
			}}
			value="range"
			id={"radio-range" + id}
		/>
		<label for={"radio-range" + id}>Random Range</label>
	</div>
	<div class="label-radio">
		<input
			type="radio"
			bind:group={choice}
			on:input={() => {
				value = undefined;
			}}
			value="undefined"
			id={"radio-undefined" + id}
			/>
		<label for={"radio-undefined" + id}>Undefined Value</label>
	</div>
</fieldset>
</div>

{#if choice === 'single'}
	<input {id} type="number" bind:value />
{:else if choice === 'range'}
	{#if value?.length > 1}
	<div {id}>
		<input type="text" bind:value={value[0]} />
		<input type="text" bind:value={value[1]} />
	</div>
	{/if}
{/if}

<style>
	.fieldset-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	fieldset {
		display: flex;
		flex-direction: row;
		max-width: 300px;
		padding: 5px;
		align-items: baseline;
	}

	fieldset .label-radio {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	fieldset .label-radio label {
		text-align: center;
		font-size: smaller;
	}
</style>