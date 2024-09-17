<script lang="ts">
	import Project from '$lib/components/project.svelte';
</script>

<div class="projects-container">
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
		padding: 10px;
		align-items: center;
	}
</style>
