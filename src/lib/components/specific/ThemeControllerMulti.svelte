<script>
    import {theme} from "$lib/store";
    import {onMount} from "svelte";
    import settings from "$lib/data/settings.json";

    let themes = [
        "light",
        "dark",
        ...settings.additionalSiteThemes
    ]

    // LocalStorage name
    let localStorageName = "site-theme";

    // Accesses the DOM and updates the <html> tag to have a class
    const changeTheme = () => {
        const htmlTag = document.querySelector("html");

        htmlTag.setAttribute("data-theme", String($theme))

        // Update localStorage
        localStorage.setItem(localStorageName, JSON.stringify($theme));
    }

    // Change the theme on click
    const handleThemeChange = (newTheme) => {
        theme.set(newTheme);
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
        if(usersCurrentTheme !== "true" && usersCurrentTheme !== "false") {
            usersCurrentTheme = JSON.parse(usersCurrentTheme);
            theme.set(usersCurrentTheme);
            changeTheme();
        }
    })
</script>

<div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost m-1">Theme</label>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
        {#each themes as theme}
            <li><button on:click={() => {handleThemeChange(theme)}}>{theme}</button></li>
        {/each}
    </ul>
</div>

<style>
    .dropdown-content {
        max-height: 300px;
        overflow-y: scroll;
    }
</style>