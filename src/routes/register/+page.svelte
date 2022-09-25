<script>
    import {handleRegister} from "$lib/functions/auth";
    import Input from "$lib/components/Input.svelte";

    let registerData = {
        email: "",
        password: "",
    }
</script>

<div class="">
    <h1 class="">Register</h1>

    <form on:submit|preventDefault={handleRegister(registerData)} class="" style="max-width: 400px">
        <Input label="Email:" id="register-email" bind:value={registerData.email} type="email"/>

        <Input label="Password:" id="register-password" bind:value={registerData.password} type="password"/>

        <button type="submit" class="">Register</button>
    </form>
</div>