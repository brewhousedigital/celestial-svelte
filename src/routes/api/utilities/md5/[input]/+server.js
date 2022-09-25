import md5 from "crypto-js/md5";
import {response} from "$lib/server/utilities.js";

export async function GET({ params }) {
    // params.input is from the file name
    let hash = await md5(params.input).toString();

    return response({md5: hash});
}