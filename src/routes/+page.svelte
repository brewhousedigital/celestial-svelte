<script>
    import Link from "$lib/components/Link.svelte";
    import Button from "$lib/components/Button.svelte";
</script>


<div class="container">
    <div class="">
        <h1 class="">Hello World</h1>
        <p><Link restricted={true} href="/account" className="">Click here for the private route</Link></p>
    </div>

    <Button variant="primary">Lol</Button>
</div>

