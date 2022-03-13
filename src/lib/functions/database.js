import Backendless from "backendless";
import {user, siteError} from "$lib/store";

export const database = (table) => {
    const updateUser = async(object) => {
        try {
            let newUserObject = await Backendless.UserService.update(object);
            user.set(newUserObject);
            return true;
        } catch(error) {
            siteError.set(error.message);
            return false;
        }
    }

    return {updateUser};
}