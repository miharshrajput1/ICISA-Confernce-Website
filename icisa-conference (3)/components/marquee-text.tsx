"use client"

import { useEffect, useRef } from "react"

export default function MarqueeText() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const animateText = () => {
      const width = window.innerWidth
      textElement.style.transform = `translateX(${width}px)`

      setTimeout(() => {
        textElement.style.transition = "transform 15s linear, opacity 15s linear"
        textElement.style.transform = `translateX(-${width}px)`
        textElement.style.opacity = "0"

        // Reset after animation completes
        setTimeout(() => {
          textElement.style.transition = "none"
          textElement.style.transform = `translateX(${width}px)`
          textElement.style.opacity = "1"

          // Start the animation again
          requestAnimationFrame(() => {
            setTimeout(animateText, 100)
          })
        }, 15000)
      }, 100)
    }

    animateText()

    return () => {
      if (textElement) {
        textElement.style.transition = "none"
      }
    }
  }, [])

  return (
    <div className="bg-gray-100 py-2 overflow-hidden relative">
      <div ref={textRef} className="text-red-600 font-semibold text-lg whitespace-nowrap">
        This is a sample text snippet for the website
      </div>
    </div>
  )
}
