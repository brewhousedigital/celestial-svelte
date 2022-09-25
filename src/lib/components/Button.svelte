<script>
    import settings from "$lib/data/settings.json";
    import {trimWhiteSpace} from "$lib/functions/utilities.js";

    // Optional parameter if you don't want to use the slot
    export let text = "";

    // If the href property is included, then the button tag is converted to an anchor tag
    export let href = "";

    // "" | solid | outline | ghost | link
    export let variant = "";

    // sm | "" | "lg"
    export let size = "";

    // This can utilize any CSS icon pack
    // The default uses bootstrap: "bi bi-moon-fill"
    export let icon = false;

    // start | left | right | end
    export let iconSide = "right";

    //////////////////////////////////////////////////////////

    // true | false
    export let loading = false;

    // true | false
    export let disabled = false;

    // Custom styles can be injected into the button
    export let styles = "";

    // Custom classes can be injected into the button
    export let classes = "";

    let classListBuilder = `
        btn
        ${classes}
        btn-${variant}
        ${size}
        ${disabled === true || loading === true ? 'disabled' : ''}
        ${loading ? 'loading' : ''}
    `;
    classListBuilder = trimWhiteSpace(classListBuilder);
</script>


{#if href}

    <a href={href}
       on:click
       style={`${styles}`}
       class={classListBuilder}
    >
        {#if iconSide === "start" || iconSide === "left"}
            {#if icon}<i class={icon}></i>{/if}
        {/if}

        {#if loading}
            <i class={settings.loadingIcon}></i>
        {:else}
            {#if text}
                {text}
            {:else}
                <slot></slot>
            {/if}
        {/if}


        {#if iconSide === "end" || iconSide === "right"}
            {#if icon}<i class={icon}></i>{/if}
        {/if}
    </a>

{:else}

    <button on:click
            style={styles}
            class={classListBuilder}
            disabled={disabled}
    >
        {#if iconSide === "start" || iconSide === "left"}
            {#if icon}<i class={icon}></i>{/if}
        {/if}

        {#if loading}
            <i class={settings.loadingIcon}></i>
        {:else}
            {#if text}
                {text}
            {:else}
                <slot></slot>
            {/if}
        {/if}

        {#if iconSide === "end" || iconSide === "right"}
            {#if icon}<i class={icon}></i>{/if}
        {/if}
    </button>

{/if}


<style>
    .disabled {
        pointer-events: none;
        opacity: 0.7;
        cursor: not-allowed;
    }

    .loading i {
        animation-name: animatedSpinner;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes animatedSpinner {
        from {transform: rotate(0deg)}
        to {transform: rotate(360deg)}
    }
</style>