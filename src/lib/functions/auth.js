import Backendless from "backendless";
import {user, siteError} from "$lib/store";
import {goto} from "$app/navigation";


export const handleLogin = async(loginData) => {
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


export const handleLogout = async() => {
    const fetchRequest = await fetch("/api/auth/logout")
    const response = await fetchRequest.json();

    user.set({});
    await goto("/");

    siteError.set("You have been logged out");
    return false;
}

export const handleRegister = async(registerData) => {
    try {
        let user = new Backendless.User();
        user.email = registerData.email;
        user.password = registerData.password;

        await Backendless.UserService.register(user);

        await goto('/register/confirm')
    } catch(error) {
        siteError.set(error.message);
    }

    return false;
}
