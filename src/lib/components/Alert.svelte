<script>
    export let variant = ""; // "" | "info" | "success" | "warning" | "error"
    export let shadow = true;
    export let text;
</script>


<div class="alert {variant.length > 0 ? `alert-${variant}` : ''} {shadow ? 'shadow-lg' : ''}">
    <div>
        {#if variant === ""}<i class="bi bi-lightbulb"></i>{/if}
        {#if variant === "info"}<i class="bi bi-lightbulb"></i>{/if}
        {#if variant === "success"}<i class="bi bi-check-lg"></i>{/if}
        {#if variant === "warning"}<i class="bi bi-exclamation-triangle"></i>{/if}
        {#if variant === "error"}<i class="bi bi-exclamation-octagon-fill"></i>{/if}

        <span>
            {#if text}
                {text}
            {:else}
                <slot></slot>
            {/if}
        </span>
    </div>
</div>



<style>
    .alert {color: rgb(0, 51, 32);}
</style>