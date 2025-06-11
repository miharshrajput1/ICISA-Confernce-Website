import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Registration() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Registration</h1>

<div className="flex justify-center mb-8">
  <Button 
    size="lg" 
    className="bg-[#2e3192] hover:bg-blue-800 text-white text-lg px-8 py-6"
  >
    Register Now
  </Button>
</div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="info">Registration Info</TabsTrigger>
            <TabsTrigger value="fees">Registration Fees</TabsTrigger>
            <TabsTrigger value="form">Registration Form</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Registration Information</CardTitle>
                <CardDescription>Important information about the registration process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Registration for the International Conference in Intelligent System and
                  Applications (ICISA 2026) will open soon. Please check back later for more information.
                </p>
                <p>
                  At least one author of each accepted paper must register for the conference. Each registration covers
                  only one paper. For additional papers, additional registration is required.
                </p>
                <p>The registration fee includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access to all technical sessions</li>
                  <li>Conference kit</li>
                  <li>Lunch and refreshments during the conference days</li>
                  <li>Conference dinner</li>
                  <li>Publication of the paper in the conference proceedings</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fees" className="mt-6">
<Card>
  <CardHeader>
    <CardTitle>Registration Fees</CardTitle>
    <CardDescription>Fee structure for different categories (Deadline: 7 October 2025)</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Category</th>
            <th className="border p-3 text-left">Registration Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="border p-3 font-semibold" colSpan="2">INDIAN DELEGATES (INR)</td>
          </tr>
          <tr>
            <td className="border p-3">Regular Author</td>
            <td className="border p-3">₹11,500</td>
          </tr>
          <tr>
            <td className="border p-3">Students Author</td>
            <td className="border p-3">₹11,000</td>
          </tr>
          <tr>
            <td className="border p-3">Industry Professional</td>
            <td className="border p-3">₹12,500</td>
          </tr>
          <tr>
            <td className="border p-3">2nd paper, Regular Author</td>
            <td className="border p-3">₹11,000</td>
          </tr>
          <tr>
            <td className="border p-3">Listener (Non-Author/Co-Author/General Participants)</td>
            <td className="border p-3">₹5,000 (per person)</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="border p-3 font-semibold" colSpan="2">INTERNATIONAL DELEGATES (US $)</td>
          </tr>
          <tr>
            <td className="border p-3">Regular Author</td>
            <td className="border p-3">$350</td>
          </tr>
          <tr>
            <td className="border p-3">Students Author</td>
            <td className="border p-3">$300</td>
          </tr>
          <tr>
            <td className="border p-3">2nd paper, Author from other countries</td>
            <td className="border p-3">$250</td>
          </tr>
          <tr>
            <td className="border p-3">Listener (Non-Author/Co-Author/General Participants)</td>
            <td className="border p-3">$150</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="border p-3 font-semibold" colSpan="2">WORKSHOP</td>
          </tr>
          <tr>
            <td className="border p-3">Registered Authors of ICMLDE (Certificate will be provided)</td>
            <td className="border p-3">Free</td>
          </tr>
          <tr>
            <td className="border p-3">Non-Author/General Participants</td>
            <td className="border p-3">₹4,000 (per person)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </CardContent>
</Card>

<Card className="mt-6">
  <CardHeader>
    <CardTitle>Payment Information</CardTitle>
    <CardDescription>Instructions for wire transfer payments</CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">


    <div>
    <h1>
      COMING SOON
    </h1> </div>


  </CardContent>
</Card>
          </TabsContent>

          <TabsContent value="form" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>Fill out the form to register for the conference</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="affiliation">Affiliation/Organization</Label>
                  <Input id="affiliation" placeholder="Enter your affiliation" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
<Label>Registration Category</Label>
  <RadioGroup defaultValue="academic-institutional">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="academic-institutional" id="academic-institutional" />
      <Label htmlFor="academic-institutional">Academic/Researcher (Institutional Subscription)</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="corporate-institutional" id="corporate-institutional" />
      <Label htmlFor="corporate-institutional">Corporate/Industry Professional (Institutional Subscription)</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="individual-subscriber" id="individual-subscriber" />
      <Label htmlFor="individual-subscriber">Individual Subscriber</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="open-access" id="open-access" />
      <Label htmlFor="open-access">Open Access Member</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="society-member" id="society-member" />
      <Label htmlFor="society-member">Society Member (e.g., ACS, RSC)</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="student-researcher" id="student-researcher" />
      <Label htmlFor="student-researcher">Student/Postdoctoral Researcher</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="attendee" id="attendee" />
      <Label htmlFor="attendee">Attendee Only (No Paper Submission)</Label>
    </div>
  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paperTitle">Paper Title (if applicable)</Label>
                  <Input id="paperTitle" placeholder="Enter your paper title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paperId">Paper ID (if applicable)</Label>
                  <Input id="paperId" placeholder="Enter your paper ID" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#2e3192] hover:bg-blue-800">Submit Registration</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
