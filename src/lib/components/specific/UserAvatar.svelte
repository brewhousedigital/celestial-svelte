<script>
    import {user} from "$lib/store";

    export let sizeLarge = false;

    // This is used with Gravatar
    let md5Hash = "";

    // Anytime the user email changes, update the avatar by fetching a new md5 hash
    $: {
        if(typeof fetch !== "undefined") {
            fetch(`/api/md5/${$user.email}`)
                .then(response => response.json())
                .then(response => {
                    $: md5Hash = response.md5;
                })
        }
    }
</script>

<div class="mask mask-hexagon">
    <img src="https://www.gravatar.com/avatar/{md5Hash}?d=mp{sizeLarge ? '&s=250' : ''}"
         alt="Profile photo for {$user?.name}">
</div>