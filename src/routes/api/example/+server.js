import {startBackendless, validateUser, forbidden, response, getAllRows} from "$lib/server/utilities.js";


export async function GET({request}) {
  await startBackendless();

  const isUserValid = await validateUser(request);
  if(!isUserValid) {return forbidden()}

  let tableData = await getAllRows(request, 'test');

  return response(tableData);
}
