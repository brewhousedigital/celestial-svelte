import Backendless from 'backendless'
import {startBackendless, validateUser, forbidden, response, getUserDataByCookies} from "$lib/server/utilities.js";


export async function GET({request}) {
  await startBackendless();

  // Returns a true or false if the session is valied
  const isUserValid = await validateUser(request);
  if(!isUserValid) {return forbidden()}

  // Filter out the user data and only return specific values
  const userData = await getUserDataByCookies(request);
  if(!userData) {return forbidden()}

  return response(userData);
}


