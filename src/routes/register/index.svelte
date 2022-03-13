<script>
    import {handleRegister} from "$lib/functions/auth";
    import Input from "$lib/components/reusable/Input.svelte";

    let registerData = {
        email: "",
        password: "",
    }
</script>

<div class="container mx-auto">
    <h1 class="text-5xl font-bold">Register</h1>

    <form on:submit|preventDefault={handleRegister(registerData)} class="card card-body" style="max-width: 400px">
        <Input label="Email:" id="register-email" bind:value={registerData.email} type="email"/>

        <Input label="Password:" id="register-password" bind:value={registerData.password} type="password"/>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</div>