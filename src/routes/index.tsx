import { createFileRoute } from '@tanstack/react-router'
import { useAtom, useAtomValue } from 'jotai'

import ThemeController from '@/components/theme-controller'
import { countAtom, doubleCountAtom } from '@/stores/count'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  // const count = useAtomValue(countAtom)
  // const setCount = useSetAtom(countAtom)
  const [count, setCount] = useAtom(countAtom)
  const doubleCount = useAtomValue(doubleCountAtom)

  function incrementCount() {
    setCount((c) => c + 1)
  }

  function resetCount() {
    setCount(0)
  }

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
