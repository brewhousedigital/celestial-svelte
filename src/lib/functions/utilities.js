/**
 * Generate a MD5 hash for any value
 * @param value {string} This is the value that needs to be converted to a MD5 hash
 * @returns {string} Returns the MD5 hash
 */
export const generateMD5 = async(value) => {
  let response = await fetch(`/api/utilities/md5/${value}`);
  return await response.json();
}


/**
 * Takes in a value and removes the whitespace from the beginning and end of the string
 * @param string {string} This is the string that needs to be trimmed
 * @returns {string} Returns a string with all leading and trailing whitespace removed
 */
export const trimWhiteSpace = (string) => {
  return string.replace(/\n|\r/g, "").replace(/\s{2,}/g,' ').trim();
}