<script lang="ts">
	import Floater from './floater.svelte';
	export let floaters: Array<any>;
</script>

<div class="background">
	{#each floaters as floaterConfig}
		<Floater
			icon={floaterConfig.icon}
			--height={floaterConfig.height + "px"}
			--width={floaterConfig.width + "px"}
			--top={floaterConfig.top + "px"}
			--left={floaterConfig.left + "px"}
			--color={floaterConfig.color}
			--opacity={floaterConfig.opacity + "%"}
			--border={floaterConfig.border}
			--outline={floaterConfig.outline}
			--boxshadow={floaterConfig.boxshadow}
			--horizontalDuration={floaterConfig.horizontalDuration + "s"}
			--horizontalDirection={floaterConfig.horizontalDirection}
			--verticalDuration={floaterConfig.verticalDuration + "s"}
			--verticalDirection={floaterConfig.verticalDirection}
			--spinDuration={floaterConfig.spinDuration + "s"}
			--pushLeftDuration={floaterConfig.pushLeftDuration + "s"}
			--pushLeftForce={floaterConfig.pushLeftForce + "px"}
			--pushDownDuration={floaterConfig.pushDownDuration + "s"}
			--pushDownForce={floaterConfig.pushDownForce + "px"}
			--rainbowDuration={floaterConfig.rainbowDuration + "s"}
			--growDuration={floaterConfig.growDuration + "s"}
			--growScale={floaterConfig.growScale}
			--opacityDuration={floaterConfig.opacityDuration + "s"}
			--opacityIntensity={floaterConfig.opacityIntensity + "%"}
		/>
	{/each}
</div>

<style>
	.background {
		position: absolute;
		height: 100dvh;
		width: 100dvw;
        overflow: hidden;
	}
</style>
