<script>
    import {user} from "$lib/store";
</script>

<div class="container mx-auto">
    <h1 class="text-5xl font-bold mb-3">Hello World</h1>
    <p><a href={$user.email ? "/members" : "/login"} class="btn btn-outline">Click here for the private route</a></p>
</div>