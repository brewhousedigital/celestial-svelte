<script>
  import {theme} from "$lib/store.js";
  import {onMount} from "svelte";

  // LocalStorage name
  let localStorageName = "site-theme";

  // Accesses the DOM and updates the <html> tag to have a class
  // 'true' = light, 'false' = dark
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

    usersCurrentTheme = JSON.parse(usersCurrentTheme);
    theme.set(usersCurrentTheme);
    changeTheme();
  })
</script>


<button aria-label="Change your theme" on:click={handleThemeChange} type="button" class="theme-btn btn btn-dark rounded-circle">
    {#if $theme}
        <i class="bi bi-moon-fill"></i>
    {:else}
        <i class="bi bi-brightness-high-fill"></i>
    {/if}
</button>


<style>
    .theme-btn {
        padding: 0;
        height: 39px;
        width: 39px;
    }
</style>