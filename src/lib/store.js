import {writable} from 'svelte/store';

// Stores the entirety of the user object from Backendless
export const user = writable({});

// Handles the global error alert bar
export const siteError = writable("")