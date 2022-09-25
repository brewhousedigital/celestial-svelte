<script>
  import { page } from '$app/stores';
</script>



<div class="container mx-auto">
    <h1 class="">Status: {$page.status}</h1>
    <h2 class="">{$page.error.message}</h2>

    <p><a href="/" class="">Return Home</a></p>
</div>