<script lang="ts">
    export let id
    export let name
    export let reverse: Boolean | undefined;
</script>

<div class="form-group" style={"--reverse:" + (reverse ? "column-reverse" : "column")}>
    <label for={id}>{name}</label>
    <slot />
</div>

<style>
    .form-group {
        padding-bottom: 5px;
        margin-bottom: 5px;
        display: flex;
        flex-direction: var(--reverse);
        text-align: center;
        justify-content: center;
        align-items: center;
    }
</style>