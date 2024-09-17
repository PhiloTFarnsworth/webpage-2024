<script>
    export let id
    export let name
</script>

<div class="form-group">
    <label for={id}>{name}</label>
    <slot />
</div>

<style>
    .form-group {
        padding-bottom: 5px;
        margin-bottom: 5px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
</style>