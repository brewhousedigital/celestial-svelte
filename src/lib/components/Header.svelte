<script>
  import {user} from "$lib/store.js";
  import {handleLogout} from "$lib/functions/auth.js";
  import Link from "$lib/components/Link.svelte";
  import UserAvatar from "$lib/components/UserAvatar.svelte";
  import ThemeController from "$lib/components/ThemeController.svelte";
  import Button from "$lib/components/Button.svelte";
</script>


<div class="container">
    <nav class="d-flex align-items-center justify-content-between px-4 py-2 gap-4">
        <a href="/" class="logo me-auto">
            <h1>Celestial</h1>
        </a>


        {#if $user.email}
            <Button href="/login">Account Page</Button>

            <button type="button" class="btn" on:click={handleLogout}>Log Out</button>
        {/if}

        {#if !$user.email}
            <Button href="/login">Log In</Button>

            <Button href="/register">Register</Button>
        {/if}



        <div class="dropdown">
            <button
                    class="btn p-0 rounded-circle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Open the Account Menu">
                <UserAvatar />
            </button>

            <ul class="dropdown-menu dropdown-menu-end" data-bs-offset="[0,2]">
                <li><a href="/account" class="dropdown-item">Profile</a></li>
                <li><a href="/" class="dropdown-item">Homepage</a></li>
                {#if $user.email}<li><a href="/account" class="dropdown-item">Restricted Link</a></li>{/if}
            </ul>
        </div>


        <ThemeController />
    </nav>
</div>

<style>
    nav {
        border-radius: 80px;
        margin: 24px 0 24px 0;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }

    nav .logo {
        text-decoration: none;
        color: var(--bs-body-color);
        display: block;
    }

    nav h1 {
        margin: 0;
        font-size: 30px;
        font-weight: 600;
        line-height: normal;
    }
</style>