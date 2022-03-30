<script>
    // Optional parameter if you don't want to use the slot
    export let text = "";

    // "" | solid | outline | ghost | link
    export let variant = "";

    // This can utilize any CSS icon pack
    // The default uses bootstrap: "bi bi-moon-fill"
    export let icon = false;

    // sm | "" | "lg"
    export let size = "";

    // start | left | right | end
    export let iconSide = false;

    // true | false
    export let loading = false;

    // true | false
    export let disabled = false;

    // Custom styles can be injected into the button
    export let styles = "";

    // Custom classes can be injected into the button
    export let classes = "";

    // Automatically track the button width on render
    let width;
    let widthStyles = `width: ${width}px;`;
</script>

<button bind:clientWidth={width}
        style={`${widthStyles} ${styles}`}
        class={`${classes}`}>
    {#if text}
        {text}
    {:else}
        <slot></slot>
    {/if}
</button>

<a href="#" bind:clientWidth={width}
   style={`${widthStyles} ${styles}`}
   class={`${classes}`}>
    {#if text}
        {text}
    {:else}
        <slot></slot>
    {/if}
</a>
