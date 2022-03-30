import md5 from "crypto-js/md5";

export async function get({ params }) {
    // params.input is from the file name
    let hash = await md5(params.input).toString();

    return {
        status: 200,
        body: {
            md5: hash
        }
    };
}