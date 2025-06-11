import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Speakers() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Keynote Speakers</h1>

      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xl mb-12">
          We are excited to announce our distinguished keynote speakers for ICISA 2026. More speakers will be announced
          soon.
        </p>

<div className="flex justify-center">
  <Card className="w-full max-w-4xl h-96 p-16 bg-gray-50 rounded-2xl shadow-lg flex items-center justify-center">
    <div className="text-center">
      <h3 className="text-3xl font-bold mb-6">Speakers</h3>
      <p className="text-xl">Coming Soon</p>
    </div>
  </Card>
</div>

      </div>
    </div>
  )
}
