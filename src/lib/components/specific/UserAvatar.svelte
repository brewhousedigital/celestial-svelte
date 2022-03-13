<script>
    import md5 from "crypto-js/md5";
    import {user} from "$lib/store";

    export let sizeLarge = false;

    // This is used with Gravatar
    let md5Hash = "";
    $: md5Hash = md5($user.email);
</script>

<div class="mask mask-hexagon">
    <img src="https://www.gravatar.com/avatar/{md5Hash}?d=mp{sizeLarge ? '&s=250' : ''}"
         alt="Profile photo for {$user?.name}">
</div>