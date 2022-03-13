<script>
    import Input from "$lib/components/reusable/Input.svelte";
    import {handleLogin} from "$lib/functions/auth";

    let loginData = {
        email: "",
        password: "",
    }
</script>

<div class="container mx-auto">
    <h1 class="text-5xl font-bold">Log In</h1>

    <form on:submit|preventDefault={handleLogin(loginData)} class="card card-body" style="max-width: 400px">
        <Input label="Email:"
               id="login-email"
               bind:value={loginData.email}
               type="email"
               autocomplete="username" />

        <Input label="Password:"
               id="login-password"
               bind:value={loginData.password}
               type="password"
               autocomplete="current-password" />

        <button type="submit" class="btn btn-primary">Log In</button>
    </form>
</div>