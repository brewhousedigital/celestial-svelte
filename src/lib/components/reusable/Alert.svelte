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



<!--
<div class="alert shadow-lg">
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
            <h3 class="font-bold">New message!</h3>
            <div class="text-xs">You have 1 unread message</div>
        </div>
    </div>
    <div class="flex-none">
        <button class="btn btn-sm">See</button>
    </div>
</div>-->

<style>
    /* Tailwind will ignore these conditional classes */
    .alert {color: rgb(0, 51, 32);}
    .alert-info {}
    .alert-success {}
    .alert-warning {}
    .alert-error {}
</style>