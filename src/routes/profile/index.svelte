<script>
    import UserAvatar from "$lib/components/specific/UserAvatar.svelte";
    import {database} from "$lib/functions/database";
    import {user} from "$lib/store";
    import Input from "$lib/components/reusable/Input.svelte";

    // Clone the user object so we dont overwrite it on accident
    let userObject = {...$user};

</script>

<div class="container mx-auto">
    <h1 class="text-5xl font-bold mb-3">Profile for {$user.name}</h1>

    <div class="flex flex-wrap">
        <div class="w-[250px] text-center">
            <UserAvatar sizeLarge={true}/>

            <p class="mt-6">
                <a href="https://en.gravatar.com/" class="btn btn-primary" target="_blank" rel="noreferrer noopener">Update Profile Image</a>
            </p>
        </div>

        <div class="flex-1 pl-24">
            <form on:submit|preventDefault={database().updateUser(userObject)}>
                <Input id="profile-name-input" label="Name" bind:value={userObject.name} />
                <p class="text-right"><button type="submit" class="btn btn-primary">Save Profile</button></p>
            </form>
        </div>
    </div><!-- end flex -->
</div><!-- end container -->