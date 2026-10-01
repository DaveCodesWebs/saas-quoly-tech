import React, { useEffect, useState } from 'react'

export default function AnimatedCounter({ target, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const startVal = 0
    const endVal = parseFloat(target)
    const isDecimal = target % 1 !== 0

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const rate = Math.min(progress / duration, 1)
      
      const currentVal = startVal + rate * (endVal - startVal)
      setCount(isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal))

      if (rate < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration])

  return <span>{count}{suffix}</span>
}
