import { createFileRoute } from '@tanstack/react-router'
import { useAtomValue, useSetAtom } from 'jotai'

import ThemeController from '@/components/theme-controller'
import { countAtom, doubleCountAtom, incrementCountAtom, resetCountAtom } from '@/stores/count'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const count = useAtomValue(countAtom)
  const doubleCount = useAtomValue(doubleCountAtom)

  const incrementCount = useSetAtom(incrementCountAtom)
  const resetCount = useSetAtom(resetCountAtom)

  return (
    <div>
      <p className="text-3xl font-bold">
        {count} * 2 = {doubleCount}
      </p>
      <button className="btn" onClick={incrementCount}>
        Increment
      </button>
      <button className="btn" onClick={resetCount}>
        Reset
      </button>
      <ThemeController />
    </div>
  )
}
