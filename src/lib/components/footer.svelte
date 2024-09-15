<script lang="ts">
	import { hexToRGB, palettes } from "$lib/utilities/palettes";

	export function thisYear(): Number {
		return new Date(Date.now()).getFullYear();
	}

	export let theme: 'coder' | 'beach' | 'winter'
	export function toggleTheme(newTheme: 'coder' | 'beach' | 'winter') {
		theme = newTheme
	}
</script>

<footer style={"--footer-bg:" + hexToRGB(palettes[theme][9], .8)}>
	<div class="footer-links">
		<a href="https://github.com/PhiloTFarnsworth">
			<span aria-label="My Github" class="fa-brands fa-github icon"></span>
		</a>
		<a href="https://www.linkedin.com/in/michael-gardner-az">
			<span aria-label="My LinkedIn" class="fa-brands fa-linkedin icon"></span>
		</a>
	</div>

	<div>
		<button on:click={() => toggleTheme("coder")}><svg class="icon"><use href={'#fa-symbol-terminal'}></use></svg></button>
		<button on:click={() => toggleTheme("beach")}><svg class="icon"><use href={'#fa-symbol-umbrella-beach'}></use></svg></button>
		<button on:click={() => toggleTheme("winter")}><svg class="icon"><use href={'#fa-symbol-snowman'}></use></svg></button>
	</div>

	<p>
		<span class="fa-regular fa-copyright icon-small"></span> 2024{thisYear() !== 2024
			? '-' + thisYear()
			: ''} Michael Gardner
	</p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--footer-bg);
		padding: 10px;
		border-radius: 0 0 10px 10px;
		height: 40px;
	}

	footer p {
		padding: 5px;
		margin: 0;
		width: 100px;
	}

	.footer-links {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100px;
	}

	.footer-links a {
		margin-left: 10px;
		margin-right: 10px;
	}
</style>
