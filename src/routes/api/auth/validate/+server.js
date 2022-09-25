import Backendless from 'backendless'
import {startBackendless, validateUser, forbidden, response, getUserData} from "$lib/server/utilities.js";


export async function GET({request}) {
  await startBackendless();

  const isUserValid = await validateUser(request);
  if(!isUserValid) {return forbidden()}

  const userData = await getUserData(request);

  return response(userData);
}


