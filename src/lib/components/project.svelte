<script lang="ts">
	export let name;
	export let banner;
    export let url;
</script>

<div class="project-capsule">
<h3><a href={url}>{name}</a></h3>
<p>
    <slot></slot>
</p>

{#await import(`$lib/assets/${banner}.svg`) then { default: src }}
	<object
		class="bannerLogo"
		type="image/svg+xml"
		data={src}
		title={`${name} Banner Logo`}
        aria-label={`${name} Banner Logo`}
	></object>
{/await}
</div>

<style>
    .project-capsule {
        padding: 10px;
        width: calc(100%) - 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    object {
        width: 80dvw;
    }
</style>