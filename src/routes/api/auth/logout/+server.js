import * as dotenv from "dotenv";
dotenv.config()
import {startBackendless, validateUser, forbidden, response, getAllRows, searchCookies, createCookie} from "$lib/server/utilities.js";


const REST_API = process.env.BACKENDLESS_REST_URL;


export async function GET({request}) {
  // Get all cookies in the request
  const parsedCookies = await searchCookies(request);

  // Get the user's token
  const token = parsedCookies?.['user-token'];

  let apiData;

  try {
    // The Backendless SDK only allows client side logouts, so use REST instead
    apiData = await fetch(`${REST_API}/api/users/logout`, {
      headers: {
        'Content-Type': "application/json",
        'user-token': token
      },
    });
  } catch(error) {
    apiData = error;
  }

  // After the session is invalidated, clear the user's cookies
  const authCookie = await createCookie('user-token', '', true, -1);
  const idCookie = await createCookie('user-id', '', true, -1);

  const apiHeaders = {
    'headers': {
      'Set-Cookie': [authCookie, idCookie],
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/html',
    },
  }

  return response(apiData, apiHeaders);
}
