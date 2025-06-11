import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Supporter() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Supporters & Sponsors</h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Sponsors</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center justify-center p-6">
              <div className="relative w-40 h-40">
                <Image
                  src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-23%20104824-D9tg6wTf8KhiXS0GTL0rsRUkmLhlWQ.png"
                  alt="Platinum Sponsor"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Platinum Sponsor</h3>
              <p className="text-center text-muted-foreground">Coming Soon</p>
            </Card>

            <Card className="flex flex-col items-center justify-center p-6">
              <div className="relative w-40 h-40">
                <Image src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-23%20104838-nCXd65xcihHtqKUoPJ8jcmcQu9XOeD.png" alt="Gold Sponsor" fill className="object-contain" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Gold Sponsor</h3>
              <p className="text-center text-muted-foreground">Coming Soon</p>
            </Card>

            <Card className="flex flex-col items-center justify-center p-6">
              <div className="relative w-40 h-40">
                <Image
                  src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-23%20104850-4RuwJfoXIwVJbe52SgreTgeEiuAQ49.png"
                  alt="Silver Sponsor"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Silver Sponsor</h3>
              <p className="text-center text-muted-foreground">Coming Soon</p>
            </Card>
          </div>
        </div>



        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Become a Sponsor</h2>

          <Card>
            <CardHeader>
              <CardTitle>Sponsorship Opportunities</CardTitle>
              <CardDescription>Support the conference and gain visibility for your organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                ICISA 2026 offers various sponsorship packages that provide excellent opportunities for organizations to
                showcase their products, services, and technologies to a global audience of researchers, academics, and
                industry professionals in the field of intelligent systems and applications.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Sponsorship Packages</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h4 className="text-lg font-bold">Platinum Sponsor</h4>
                    <p className="text-2xl font-bold my-2"> ₹2,00,000</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Premium logo placement on all conference materials</li>
                      <li>Exhibition booth in prime location</li>
                      <li>5 complimentary registrations</li>
                      <li>Full-page ad in conference program</li>
                      <li>Sponsored technical session</li>
                      <li>Recognition during opening and closing ceremonies</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="text-lg font-bold">Gold Sponsor</h4>
                    <p className="text-2xl font-bold my-2"> ₹1,00,000</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Logo on all conference materials</li>
                      <li>Exhibition booth</li>
                      <li>3 complimentary registrations</li>
                      <li>Half-page ad in conference program</li>
                      <li>Recognition during opening ceremony</li>
                    </ul>
                  </Card>

                  <Card className="p-4">
                    <h4 className="text-lg font-bold">Silver Sponsor</h4>
                    <p className="text-2xl font-bold my-2"> ₹50,000</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Logo on conference website and program</li>
                      <li>Exhibition space</li>
                      <li>2 complimentary registrations</li>
                      <li>Quarter-page ad in conference program</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <p>
                For more information about sponsorship opportunities, please contact us at{" "}
                <span className="font-semibold">sponsors@icisa2026.org</span>
              </p>

              <div className="flex justify-center mt-4">
                <Button className="text-white">Download Sponsorship Brochure</Button>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
