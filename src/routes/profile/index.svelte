<script>
    import UserAvatar from "$lib/components/specific/UserAvatar.svelte";
    import {database} from "$lib/functions/database";
    import {user} from "$lib/store";
    import Input from "$lib/components/reusable/Input.svelte";

    // Clone the user object so we dont overwrite it on accident
    let userObject = {...$user};

</script>

<div class="">
    <h1 class="">Profile for {$user.name}</h1>

    <div class="">
        <div class="">
            <UserAvatar sizeLarge={true}/>

            <p class="">
                <a href="https://en.gravatar.com/" class="" target="_blank" rel="noreferrer noopener">Update Profile Image</a>
            </p>
        </div>

        <div class="">
            <form on:submit|preventDefault={database().updateUser(userObject)}>
                <Input id="profile-name-input" label="Name" bind:value={userObject.name} />
                <p class=""><button type="submit" class="">Save Profile</button></p>
            </form>
        </div>
    </div><!-- end flex -->
</div><!-- end container -->