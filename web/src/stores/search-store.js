import { writable } from 'svelte/store'

export const searchStore = writable({
  term: 'iPhone',
})
