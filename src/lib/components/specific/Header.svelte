<script>
    import {user} from "$lib/store";
    import {handleLogout} from "$lib/functions/auth";
    import Link from "$lib/components/reusable/Link.svelte";
    import UserAvatar from "$lib/components/specific/UserAvatar.svelte";
    import ThemeController from "$lib/components/specific/ThemeController.svelte";
</script>

<div class="">
    <div class="">
        <a href="/" sveltekit:prefetch class="">Celestial</a>
    </div>

    <div class="">
        <ul class="">
            <li><Link authenticated={true} href="/members">Members Page</Link></li>

            {#if $user.email}
                <li><button on:click={handleLogout}>Log Out</button></li>
            {/if}

            {#if !$user.email}
                <li><a href="/login">Log In</a></li>
            {/if}
        </ul>


        <div class="">
            <label tabindex="0" class="">
                <div class="">
                    <UserAvatar />
                </div>
            </label>

            <ul tabindex="0" class="">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/">Sample Link</a></li>
                <li><Link authenticated={true} href="/">Link Component</Link></li>
                {#if $user.email}<li><a href="/members">Restricted Link</a></li>{/if}
            </ul>
        </div><!-- end account dropdown -->

        <ThemeController />
    </div>
</div>