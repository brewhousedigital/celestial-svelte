import Backendless from 'backendless'
import {startBackendless, createCookie, response, getUserDataByObjectId, forbidden} from "$lib/server/utilities.js";


export async function POST({request}) {
  await startBackendless();

  const {email, password} = await request.json();


  let apiData;
  let apiHeaders = {};

  try {
    apiData = await Backendless.UserService.login(email, password, true);

    // Append a successful message to the object
    apiData = {
      ...apiData,
      status: "success",
    }

    const authCookie = await createCookie('user-token', apiData['user-token']);
    const idCookie = await createCookie('user-id', apiData['objectId']);

    apiHeaders = {
      'headers': {
        'Set-Cookie': [authCookie, idCookie],
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/html',
      },
    }

    // Filter out the user data and only return specific values
    apiData = await getUserDataByObjectId(apiData['objectId']);
    if(!apiData) {return forbidden()}
  } catch(error) {
    apiData = error;
  }


  return response(apiData, apiHeaders)
}