<script lang="ts">
    import { getContext, onDestroy, onMount } from 'svelte';
	const themeContext = getContext('themeContext');

	let theme;
	let themes;
	themeContext.subscribe((value) => {
		theme = value.theme;
		themes = value.themes;
	});

	function themeChange(themeConfig) {
		themeContext.update((s) => {
			return {
				themes: s.themes,
				theme: themeConfig
			};
		});
	}

    let interval: number | undefined
    onMount(() => {
        return () => {clearInterval(interval)}
    })

    onDestroy(() => {
        clearInterval(interval)
    })
    $: {
        clearInterval(interval)
        interval = setInterval(() => {
            if (themes) {
                let available = themes.map(t => t.id)
                let current = available.findIndex(a => a === theme.id)
                let next = current + 1 >= available.length ? available[0] : available[current + 1]
                themeChange(themes.find(t => t.id === next))
            }
        }, 10000)
    }
</script>
<div class="home-panel">
    <h2>This is a {theme.name} place.</h2>
</div>

<style>
    .home-panel {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }


</style>