<script>
	import LabelCombo from '$lib/components/labelCombo.svelte';
	import RangeCombo from '$lib/components/rangeCombo.svelte';
</script>

<form>
	<LabelCombo id="form-style-name" name="Style Name">
		<input type="text" id="form-style-name" />
	</LabelCombo>
	<LabelCombo id="form-style-icon-name" name="Add Icon">
		<input type="text" id="form-style-icon-name" />
	</LabelCombo>
	<details>
		<summary>Icons</summary>
	</details>
	<LabelCombo id="form-style-size" name="Floater Size">
		<RangeCombo id="form-style-size" />
	</LabelCombo>
	<LabelCombo id="form-style-y-offset" name="Y-Offset">
		<RangeCombo id="form-style-y-offset" />
	</LabelCombo>
	<LabelCombo id="form-style-x-offset" name="X-Offset">
		<RangeCombo id="form-style-x-offset" />
	</LabelCombo>
	<LabelCombo id="form-style-add-color" name="Add Color">
		<input type="color" />
	</LabelCombo>
	<details>
		<summary>Colors</summary>
	</details>
	<LabelCombo id="form-style-initial-opacity" name="Initial Opacity">
		<RangeCombo id="form-style-initial-opacity" />
	</LabelCombo>
	<LabelCombo id="form-style-border" name="Floater Border">
		<input type="text" id="form-style-border" />
	</LabelCombo>
	<LabelCombo id="form-style-border" name="Floater Outline">
		<input type="text" id="form-style-outline" />
	</LabelCombo>
	<LabelCombo id="form-style-border" name="Floater Boxshadow">
		<input type="text" id="form-style-boxshadow" />
	</LabelCombo>
	<LabelCombo id="form-style-horizontal-duration" name="Horizontal Duration">
		<RangeCombo id="form-style-horizontal-duration" />
	</LabelCombo>
	<LabelCombo id="form-style-horizontal-direction" name="Horizontal Direction">
		<select id="form-style-horizontal-direction">
			<option value="normal">Normal</option>
			<option value="reverse">Reverse</option>
			<option value="random">Random</option>
		</select>
	</LabelCombo>
	<LabelCombo id="form-style-vertical-duration" name="Vertical Duration">
		<RangeCombo id="form-style-vertical-duration" />
	</LabelCombo>
	<LabelCombo id="form-style-vertical-direction" name="Vertical Direction">
		<select id="form=style-vertical-direction">
			<option value="normal">Normal</option>
			<option value="reverse">Reverse</option>
			<option value="random">Random</option>
		</select>
	</LabelCombo>
	<LabelCombo id="form-style-spin-duration" name="Spin Duration">
		<RangeCombo id="form-style-spin-duration" />
	</LabelCombo>
	<LabelCombo id="form-style-left-duration" name="Push Left Duration">
		<RangeCombo id="form-style-left-duration" />
	</LabelCombo>
	<LabelCombo id="form-style-left-force" name="Push Left Force">
		<RangeCombo id="form-style-left-force" />
	</LabelCombo>
	<LabelCombo id="form-style-right-duration" name="Push Right Duration">
		<RangeCombo id="form-style-right-duration" />
	</LabelCombo>
	<LabelCombo id="form-style-right-force" name="Push Right Force">
		<RangeCombo id="form-style-right-force" />
	</LabelCombo>
	<LabelCombo id="form-style-rainbow-duration" name="Rainbow Duration">
		<RangeCombo id="form-style-rainbow-duration" />
	</LabelCombo>
	<LabelCombo id="form-style-grow-duration" name="Grow Duration">
		<RangeCombo id="form-style-grow-duration" />
	</LabelCombo>
	<LabelCombo id="form-style-grow-scale" name="Grow Scale">
		<RangeCombo id="form-style-grow-scale" />
	</LabelCombo>
	<LabelCombo id="form-style-opacity-duration" name="Opacity Flare Duration">
		<RangeCombo id="form-style-opacity-duration" />
	</LabelCombo>
	<LabelCombo id="form-style-opacity-intensity" name="Opacity Flare Intensity">
		<RangeCombo id="form-style-opacity-intensity" />
	</LabelCombo>
</form>

<style>
	form {
		background-color: rgba(240, 240, 240, 0.65);
		border-radius: 10px;
		padding: 5px;
		overflow: auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
