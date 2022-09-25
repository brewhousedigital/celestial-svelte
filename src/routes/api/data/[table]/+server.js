import {startBackendless, validateUser, forbidden, response, getAllRows} from "$lib/server/utilities.js";


export async function GET({params, request}) {
  await startBackendless();

  const isUserValid = await validateUser(request);
  if(!isUserValid) {return forbidden()}

  let tableData = await getAllRows(request, String(params.table));

  return response(tableData);
}
