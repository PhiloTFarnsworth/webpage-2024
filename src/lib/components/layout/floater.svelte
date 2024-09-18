<script lang="ts">
	export let icon: string;
</script>

<svg>
	<use href={'#fa-symbol-' + icon}></use>
</svg>

<style>
	svg {
		position: absolute;
		top: var(--top);
		left: var(--left);
		right: var(--right);
		bottom: var(--bottom);
		width: var(--size);
		height: var(--size);
		color: var(--color);
		opacity: var(--opacity);
		transform: rotate(var(--rotation));
		animation:
			horizontal var(--horizontalDuration) linear infinite var(--horizontalDirection),
			vertical var(--verticalDuration) linear infinite var(--verticalDirection),
			spin var(--spinDuration) linear infinite,
			pushLeft var(--pushLeftDuration) ease-in-out infinite,
			pushDown var(--pushDownDuration) ease-in-out infinite,
			pushUp var(--pushUpDuration) ease-in-out infinite,
			pushRight var(--pushRightDuration) ease-in-out infinite,
			rainbow var(--rainbowDuration) ease-in-out infinite,
			grow var(--growDuration) ease-in-out infinite,
            opacity var(--opacityDuration) ease-in-out infinite;
        border: var(--border);
        outline: var(--outline);
        box-shadow: var(--boxshadow);
    }

	@keyframes horizontal {
		0% {
			left: -200px;
		}
		100% {
			left: calc(100% + 200px);
		}
	}

	@keyframes vertical {
		0% {
			top: -200px;
		}
		100% {
			top: calc(100% + 200px);
		}
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes pushLeft {
		50% {
			margin-left: var(--pushLeftForce);
		}
	}

	@keyframes pushDown {
		50% {
			margin-top: var(--pushDownForce);
		}
	}

	@keyframes pushRight {
		50% {
			margin-right: var(--pushRightForce);
		}
	}

	@keyframes pushUp {
		50% {
			margin-bottom: var(--pushUpForce);
		}
	}

	@keyframes rainbow {
		20% {
			color: red;
		}
		40% {
			color: orange;
		}
		60% {
			color: green;
		}
		80% {
			color: blue;
		}
		100% {
			color: purple;
		}
	}

	@keyframes grow {
		50% {
			height: calc(var(--size) * var(--growScale));
            width: calc(var(--size) * var(--growScale))
		}
	}

	@keyframes opacity {
		50% {
			opacity: var(--opacityIntensity);
		}
	}
</style>
