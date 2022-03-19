<script>
    export let href = "#";
    export let className = "";
    export let authenticated = false;

    import settings from "$lib/data/settings.json";
    import {user} from "$lib/store";

    // This value updates based on passed parameters
    let constructedHref = href;

    // Re-render the href value if the user store changes
    $: {
        if(authenticated) {
            constructedHref = settings.unauthenticatedFallbackPage;

            if($user.email) {
                constructedHref = href;
            }
        }
    }
</script>

<a href={constructedHref}
   class={className}
   sveltekit:prefetch>
    <slot></slot>
</a>