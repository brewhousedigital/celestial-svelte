<script>
    import {user} from "$lib/store.js";
    import {generateMD5} from "$lib/functions/utilities.js";

    // This can reduce load times by requesting a smaller image
    export let sizeLarge = false;

    // This is used with Gravatar
    let md5Hash = "";

    // Anytime the user email changes, update the avatar by fetching a new md5 hash
    const getEmailHash = async(email) => {
        const response = await generateMD5(email);
        md5Hash = response['md5'];
    }

    // Regenerate the hash if the email changes
    $: {
      if($user.email) {
        getEmailHash($user.email)
      }
    }
</script>


<img
        src="https://www.gravatar.com/avatar/{md5Hash}?d=mp{sizeLarge ? '&s=200' : ''}"
        alt="Profile photo for {$user?.name}"
        class="img-fluid rounded-circle avatar">


<style>
    .avatar {
        max-width: 40px;
    }
</style>