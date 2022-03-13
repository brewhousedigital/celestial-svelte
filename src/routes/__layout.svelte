<script>
    // Import our global CSS
    import "$lib/global.css";
    import {onMount} from "svelte";
    import {validateUserToken} from "$lib/functions/auth";

    // Components
    import Header from "$lib/components/specific/Header.svelte";
    import Footer from "$lib/components/specific/Footer.svelte";

    // Import Backendless system
    import Backendless from 'backendless'
    import ErrorHandler from "$lib/components/specific/ErrorHandler.svelte";
    const BACKENDLESS_APP_ID = String(import.meta.env.VITE_BACKENDLESS_APP_ID);
    const BACKENDLESS_API_KEY = String(import.meta.env.VITE_BACKENDLESS_API_KEY);
    Backendless.initApp(BACKENDLESS_APP_ID, BACKENDLESS_API_KEY);

    // Hide the site content until it is fully loaded
    let isSiteReadyToLoad = false;

    onMount(async() => {
        await validateUserToken();

        // Load the site
        isSiteReadyToLoad = true;
    })
</script>

{#if isSiteReadyToLoad}
    <Header />

    <main>
        <slot></slot>
    </main>

    <ErrorHandler />

    <Footer />
{/if}


<style>
    main {
        min-height: calc(100vh - 66px - 56px);
    }
</style>