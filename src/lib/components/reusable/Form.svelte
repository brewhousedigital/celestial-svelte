<script>
    export let callback = () => {}
    export let className = "";
    export let style = "";
</script>

<form on:submit|preventDefault={callback} class={className} {style}>
    <slot></slot>
</form>