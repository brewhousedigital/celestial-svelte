import md5 from "crypto-js/md5";

export async function get({ params }) {
    let hash = await md5(params.email).toString();

    return {
        status: 200,
        body: {
            md5: hash
        }
    };
}