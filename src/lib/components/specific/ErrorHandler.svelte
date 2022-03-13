<script>
    import settings from "$lib/data/settings.json";
    import { slide } from "svelte/transition";
    import {siteError} from "$lib/store";
    import Alert from "$lib/components/reusable/Alert.svelte";

    $: {
        if($siteError.length > 0) {
            setTimeout(() => {
                siteError.set("");
            }, settings.errorMessageTimeoutLength)
        }
    }
</script>


{#if $siteError.length > 0}
    <div id="error-handler" transition:slide>
        <Alert variant="warning" text={$siteError} />
    </div>
{/if}


<style>
    #error-handler {
        position: fixed;
        bottom: 24px;
        width: 100%;
        padding: 24px;
    }

    @media screen and (min-width: 768px) {
        #error-handler {
            right: 0;
            max-width: 600px;
        }
    }
</style>