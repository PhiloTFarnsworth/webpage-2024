<script lang="ts">
	import { getContext } from 'svelte';
	import Floater from './layout/floater.svelte';
	const themeContext = getContext('themeContext');

	let theme;
	themeContext.subscribe((value) => {
		theme = value.theme;
	});

	let innerHeight: number;
	let innerWidth: number;

	export function interpretNumerics(
		value: number | Array<any>,
		unit = 'px',
		direction = 'width'
	): string | undefined {
		if (!value && value !== 0) {
			if (unit != 'px') {
				return 0 + unit;
			}
			return undefined;
		}
		if (typeof value === 'number') {
			return value + unit;
		}
		if (value.length > 1) {
			let max: number;
			if (value[1] === 'max') {
				max = direction === 'width' ? innerWidth : innerHeight;
			} else {
				max = value[1];
			}
			return Math.random() * (max - value[0]) + value[0] + unit;
		}
		return 0 + unit;
	}

	export function handleDirectionStrings(value: string) {
		if (value === 'normal' || value === 'reverse') {
			return value;
		}
		return Math.random() > 0.5 ? 'normal' : 'reverse';
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="background" style={'--background:' + theme.background}>
	{#if theme}
		{#each theme.styles as floaterConfig}
			{#each Array.from({ length: floaterConfig.density }) as _}
				<Floater
					icon={floaterConfig.icons[Math.floor(Math.random() * floaterConfig.icons.length)]}
					--size={interpretNumerics(floaterConfig.size)}
					--top={interpretNumerics(floaterConfig['top'], 'px', 'height')}
					--left={interpretNumerics(floaterConfig['left'], 'px', 'width')}
					--right={interpretNumerics(floaterConfig['right'], 'px', 'width')}
					--bottom={interpretNumerics(floaterConfig['bottom'], 'px', 'height')}
					--color={floaterConfig.colors[Math.floor(Math.random() * floaterConfig.colors.length)]}
					--opacity={interpretNumerics(floaterConfig.initialOpacity, '%')}
					--rotation={interpretNumerics(floaterConfig.initialRotation, 'deg')}
					--border={floaterConfig.border}
					--outline={floaterConfig.outline}
					--boxshadow={floaterConfig.boxshadow}
					--horizontalDuration={interpretNumerics(floaterConfig.horizontalDuration, 's')}
					--horizontalDirection={handleDirectionStrings(floaterConfig.horizontalDirection)}
					--verticalDuration={interpretNumerics(floaterConfig.verticalDuration, 's')}
					--verticalDirection={handleDirectionStrings(floaterConfig.verticalDirection)}
					--spinDuration={interpretNumerics(floaterConfig.spinDuration, 's')}
					--pushLeftDuration={interpretNumerics(floaterConfig.pushLeftDuration, 's')}
					--pushLeftForce={interpretNumerics(floaterConfig.pushLeftForce)}
					--pushDownDuration={interpretNumerics(floaterConfig.pushDownDuration, 's')}
					--pushDownForce={interpretNumerics(floaterConfig.pushDownForce)}
					--pushRightDuration={interpretNumerics(floaterConfig.pushRightDuration, 's')}
					--pushRightForce={interpretNumerics(floaterConfig.pushRightForce)}
					--pushUpDuration={interpretNumerics(floaterConfig.pushUpDuration, 's')}
					--pushUpForce={interpretNumerics(floaterConfig.pushUpForce)}
					--rainbowDuration={interpretNumerics(floaterConfig.rainbowDuration, 's')}
					--growDuration={interpretNumerics(floaterConfig.growDuration, 's')}
					--growScale={interpretNumerics(floaterConfig.growScale, '')}
					--opacityDuration={interpretNumerics(floaterConfig.opacityFlareDuration, 's')}
					--opacityIntensity={interpretNumerics(floaterConfig.opacityFlareIntensity, '%')}
				/>
			{/each}
		{/each}
	{/if}
</div>

<style>
	.background {
		position: absolute;
		height: 100dvh;
		width: 100dvw;
		overflow: hidden;
		top: 0;
		left: 0;
		background-color: var(--background);
	}
</style>
