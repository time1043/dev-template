import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// primitive atoms
export const countAtom = atomWithStorage<number>('count', 0)
// derived atoms - read-only
export const doubleCountAtom = atom<number>((get) => get(countAtom) * 2)

// action atoms
export const incrementCountAtom = atom(null, (get, set) => {
  const count = get(countAtom)
  set(countAtom, count + 1)
})

export const resetCountAtom = atom(null, (_get, set) => {
  set(countAtom, 0)
})
