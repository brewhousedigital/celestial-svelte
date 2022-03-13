import Backendless from "backendless";
import {user, siteError} from "$lib/store";
import publicRoutes from "$lib/data/publicRoutes.json";
import {goto} from "$app/navigation";

// Check if user is logged in
export const validateUserToken = async() => {
    try {
        let response = await Backendless.UserService.getCurrentUser();

        if(response) {
            // Valid user found
            user.set(response);
        } else {
            // Unset the user store
            user.set({});

            // Invalid user found. Grab their current location to match against the publicRoutes list
            let currentLocation = window.location.pathname;

            // This will redirect if the unauthenticated user is on a private route
            if(!publicRoutes.includes(currentLocation)) {
                await goto("/login?error=expired-token");
                siteError.set("Please log back in");
                return false;
            }
        }
    } catch(error) {
        // User has invalid token, so log them out
        await Backendless.UserService.logout();
        user.set({});
        await goto("/?error=expired-token");
        siteError.set("Please log back in");
        return false;
    }
}

export const handleLogout = async() => {
    await Backendless.UserService.logout();
    user.set({});
    await goto("/");
    siteError.set("You have been logged out");
    return false;
}

export const handleLogin = async(loginData) => {
    try {
        // Log the user in. This returns a JSON object
        let response = await Backendless.UserService.login(
            loginData.email, loginData.password, true
        );

        // Save the updated user information to our svelte store
        user.set(response);

        await goto('/members')
    } catch(error) {
        siteError.set(error.message);
    }

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
