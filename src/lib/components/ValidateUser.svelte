<script>
  import {onMount} from "svelte";
  import {beforeNavigate, goto} from '$app/navigation';
  import {page} from '$app/stores';
  import {user} from "$lib/store.js";
  import {get} from 'svelte/store';
  import publicRoutes from "$lib/data/publicRoutes.json";

  onMount(async() => {
    const url = $page.url.pathname;

    // Check if the user is on a private route
    if(!publicRoutes.includes(url)) {
      // Check if the user is authenticated and retrieve their data
      const authCheck = await fetch("/api/auth/validate");
      const response = await authCheck.json();

      if(response?.status !== "success") {
        // Send the user to the login page
        await goto("/login");
      }

      // User was validated, and now we can update the global state
      user.set(response);
    }
  })


  beforeNavigate(async(item) => {
    // Get the user details
    const userData = get(user);

    // Grab the URL that the user is headed to
    const target = item?.to?.url?.pathname;

    // Don't process on page load
    if(target === undefined) {
      return false;
    }

    // Check if the user is on a private route and check if they are logged in
    if(!publicRoutes.includes(target) && !userData?.email) {
      // Block the route event and send the user to the login page
      item.cancel();
      await goto("/login");
    }
  })
</script>