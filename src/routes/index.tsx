import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import ThemeController from '@/components/theme-controller'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [count, setCount] = useState(0)
  const doubleCount = count * 2

  return (
    <div>
      <p className="text-3xl font-bold">
        {count} * 2 = {doubleCount}
      </p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <ThemeController />
    </div>
  )
}
