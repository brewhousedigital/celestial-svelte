<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                status: status,
                message: error.message
            }
        };
    }
</script>

<script>
    export let status;
    export let message;
</script>



<div class="container mx-auto">
    <h1 class="">Status: {status}</h1>
    <h2 class="">{message}</h2>

    <p><a href="/" class="">Return Home</a></p>
</div>