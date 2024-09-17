<script>
	import LabelCombo from '$lib/components/labelCombo.svelte';
	import RangeCombo from '$lib/components/rangeCombo.svelte';
	import { browser } from '$app/environment';

	export let style;
	export let theme;

	$: if (browser)
		window.dispatchEvent(
			new CustomEvent('styleChange', {
				bubbles: false,
				detail: { themeID: theme.id, style: style }
			})
		);
</script>

<details class="style-container">
	<summary>Style: {style.name}</summary>
	<div class="style-main-container">
		<LabelCombo id="form-style-name" name="Style Name">
			<input type="text" id="form-style-name" bind:value={style.name} />
		</LabelCombo>
		<div class="display-panel">
			<p>Icons:</p>
			{#each style.icons as icon}
			<div class="icon-container">
				<p>{icon}</p>
				<svg class="icon" style="margin: 5px;">
					<use href={'#fa-symbol-' + icon}></use>
				</svg>
			</div>
			{/each}
		</div>
		<LabelCombo id="form-style-icon-name" name="Add Icon">
			<input type="text" id="form-style-icon-name" />
			<button>Add</button>
		</LabelCombo>
		<LabelCombo id="form-style-size" name="Floater Size">
			<RangeCombo id="form-style-size" bind:value={style.size} />
		</LabelCombo>
		<LabelCombo id="form-style-density" name="Floater Density">
			<input type="number" id="form-style-size" bind:value={style.density} />
		</LabelCombo>
		<div class="display-panel">
			<p>Colors:</p>

			{#each style.colors as color}
				<div class="swatch-container">
					<span class="color-swatch" style={'--color:' + color + ';'}></span>
					<p>{color}</p>
				</div>
			{/each}
		</div>
		<LabelCombo id="form-style-add-color" name="Add Color">
			<input type="color" />
			<button>Add</button>
		</LabelCombo>
	</div>
	<div class="settings-panel">
		<details>
			<summary>Initial Draw</summary>
			<LabelCombo id="form-style-top-offset" name="Top offset">
				<RangeCombo id="form-style-y-offset" bind:value={style.top} />
			</LabelCombo>
			<LabelCombo id="form-style-left-offset" name="Left offset">
				<RangeCombo id="form-style-x-offset" bind:value={style.left} />
			</LabelCombo>
			<LabelCombo id="form-style-bottom-offset" name="bottom offset">
				<RangeCombo id="form-style-bottom-offset" bind:value={style.bottom} />
			</LabelCombo>
			<LabelCombo id="form-style-right-offset" name="Right offset">
				<RangeCombo id="form-style-right-offset" bind:value={style.right} />
			</LabelCombo>
			<LabelCombo id="form-style-initial-opacity" name="Initial Opacity">
				<RangeCombo id="form-style-initial-opacity" bind:value={style.initialOpacity} />
			</LabelCombo>
			<LabelCombo id="form-style-border" name="Floater Border">
				<input type="text" id="form-style-border" bind:value={style.border} />
			</LabelCombo>
			<LabelCombo id="form-style-border" name="Floater Outline">
				<input type="text" id="form-style-outline" bind:value={style.outline} />
			</LabelCombo>
			<LabelCombo id="form-style-border" name="Floater Boxshadow">
				<input type="text" id="form-style-boxshadow" bind:value={style.boxshadow} />
			</LabelCombo>
		</details>
		<details>
			<summary>Movement</summary>
			<LabelCombo id="form-style-horizontal-duration" name="Horizontal Duration">
				<RangeCombo id="form-style-horizontal-duration" bind:value={style.horizontalDuration} />
			</LabelCombo>
			<LabelCombo id="form-style-horizontal-direction" name="Horizontal Direction">
				<select id="form-style-horizontal-direction" bind:value={style.horizontalDirection}>
					<option value="normal">Normal</option>
					<option value="reverse">Reverse</option>
					<option value="random">Random</option>
				</select>
			</LabelCombo>
			<LabelCombo id="form-style-vertical-duration" name="Vertical Duration">
				<RangeCombo id="form-style-vertical-duration" bind:value={style.verticalDuration} />
			</LabelCombo>
			<LabelCombo id="form-style-vertical-direction" name="Vertical Direction">
				<select id="form=style-vertical-direction" bind:value={style.verticalDirection}>
					<option value="normal">Normal</option>
					<option value="reverse">Reverse</option>
					<option value="random">Random</option>
				</select>
			</LabelCombo>
			{#if style.left || style.left === 0}
				<LabelCombo id="form-style-left-duration" name="Push Left Duration">
					<RangeCombo id="form-style-left-duration" bind:value={style.pushLeftDuration} />
				</LabelCombo>
				<LabelCombo id="form-style-left-force" name="Push Left Force">
					<RangeCombo id="form-style-left-force" bind:value={style.pushLeftForce} />
				</LabelCombo>
			{/if}

			{#if style.right || style.right === 0}
				<LabelCombo id="form-style-right-duration" name="Push Right Duration">
					<RangeCombo id="form-style-right-duration" bind:value={style.pushRightDuration} />
				</LabelCombo>
				<LabelCombo id="form-style-right-force" name="Push Right Force">
					<RangeCombo id="form-style-right-force" bind:value={style.pushRightForce} />
				</LabelCombo>
			{/if}

			{#if style.top || style.top === 0}
				<LabelCombo id="form-style-down-duration" name="Push Down Duration">
					<RangeCombo id="form-style-down-duration" bind:value={style.pushDownDuration} />
				</LabelCombo>
				<LabelCombo id="form-style-down-force" name="Push Down Force">
					<RangeCombo id="form-style-down-force" bind:value={style.pushDownForce} />
				</LabelCombo>
			{/if}

			{#if style.bottom || style.bottom === 0}
				<LabelCombo id="form-style-up-duration" name="Push Up Duration">
					<RangeCombo id="form-style-up-duration" bind:value={style.pushUpDuration} />
				</LabelCombo>
				<LabelCombo id="form-style-up-force" name="Push Up Force">
					<RangeCombo id="form-style-up-force" bind:value={style.pushUpForce} />
				</LabelCombo>
			{/if}
		</details>
		<details>
			<summary>Animation</summary>
			<LabelCombo id="form-style-spin-duration" name="Spin Duration">
				<RangeCombo id="form-style-spin-duration" bind:value={style.spinDuration} />
			</LabelCombo>
			<LabelCombo id="form-style-rainbow-duration" name="Rainbow Duration">
				<RangeCombo id="form-style-rainbow-duration" bind:value={style.rainbowDuration} />
			</LabelCombo>
			<LabelCombo id="form-style-grow-duration" name="Grow Duration">
				<RangeCombo id="form-style-grow-duration" bind:value={style.growDuration} />
			</LabelCombo>
			<LabelCombo id="form-style-grow-scale" name="Grow Scale">
				<RangeCombo id="form-style-grow-scale" bind:value={style.growScale} />
			</LabelCombo>
			<LabelCombo id="form-style-opacity-duration" name="Opacity Flare Duration">
				<RangeCombo id="form-style-opacity-duration" bind:value={style.opacityFlareDuration} />
			</LabelCombo>
			<LabelCombo id="form-style-opacity-intensity" name="Opacity Flare Intensity">
				<RangeCombo id="form-style-opacity-intensity" bind:value={style.opacityFlareIntensity} />
			</LabelCombo>
		</details>
	</div>
</details>

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
		padding: 5px;
	}

	.style-container {
		width: 100%;
	}

	.style-container > div {
		display: flex;
		justify-content: center;
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
		padding: 5px
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
</style>
