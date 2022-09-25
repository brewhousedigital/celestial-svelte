import Backendless from "backendless"
import cookie from "cookie";
import * as dotenv from "dotenv";
dotenv.config()
import siteSettings from "$lib/data/settings.json";


const REST_API = process.env.BACKENDLESS_REST_URL;


export const startBackendless = async() => {
  const APP_ID = process.env.BACKENDLESS_APP_ID;
  const API_KEY = process.env.BACKENDLESS_API_KEY;
  await Backendless.initApp(APP_ID, API_KEY);
}


export const validateUser = async(request) => {
  // Get all cookies in the request
  const parsedCookies = await searchCookies(request);

  // Get the user's token
  const token = parsedCookies?.['user-token'];

  // If no bearer token was passed, this will be undefined
  if(!token) {
    return false;
  }

  // Verify that it's a valid token
  // The Backendless SDK only allows client side validation, so use REST instead
  const validateUser = await fetch(`${REST_API}/api/users/isvalidusertoken/${token}`);

  return validateUser.json();
}


export const getUserDataByCookies = async(request) => {
  // Get all cookies in the request
  const parsedCookies = await searchCookies(request);

  // Get the user's token
  const objectId = parsedCookies?.['user-id'];

  // If no bearer token was passed, this will be undefined
  if(!objectId) {
    return false;
  }

  return getUserDataByObjectId(objectId);
}


export const getUserDataByObjectId = async(objectId) => {
  let apiData;

  try {
    apiData = await Backendless.Data.of("Users").findById(objectId);

    // Filter the specific content here
    apiData = {
      created: apiData.created,
      lastLogin: apiData.lastLogin,
      email: apiData.email,
      name: apiData.name,
      premium: apiData.premium,
      // API message
      status: "success",
    }
  } catch(error) {
    apiData = error;
  }

  return apiData;
}


export const createCookie = async(key, value, secure = true, time = 0) => {
  let maxAge = time;

  // If the time is not passed in the function, set to a default of two weeks
  if(time === 0) {
    maxAge = siteSettings.defaultCookieAgeMilliseconds;
  }

  return cookie.serialize(key, value, {
    secure: secure,
    httpOnly: secure,
    path: '/',
    maxAge: maxAge,
  })
}


export const searchCookies = async(request) => {
  const {headers} = request;

  // Headers comes through as a "Map" instead of a traditional object. This will convert it.
  const headersObject = Object.fromEntries(headers);

  // Get all cookies in a string format. Default to a blank string if no cookies are sent
  const allCookies = headersObject?.cookie ?? "";

  // Parse them into a JSON object
  return cookie.parse(allCookies);
}


export const forbidden = async() => {
  return response({status: 401, message: "Invalid token"});
}


export const response = async(data = {}, options = {}) => {
  return new Response(JSON.stringify(data), options);
}


export const getAllRows = async(tableName) => {
  let tableData;

  try {
    tableData = await Backendless.Data.of(tableName).find();
    tableData = [...tableData];
  } catch (error) {
    tableData = {...error};
  }

  return tableData;
}