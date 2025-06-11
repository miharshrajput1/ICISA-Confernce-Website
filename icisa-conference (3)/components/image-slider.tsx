"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = ["/images/taj-mahal.jpg", "/images/india-gate.jpg", "/images/qutub-minar.jpg"]

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      ))}
    </div>
  )
}
