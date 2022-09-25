<script>
  import {user, siteError} from "$lib/store";
  import Input from "$lib/components/Input.svelte";
  import {goto} from "$app/navigation";


  let loginData = {
    email: "zach@test.com",
    password: "12345",
  }

  const handleLogin = async(e) => {
    e.preventDefault();

    const fetchRequest = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password
      })
    })

    const response = await fetchRequest.json();

    // Verify that the login was successful
    if(response?.status !== "success") {
      siteError.set(response.message);
      return false;
    }

    // Save the updated user information to the global store
    user.set(response);

    // Navigate to the account page
    await goto('/account')
  }
</script>

<div class="container">
    <h1 class="">Log In</h1>

    <form on:submit={handleLogin} class="" style="max-width: 400px">
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