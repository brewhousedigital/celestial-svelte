<script>
    import {theme} from "$lib/store";
    import {onMount} from "svelte";
    import SunIcon from "$lib/components/icons/SunIcon.svelte";
    import MoonIcon from "$lib/components/icons/MoonIcon.svelte";

    // LocalStorage name
    let localStorageName = "site-theme";

    // Accesses the DOM and updates the <html> tag to have a class
    const changeTheme = () => {
        const htmlTag = document.querySelector("html");

        $theme
            ? htmlTag.setAttribute("data-theme", "light")
            : htmlTag.setAttribute("data-theme", "dark");

        // Update localStorage
        localStorage.setItem(localStorageName, JSON.stringify($theme));
    }

    // Change the theme on click
    const handleThemeChange = () => {
        theme.set(!$theme);
        changeTheme();
    }

    // Check if user has previously changed the theme
    onMount(() => {
        // Check for theme, and set default if missing
        if(localStorage.getItem(localStorageName) === null) {
            localStorage.setItem(localStorageName, "false");
        }

        let usersCurrentTheme = localStorage.getItem(localStorageName);

        // Check if light/dark mode vs multi-theme toggle
        if(usersCurrentTheme === "true" || usersCurrentTheme === "false") {
            usersCurrentTheme = JSON.parse(usersCurrentTheme);
            theme.set(usersCurrentTheme);
            changeTheme();
        }
    })
</script>

<button aria-label="Change your theme" on:click={handleThemeChange} class="btn btn-ghost">
    {#if $theme}<SunIcon />{:else}<MoonIcon />{/if}
</button>