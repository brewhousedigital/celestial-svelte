<script>
    import {handleRegister} from "$lib/functions/auth";
    import Input from "$lib/components/Input.svelte";

    let registerData = {
        email: "",
        password: "",
    }

    let confirmationEmail;

    const handleSubmit = async(e) => {
      e.preventDefault();

      const response = await handleRegister(registerData);

      confirmationEmail = response?.email;
    }
</script>


{#if confirmationEmail}

    <div class="container">
        <h1 class="mb-4">Confirm Your Account</h1>

        <p>We've sent an email to {confirmationEmail}. Please click the link there to finish your registration.</p>
    </div>

{:else}

    <div class="container">
        <h1 class="mb-4">Register</h1>

        <form on:submit={handleSubmit} class="" style="max-width: 400px">
            <Input label="Email:"
                   id="register-email"
                   bind:value={registerData.email}
                   type="email"
                   boxClasses="mb-3" />

            <Input label="Password:"
                   id="register-password"
                   bind:value={registerData.password}
                   type="password"
                   boxClasses="mb-3" />

            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>

{/if}
