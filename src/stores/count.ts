import { atom } from 'jotai'

// primitive atoms
export const countAtom = atom(0)
// derived atoms - read-only
export const doubleCountAtom = atom((get) => get(countAtom) * 2)
