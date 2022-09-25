<script>
    // Import our global CSS
    import "$lib/css/global.css";

    // Components
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ErrorHandler from "$lib/components/ErrorHandler.svelte";
    import ValidateUser from "$lib/components/ValidateUser.svelte";
</script>


<ValidateUser />


<div data-sveltekit-prefetch>
    <Header />

    <main>
        <slot></slot>
    </main>

    <ErrorHandler />

    <Footer />
</div>


<style>
    main {
        min-height: calc(100vh - 116px - 23px);
    }
</style>