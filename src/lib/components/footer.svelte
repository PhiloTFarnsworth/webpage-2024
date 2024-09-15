<script lang="ts">
	import { hexToRGB, palettes } from "$lib/utilities/palettes";

	export function thisYear(): Number {
		return new Date(Date.now()).getFullYear();
	}

	export let theme: 'coder' | 'beach' | 'winter'
</script>

<footer style={"--footer-bg:" + hexToRGB(palettes[theme][9], .8) + "; --button-bg:" + palettes[theme][1]}>
	<div class="footer-links">
		<a href="https://github.com/PhiloTFarnsworth">
			<span aria-label="My Github" class="fa-brands fa-github icon"></span>
		</a>
		<a href="https://www.linkedin.com/in/michael-gardner-az">
			<span aria-label="My LinkedIn" class="fa-brands fa-linkedin icon"></span>
		</a>
	</div>


	<form>
		<select
			bind:value={theme}
		>
			<option value="coder">
				Coder &#xf120
			</option>
			<option value="beach">
				Beach &#xf5ca
			</option>
			<option value="winter">
				Winter &#xf7d0
			</option>
		</select>
	</form>

	<p>
		<span class="fa-regular fa-copyright icon-small"></span> 2024{thisYear() !== 2024
			? '-' + thisYear()
			: ''} Michael Gardner
	</p>
</footer>

<style>
	
	@font-face {
		font-family: 'Font Awesome';
        font-style: normal;
        src: url("/fonts/fa-solid-900.woff2");
	}

	select {
		height: 45px;
		width: 100px;
		font-family: "Font Awesome";
		color: var(--button-bg);
		border-radius: 10px;
	}

	option {
		font-family: "Font Awesome";
	}

	option:not(:checked) {
		color: black
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
