<script lang="ts">
	import Project from '$lib/components/project.svelte';
</script>

<div class="projects-container">
	<h2>Webpage 2024</h2>
	<p>Webpage 2024 is a website designed to showcase my skills in creating CRUD applications and developing visually appealing interfaces, with attention to mobile responsiveness. This is also my first published Svelte/SvelteKit app.</p>
	<p>In my opinion, I pretty much aced it.  If you disagree, feel free to customize the page until you feel differently.</p>

	<h2>Michael Gardner</h2>
	<p>Michael Gardner is a pretty rad developer living in Tucson, Arizona.  You can contact him at: <a href="mailto:IDoDevThings@Gmail.com">IDoDevThings@Gmail.com</a>.</p>

	<h2>Projects</h2>
	<p>Below are a collection of projects that I have created in the past couple of years:</p>

	<Project name="Bitsprite" banner="banner-bitsprite" url="https://github.com/PhiloTFarnsworth/BitSprite"> 
		This is a standalone Go program that procedurally morphs a single small .png into variant
		spritesheets.
	</Project>
	<Project name="Portfolio (2022)" banner="banner-port" url="https://github.com/PhiloTFarnsworth/Portfolio">
        A "Gallery of Achievement", built with Hugo and a whole lot of custom CSS.
    </Project>
	<Project name="Fantasy Draft" banner="banner-draft" url="https://github.com/PhiloTFarnsworth/FantasyDraftGo">
		A fantasy football drafting demo built with Gin and React.
	</Project>
	<Project name="Angry Planet" banner="banner-planet" url="https://github.com/PhiloTFarnsworth/AngryPlanet">
		An interesting experiment with building the basics of hex-grid rogue-like.  Built with Unity. 
	</Project>
	<Project name="A Pretty Heckin' Website" banner="banner-heckin" url="https://github.com/PhiloTFarnsworth/APrettyHuGOinWebsite">
		A "just-for-fun" style guide for basic html elements with light CSS styling. Built with Hugo. 
	</Project>
</div>

<style>
	.projects-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		background-color: rgba(240, 240, 240, 0.5);
		border-radius: 10px;
		padding: 5px;
		overflow: auto;
	}

	.projects-container p{
		text-align: center;
	}
</style>
