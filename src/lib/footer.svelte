<script>
    import FooterLinks from '$lib/footerLinks.svelte';
    export function thisYear() {
        return new Date(Date.now()).getFullYear()
    }
</script>

<style>
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: lightslategray;
        padding: 10px;
        border-radius: 5px;
        height: 100px;
    }

    footer p {
        padding: 5px;
        margin: 0;
    }
</style>

<footer>
    <FooterLinks />
    <p>Copyright © 2024{thisYear() !== 2024 ? "-" + thisYear() : ""} Michael Gardner.</p>
    <p>All Rights Reserved.</p>
</footer>