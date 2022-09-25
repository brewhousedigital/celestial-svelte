import Backendless from 'backendless'
import {startBackendless, response} from "$lib/server/utilities.js";


export async function POST({request}) {
  await startBackendless();

  const {email, password} = await request.json();


  let apiData;
  let apiHeaders = {};

  try {
    const user = await new Backendless.User();
    user.email = email;
    user.password = password;

    await Backendless.UserService.register(user);

    // Append a successful message to the object
    apiData = {
      email: email,
      status: "success",
    }

  } catch(error) {
    apiData = error;
  }


  return response(apiData, apiHeaders)
}