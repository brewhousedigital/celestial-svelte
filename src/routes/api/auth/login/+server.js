import Backendless from 'backendless'
import {startBackendless, createCookie, response} from "$lib/server/utilities.js";


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
  } catch(error) {
    apiData = error;
  }


  return response({...apiData}, apiHeaders)
}