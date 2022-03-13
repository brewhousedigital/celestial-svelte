<script>
    import {user} from "$lib/store";
    import {handleLogout} from "$lib/functions/auth";
    import Link from "$lib/components/reusable/Link.svelte";
    import UserAvatar from "$lib/components/specific/UserAvatar.svelte";
</script>

<div class="navbar pr-4">
    <div class="flex-1">
        <a href="/" sveltekit:prefetch class="btn btn-ghost normal-case text-xl">Celestial</a>
    </div>

    <div class="flex-none gap-2">
        <ul class="menu menu-horizontal p-0">
            <li><Link authenticated={true} href="/members">Members Page</Link></li>

            {#if $user.email}
                <li><button on:click={handleLogout}>Log Out</button></li>
            {/if}

            {#if !$user.email}
                <li><a href="/login">Log In</a></li>
            {/if}
        </ul>


        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn p-0 btn-ghost btn-circle avatar">
                <div class="w-10">
                    <UserAvatar />
                </div>
            </label>

            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/">Sample Link</a></li>
                <li><Link authenticated={true} href="/">Link Component</Link></li>
                {#if $user.email}<li><a href="/members">Restricted Link</a></li>{/if}
            </ul>
        </div>
    </div>
</div>