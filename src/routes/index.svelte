<script>
    import {user} from "$lib/store";
    import Link from "$lib/components/reusable/Link.svelte";
</script>

<div class="container mx-auto">
    <h1 class="text-5xl font-bold mb-8">Hello World</h1>
    <p><Link authenticated href="/members" className="btn btn-outline">Click here for the private route</Link></p>
</div>