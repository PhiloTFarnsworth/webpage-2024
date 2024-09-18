<script lang="ts">
	import LabelCombo from '$lib/components/forms/labelCombo.svelte';
	import RangeCombo from '$lib/components/forms/rangeCombo.svelte';
	import { browser } from '$app/environment';

	export let style;
	export let theme;
	let addColor: string;
	let addIcon: string;

	$: if (browser)
		window.dispatchEvent(
			new CustomEvent('styleChange', {
				bubbles: false,
				detail: { themeID: theme.id, style: style }
			})
		);
</script>

<div class="style-main-container">
	<div class="group-container">
		<LabelCombo id={'form-style-name' + theme.id + '-' + style.id} name="Style Name">
			<input
				type="text"
				id={'form-style-name' + theme.id + '-' + style.id}
				bind:value={style.name}
			/>
		</LabelCombo>
		<LabelCombo id={'form-style-density' + theme.id + '-' + style.id} name="Floater Density">
			<input
				type="number"
				id={'form-style-size' + theme.id + '-' + style.id}
				bind:value={style.density}
			/>
		</LabelCombo>
	</div>
	<LabelCombo id={'form-style-size' + theme.id + '-' + style.id} name="Floater Size">
		<RangeCombo id={'form-style-size' + theme.id + '-' + style.id} bind:value={style.size} />
	</LabelCombo>
