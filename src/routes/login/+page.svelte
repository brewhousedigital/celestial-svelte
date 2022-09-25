<script>
  import Input from "$lib/components/Input.svelte";
  import {handleLogin} from "$lib/functions/auth.js";


  let loginData = {
    email: "zach@test.com",
    password: "12345",
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(loginData);
  }
</script>

<div class="container">
    <h1 class="">Log In</h1>

    <form on:submit={handleSubmit} class="" style="max-width: 400px">
        <Input label="Email:"
               id="login-email"
               bind:value={loginData.email}
               type="email"
               autocomplete="username"
               boxClasses="mb-3" />

        <Input label="Password:"
               id="login-password"
               bind:value={loginData.password}
               type="password"
               autocomplete="current-password"
               boxClasses="mb-3" />

        <button type="submit" class="btn btn-primary">Log In</button>
    </form>
</div>