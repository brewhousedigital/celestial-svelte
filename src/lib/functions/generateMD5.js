/**
 * Generate a MD5 hash for any value
 * @param value
 * @returns {Promise<void>}
 */
export const generateMD5 = async(value) => {
    // This shouldn't fire until the client side is ready
    if(typeof fetch !== "undefined") {
        let response = await fetch(`/api/hash/md5/${value}`);
        return await response.json();
    }
}