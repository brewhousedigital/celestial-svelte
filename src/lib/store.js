import {writable} from 'svelte/store';

// Stores the entirety of the user object from Backendless
export const user = writable({});

// Handles the global error alert bar
export const siteError = writable("")

/**
 * The user's theme can be used to customize the styling of the site
 * false: light | true: dark
 */
export const theme = writable(false);