</div>
<div class="settings-panel">
	<details>
		<summary
			>Icons:
			<span>
				{#each style.icons as icon}
					<span class="color-preview">
						<svg class="icon">
							<use href={'#fa-symbol-' + icon}></use>
						</svg>
					</span>
				{/each}
			</span>
		</summary>
		<div class="display-panel">
			{#each style.icons as icon}
				<div class="icon-container">
					<button class="delete-item" on:click={(e) => {e.preventDefault(); style.icons = style.icons.filter(c => c != icon)}}>X</button>
					<p>{icon}</p>
					<svg class="icon" style="margin: 5px;">
						<use href={'#fa-symbol-' + icon}></use>
					</svg>
				</div>
			{/each}
		</div>
		<LabelCombo id={'form-style-icon-name' + theme.id + '-' + style.id} name="Add Icon">
			<input type="text" id={'form-style-icon-name' + theme.id + '-' + style.id} bind:value={addIcon} />
			<button class="add-button" on:click={(e) => {e.preventDefault(); if (addIcon) style.icons = [...style.icons, addIcon]}}>Add</button>
		</LabelCombo>
	</details>
	<details>
		<summary
			>Colors:
			<span>
				{#each style.colors as color}
					<span class="color-preview" style={'--color-preview:' + color}></span>
				{/each}
			</span>
		</summary>
		<div class="display-panel">
			{#each style.colors as color}
				<div class="swatch-container">
					<button class="delete-item" on:click={(e) => {e.preventDefault(); style.colors = style.colors.filter(c => c != color)}}>X</button>
					<span class="color-swatch" style={'--color:' + color + ';'}></span>
					<p>{color}</p>
				</div>
			{/each}
		</div>
		<LabelCombo id={'form-style-add-color' + theme.id + '-' + style.id} name="Add Color">
			<input type="color" bind:value={addColor} />
			<button class="add-button" on:click={(e) => {e.preventDefault(); if (addColor) style.colors = [...style.colors, addColor]}}>Add</button>
		</LabelCombo>
	</details>
</div>
<div class="settings-panel">
	<details>
		<summary>Initial Draw</summary>
		<LabelCombo id={'form-style-top-offset' + theme.id + '-' + style.id} name="Top offset">
			<RangeCombo id={'form-style-y-offset' + theme.id + '-' + style.id} bind:value={style.top} />
		</LabelCombo>
		<LabelCombo id={'form-style-left-offset' + theme.id + '-' + style.id} name="Left offset">
			<RangeCombo id={'form-style-x-offset' + theme.id + '-' + style.id} bind:value={style.left} />
		</LabelCombo>
		<LabelCombo id={'form-style-bottom-offset' + theme.id + '-' + style.id} name="bottom offset">
			<RangeCombo
				id={'form-style-bottom-offset' + +theme.id + '-' + style.id}
				bind:value={style.bottom}
			/>
		</LabelCombo>
		<LabelCombo id={'form-style-right-offset' + theme.id + '-' + style.id} name="Right offset">
			<RangeCombo
				id={'form-style-right-offset' + theme.id + '-' + style.id}
				bind:value={style.right}
			/>
		</LabelCombo>
		<LabelCombo
			id={'form-style-initial-opacity' + theme.id + '-' + style.id}
			name="Initial Opacity"
		>
			<RangeCombo
				id={'form-style-initial-opacity' + theme.id + '-' + style.id}
				bind:value={style.initialOpacity}
			/>
		</LabelCombo>
		<LabelCombo id={'form-style-border' + theme.id + '-' + style.id} name="Floater Border">
			<input
				type="text"
				id={'form-style-border' + theme.id + '-' + style.id}
				bind:value={style.border}
			/>
		</LabelCombo>
		<LabelCombo id={'form-style-outline' + theme.id + '-' + style.id} name="Floater Outline">
			<input
				type="text"
				id={'form-style-outline' + theme.id + '-' + style.id}
				bind:value={style.outline}
			/>
		</LabelCombo>
		<LabelCombo id={'form-style-boxshadow' + theme.id + '-' + style.id} name="Floater Boxshadow">
			<input
				type="text"
				id={'form-style-boxshadow' + theme.id + '-' + style.id}
				bind:value={style.boxshadow}
			/>
		</LabelCombo>
	</details>
	<details>
		<summary>Movement</summary>
		<LabelCombo
			id={'form-style-horizontal-duration' + theme.id + '-' + style.id}
			name="Horizontal Duration"
		>
			<RangeCombo
				id={'form-style-horizontal-duration' + theme.id + '-' + style.id}
				bind:value={style.horizontalDuration}
			/>
		</LabelCombo>
		<LabelCombo
			id={'form-style-horizontal-direction' + theme.id + '-' + style.id}
			name="Horizontal Direction"
		>
			<select
				id={'form-style-horizontal-direction' + theme.id + '-' + style.id}
				bind:value={style.horizontalDirection}
			>
				<option value="normal">Normal</option>
				<option value="reverse">Reverse</option>
				<option value="random">Random</option>
			</select>
		</LabelCombo>
		<LabelCombo
			id={'form-style-vertical-duration' + theme.id + '-' + style.id}
			name="Vertical Duration"
		>
			<RangeCombo
				id={'form-style-vertical-duration' + theme.id + '-' + style.id}
				bind:value={style.verticalDuration}
			/>
		</LabelCombo>
		<LabelCombo
			id={'form-style-vertical-direction' + theme.id + '-' + style.id}
			name="Vertical Direction"
		>
			<select
				id={'form=style-vertical-direction' + theme.id + '-' + style.id}
				bind:value={style.verticalDirection}
			>
				<option value="normal">Normal</option>
				<option value="reverse">Reverse</option>
				<option value="random">Random</option>
			</select>
		</LabelCombo>
		{#if style.left || style.left === 0}
			<LabelCombo
				id={'form-style-left-duration' + theme.id + '-' + style.id}
				name="Push Left Duration"
			>
				<RangeCombo
					id={'form-style-left-duration' + theme.id + '-' + style.id}
					bind:value={style.pushLeftDuration}
				/>
			</LabelCombo>
			<LabelCombo id={'form-style-left-force' + theme.id + '-' + style.id} name="Push Left Force">
				<RangeCombo
					id={'form-style-left-force' + theme.id + '-' + style.id}
					bind:value={style.pushLeftForce}
				/>
			</LabelCombo>
		{/if}

		{#if style.right || style.right === 0}
			<LabelCombo
				id={'form-style-right-duration' + theme.id + '-' + style.id}
				name="Push Right Duration"
			>
				<RangeCombo
					id={'form-style-right-duration' + theme.id + '-' + style.id}
					bind:value={style.pushRightDuration}
				/>
			</LabelCombo>
			<LabelCombo id={'form-style-right-force' + theme.id + '-' + style.id} name="Push Right Force">
				<RangeCombo
					id={'form-style-right-force' + theme.id + '-' + style.id}
					bind:value={style.pushRightForce}
				/>
			</LabelCombo>
		{/if}

		{#if style.top || style.top === 0}
			<LabelCombo
				id={'form-style-down-duration' + theme.id + '-' + style.id}
				name="Push Down Duration"
			>
				<RangeCombo
					id={'form-style-down-duration' + theme.id + '-' + style.id}
					bind:value={style.pushDownDuration}
				/>
			</LabelCombo>
			<LabelCombo id={'form-style-down-force' + theme.id + '-' + style.id} name="Push Down Force">
				<RangeCombo
					id={'form-style-down-force' + theme.id + '-' + style.id}
					bind:value={style.pushDownForce}
				/>
			</LabelCombo>
		{/if}

		{#if style.bottom || style.bottom === 0}
			<LabelCombo id={'form-style-up-duration' + theme.id + '-' + style.id} name="Push Up Duration">
				<RangeCombo
					id={'form-style-up-duration' + theme.id + '-' + style.id}
					bind:value={style.pushUpDuration}
				/>
			</LabelCombo>
			<LabelCombo id={'form-style-up-force' + theme.id + '-' + style.id} name="Push Up Force">
				<RangeCombo
					id={'form-style-up-force' + theme.id + '-' + style.id}
					bind:value={style.pushUpForce}
				/>
			</LabelCombo>
		{/if}
	</details>
	<details>
		<summary>Animation</summary>
		<LabelCombo id={'form-style-spin-duration' + theme.id + '-' + style.id} name="Spin Duration">
			<RangeCombo
				id={'form-style-spin-duration' + theme.id + '-' + style.id}
				bind:value={style.spinDuration}
			/>
		</LabelCombo>
		<LabelCombo
			id={'form-style-rainbow-duration' + theme.id + '-' + style.id}
			name="Rainbow Duration"
		>
			<RangeCombo
				id={'form-style-rainbow-duration' + theme.id + '-' + style.id}
				bind:value={style.rainbowDuration}
			/>
		</LabelCombo>
		<LabelCombo id={'form-style-grow-duration' + theme.id + '-' + style.id} name="Grow Duration">
			<RangeCombo
				id={'form-style-grow-duration' + theme.id + '-' + style.id}
				bind:value={style.growDuration}
			/>
		</LabelCombo>
		<LabelCombo id={'form-style-grow-scale' + theme.id + '-' + style.id} name="Grow Scale">
			<RangeCombo
				id={'form-style-grow-scale' + theme.id + '-' + style.id}
				bind:value={style.growScale}
			/>
		</LabelCombo>
		<LabelCombo
			id={'form-style-opacity-duration' + theme.id + '-' + style.id}
			name="Opacity Flare Duration"
		>
			<RangeCombo
				id={'form-style-opacity-duration' + theme.id + '-' + style.id}
				bind:value={style.opacityFlareDuration}
			/>
		</LabelCombo>
		<LabelCombo
			id={'form-style-opacity-intensity' + theme.id + '-' + style.id}
			name="Opacity Flare Intensity"
		>
			<RangeCombo
				id={'form-style-opacity-intensity' + theme.id + '-' + style.id}
				bind:value={style.opacityFlareIntensity}
			/>
		</LabelCombo>
	</details>
</div>

<style>
	.settings-panel {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
	}

	.settings-panel details {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-width: 280px;
		max-width: 480px;
		border: 1px solid black;
		max-height: 500px;
		overflow-y: auto;
		padding: 10px;
	}

	.group-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: baseline;
		width: 100%;
	}
	
	.swatch-container {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 120px;
	}

	.color-swatch {
		display: block;
		width: 45px;
		height: 90px;
		margin: 5px;
		border-radius: 100%;
		background-color: var(--color);
	}

	.swatch-container p {
		font-size: 12px;
		writing-mode: vertical-rl;
		text-orientation: upright;
		max-height: 100px;
	}

	.icon-container {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		padding: 5px;
	}

	.icon-container p {
		max-width: 80px;
		font-size: 12px;
		text-align: center;
	}

	.icon-container .icon {
		height: 50px;
		width: 50px;
	}

	.display-panel {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}

	.style-main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.color-preview {
		display: block;
		background-color: var(--color-preview);
		height: 20px;
		width: 20px;
		border-radius: 100%;
	}

	.add-button {
		width: 100px;
		margin-top: 5px;
	}

	span > .color-preview > .icon {
		height: 100%;
		width: 100%;
		margin: 0;
	}

	summary span {
		display: flex;
		width: 100%;
		height: 20px;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	details[open] > summary > span > .color-preview {
		height: 0px;
		width: 0px;
	}

	summary span span {
		margin-right: 5px;
	}
</style>
