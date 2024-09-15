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
    }
</style>