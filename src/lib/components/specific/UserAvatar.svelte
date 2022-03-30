<script>
    import {user} from "$lib/store";
    import {generateMD5} from "$lib/functions/generateMD5";

    // This can reduce load times by requesting a smaller image
    export let sizeLarge = false;

    // This is used with Gravatar
    let md5Hash = "";

    // Anytime the user email changes, update the avatar by fetching a new md5 hash
    const getEmailHash = async(email) => {
        const response = await generateMD5(email);
        md5Hash = response['md5'];
    }

    // Regenerate the email hash
    $: getEmailHash($user.email)
</script>

<div class="">
    <img src="https://www.gravatar.com/avatar/{md5Hash}?d=mp{sizeLarge ? '&s=250' : ''}"
         alt="Profile photo for {$user?.name}">
</div>