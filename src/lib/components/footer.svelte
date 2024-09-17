<script lang="ts">
	import { browser } from '$app/environment';
	import { hexToRGB } from '$lib/utilities/palettes';
	import { getContext } from 'svelte';
	export function thisYear(): Number {
		return new Date(Date.now()).getFullYear();
	}

	const themeContext = getContext('themeContext');

	let theme;
	let themes;
	themeContext.subscribe((value) => {
		theme = value.theme;
		themes = value.themes;
	});

	function updateTheme(e) {
		if (browser)
		window.dispatchEvent(
			new CustomEvent('themeChange', {
				bubbles: false,
				detail: themes.find((t) => t.id == e.target.value)
			})
		);
	}
</script>

{#if theme}
	<footer
		style={'--footer-bg:' +
			hexToRGB(theme.handleColor, 0.6) +
			'; --button-bg:' +
			theme.contentBackground}
	>
		<div class="footer-links">
			<a href="https://github.com/PhiloTFarnsworth">
				<span aria-label="My Github" class="fa-brands fa-github icon"></span>
			</a>
			<a href="https://www.linkedin.com/in/michael-gardner-az">
				<span aria-label="My LinkedIn" class="fa-brands fa-linkedin icon"></span>
			</a>
		</div>

		<form>
			<select on:input={updateTheme} value={theme.id}>
				{#each themes as themeObject}
					<option value={themeObject.id}>{themeObject.name}</option>
				{/each}
			</select>
		</form>

		<p>
			<span class="fa-regular fa-copyright icon-small"></span> 2024{thisYear() !== 2024
				? '-' + thisYear()
				: ''} Michael Gardner
		</p>
	</footer>
{/if}

<style>
	@font-face {
		font-family: 'Font Awesome';
		font-style: normal;
		src: url('/fonts/fa-solid-900.woff2');
	}

	select {
		height: 45px;
		width: 100px;
		font-family: 'Font Awesome';
		color: var(--button-bg);
		border-radius: 10px;
	}

	option {
		font-family: 'Font Awesome';
	}

	option:not(:checked) {
		color: black;
	}

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
