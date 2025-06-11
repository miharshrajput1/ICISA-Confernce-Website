import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Committees() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Conference Committees</h1>

      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="organizing" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="organizing">Organizing Committee</TabsTrigger>
            <TabsTrigger value="technical">Technical Program Committee</TabsTrigger>
            <TabsTrigger value="advisory">Advisory Committee</TabsTrigger>
          </TabsList>

          <TabsContent value="organizing" className="mt-6">
            {/* Chief Patron Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#2e3192]">Honorary Patron</h2>
              <div className="max-w-sm mx-auto">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <Image
                      src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-22%20180157-oXY23GSYKTpynrWBXrW3Sg1jPE95jY.png" // replace with your actual image path
                      alt="Mr. Chandra Kant Birla"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="text-center bg-gray-50">
                    <CardTitle>Mr. Chandra Kant Birla</CardTitle>
                    <CardDescription>Chairman</CardDescription>
                    <CardDescription>National Institute of Technology, Delhi</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Honorary General Chair Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#2e3192]">Honorary General Chair</h2>
              <div className="max-w-sm mx-auto">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <Image
                      src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-22%20180906-SDVdY6o9I0oUAh8DShuZKSI5P6Oasi.png" // replace with your actual image path
                      alt="Prof. (Dr.) Ajay K. Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="text-center bg-gray-50">
                    <CardTitle>Prof. (Dr.) Ajay K. Sharma</CardTitle>
                    <CardDescription>Principal Chair and Director</CardDescription>
                    <CardDescription>National Institute of Technology, Delhi</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

{/* General Chairs with Photos */}
<div className="mb-10 w-full">
  <h2 className="text-2xl font-bold mb-6 text-center text-[#2e3192]">General Chairs</h2>
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Dr. Karan Verma */}
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-square relative">
          <Image
            src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-22%20181630-uusQYMy34T0eiWnzgDUdzG7SjUGMbC.png"
            alt="Dr. Karan Verma"
            fill
            className="object-cover object-top"
          />
        </div>
        <CardHeader className="text-center bg-gray-50">
          <CardTitle>Dr. Karan Verma</CardTitle>
          <CardDescription>Associate Professor</CardDescription>
          <CardDescription>Deptartment of CSE</CardDescription>
          <CardDescription>National Institute of Technology Delhi</CardDescription>
        </CardHeader>
      </Card>

      {/* Dr. Gyanendra Sheoran */}
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-square relative">
          <Image
            src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-22%20205802-wvmuL2niuiwpzB9fBbYqxu3hqXpjie.png"
            alt="Dr. Gyanendra Sheoran"
            fill
            className="object-cover object-top"
          />
        </div>
        <CardHeader className="text-center bg-gray-50">
          <CardTitle>Dr. Gyanendra Sheoran</CardTitle>
          <CardDescription>Associate Professor</CardDescription>
          <CardDescription>Deptartment of Applied Sciences</CardDescription>
          <CardDescription>National Institute of Technology Delhi</CardDescription>
        </CardHeader>
      </Card>
    </div>
  </div>
</div>


            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#2e3192]">Co-General Chairs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Dr. Pankaj Mukhija */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <Image
                      src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/mukhija-klLyqiNz0dUJklKtHmrpjMMvBGa3EQ.jpg"
                      alt="Dr. Pankaj Mukhija"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <CardHeader className="text-center bg-gray-50">
                    <CardTitle>Dr. Pankaj Mukhija</CardTitle>
                    <CardDescription>Associate Professor</CardDescription>
                    <CardDescription>Deptartment of Electrical Engineering</CardDescription>
                    <CardDescription>National Institute of Technology Delhi</CardDescription>
                  </CardHeader>
                </Card>

                {/* Dr. Sachin Singh */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <Image
                      src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/sachbolnewalasachin-fSuHhqlGGoJ1PAaH4QDih6uIUfmi4C.jpg"
                      alt="Dr. Sachin Singh"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <CardHeader className="text-center bg-gray-50">
                    <CardTitle>Dr. Sachin Singh</CardTitle>
                    <CardDescription>Assistant Professor</CardDescription>
                    <CardDescription>Deptartment of Electrical Engineering</CardDescription>
                    <CardDescription>National Institute of Technology Delhi</CardDescription>
                  </CardHeader>
                </Card>

                {/* Dr. Mahesh */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <Image
                      src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/oomahivee-D6yJcSnnUlgrxAmz3RPVS5SOqF4uBn.jpg"
                      alt="Dr. Mahesh K. Singh"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <CardHeader className="text-center bg-gray-50">
                    <CardTitle>Dr. Mahesh K. Singh</CardTitle>
                    <CardDescription>Assistant Professor</CardDescription>
                    <CardDescription>Deptartment of ECE</CardDescription>
                    <CardDescription>National Institute of Technology Delhi</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Other Committee Roles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#2e3192]">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-[#2e3192] text-white text-center mr-3 flex items-center justify-center">
                      S
                    </span>
                    Secretary
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Sachin Singh (NIT Delhi)
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Mahesh K. Singh (NIT Delhi)
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Jignesh S. Bhatt (IIIT - Vadodara)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#2e3192]">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-[#2e3192] text-white text-center mr-3 flex items-center justify-center">
                      C
                    </span>
                    Convener
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Pankaj Mukhija (NIT Delhi)
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Naveen Kumar (IIIT - Vadodara)
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Prof. Shreyas Kumar (Texas A&M University, USA)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#2e3192]">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-[#2e3192] text-white text-center mr-3 flex items-center justify-center">
                      P
                    </span>
                    Publication Chair
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Manish Singh (NIT Delhi)
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Arun Balodi (Dayanand Sagar University, Bangalore)
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Ghanshyam Singh (MNIT Jaipur)
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Piyush Kumar (NIT Patna)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#2e3192]">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-[#2e3192] text-white text-center mr-3 flex items-center justify-center">
                      F
                    </span>
                    Finance Chair
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Karan Verma (NIT Delhi)
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                      Dr. Gyanendra Sheoran (NIT Delhi)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#2e3192] md:col-span-2">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-[#2e3192] text-white text-center mr-3 flex items-center justify-center">
                      P
                    </span>
                    Publicity Chair
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Jitendra Verma (IIIT - Sonepat)
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Naveen (IIIT - Vadodara)
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Jagnesh S. Bhatt (IIIT- Vadodara)
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Ashutosh (IIIT - Vadodara)
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Parmit Mazumdar (IIIT - Vadodara)
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Pankaj Kumar (NIT - Kurukshetra)
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Ashok Kumar (Govt. Women Engineering College, Ajmer)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#2e3192] md:col-span-2">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="flex items-center">
                    <span className="inline-block w-8 h-8 rounded-full bg-[#2e3192] text-white text-center mr-3 flex items-center justify-center">
                      T
                    </span>
                    Technical Program Chair
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Anurag Singh (NIT Delhi)
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Gautam Kumar (NIT Delhi)
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Dr. Naveen Kumar (IIIT - Vadodara)
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-[#2e3192] mr-2"></span>
                        Prof. Amit Aggarwal (IIIT Vadodara)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="technical" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Program Committee</CardTitle>
                <CardDescription>Experts responsible for the technical program and paper reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p>
                    The Technical Program Committee (TPC) consists of experts from around the world who are responsible
                    for reviewing papers and ensuring the high quality of the technical program. The committee members
                    include:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Dr. Anurag Singh, NIT Delhi</li>
                        <li>Dr. Gautam, NIT Delhi</li>
                        <li>Dr. Mahesh, NIT Delhi</li>
                        <li>Dr. Sachin Singh, NIT Delhi</li>
                        <li>Dr. Gyanendra Sheoran, NIT Delhi</li>
                        <li>Dr. Karan Verma, NIT Delhi</li>
                        <li>Dr. Arun Kumar, PEC Chandigarh</li>
                        <li>Dr. Piyush Kumar, NIT Patna</li>
                        <li>Dr. Nagendra, NIT Jalandhar</li>
                        <li>Dr. Jitendra Kumar, IIIT Sonepat</li>
                        <li>Dr. Naveen Kumar, IIIT - Vadodara</li>
                        <li>Prof. Amit Aggarwal, IIIT - Vadodara</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm italic">
                    Note: The complete list of TPC members will be updated regularly. Please check back for the most
                    up-to-date information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advisory" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Advisory Committee</CardTitle>
                <CardDescription>Distinguished experts providing guidance for the conference</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p>
                    The Advisory Committee consists of distinguished experts from academia and industry who provide
                    strategic guidance for the conference. The committee members include:
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold">International Advisors</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Prof. Mukesh Singhal, Chancellor's Professor, University of California</li>
                      <li>Prof. Hiroyuki Tsuda, Keio University, Japan</li>
                      <li>Prof. Ali Gharsallah, University of Tunis E. M, Tunisia</li>
                      <li>Prof. Isao Echizen, Director, National Institute of Informatics, Tokyo, Japan</li>
                      <li>Prof. Yudong Zhang, University of Lecicester, UK</li>
                      <li>Prof. M. Yasin Akhtar Raja, Professor, University of North Carolina, USA</li>
                      <li>Prof. Sergii Ubizskii, LPNU, Ukraine</li>
                      <li>Prof. Yuri Shpolyanskiy, University of Saint Petersburg, Russia</li>
                      <li>Prof. Konstantin Kozadeav, BSU, Minsk, Belarus</li>
                      <li>Dr. Bharat Bhargav, Purdue University, USA</li>
                      <li>
                        Dr. Marcin Paprzycki, Systems Research Institute, Polish Academy of Sciences, Warsaw, Poland
                      </li>
                      <li>
                        Dr. Abhijit Sen, Computer Science and Information Technology, Kwantlen Polytechnic University,
                        Canada
                      </li>
                      <li>Dr. Subhas Chandra Mukhopadhyay, Macquarie University, NSW 2109, Australia</li>
                      <li>Dr. Zoltan Vamossy, Obuda University, Budapest, Hungary</li>
                      <li>Prof. (Dr.) Habil, Levente Adalbert Kovacs, Obuda University, Budapest, Hungary</li>
                      <li>
                        Prof. Leandro Melo de Sales, Institute of Computing (IC) at Federal University of Alagos (UFAL),
                        Brazil
                      </li>
                      <li>
                        Prof. Ramin Yahyapour, Professor, Gesellschaft fur wissenschaftilche Datenvarbeitung mbH
                        Gottingen
                      </li>
                      <li>
                        Dr. Pavel Kromer, Associate Professor, VSB Technical University of Ostrava, Czech Republic{" "}
                      </li>
                      <li>Dr. Pradeep Kumar, Assistant Professor, University of KwaZulu-Natal, Durban, South Africa</li>
                      <li>Dr. Chaman Verma, Assistant Professor, Eotvos Lorand University, Budapest, Hungary</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">National Advisors</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Prof. Rahul Kataria, Professor, Delhi Technological University</li>
                      <li>Prof. O P Verma, Professor, Delhi Technological University</li>
                      <li>Dr. Shailender Kumar, Professor, DTU New Delhi</li>
                      <li>Prof. Angshul Majumda, Professor (CSE, ECE), IITT Delhi</li>
                      <li>Ms. Daljeet Kaur, Principal Scientific Officer, NIT Jalandhar</li>
                      <li>Dr. Maheshkumar H. Kolekar, Associate Professor, IIT Patna</li>
                      <li>Dr. Badri N. Subudhi, Assistant Professor, IIT Jammu</li>
                      <li>Prof. Rajeev Sangal, Professor, IIT Hyderabad</li>
                      <li>Prof. Lalit Kumar Awasthi, Director, NIT Uttarakhand</li>
                      <li>Prof. B. B. Chaudhuri, Professor, Indian Statistical Institute Kolkata</li>
                      <li>Prof. R. Balasubramanian, Professor, IIT Roorkee</li>
                      <li>Prof. Aparajita Ojha, Professor, IIITDM Jabalpur</li>
                      <li>Prof. Ratnaiti Bhattacharya, Professor, IIT Guwahati</li>
                      <li>Prof. Devanand, Professor, Central University of Jammu</li>
                      <li>Prof. B S Kaith, Professor, NIT Jalandhar</li>
                      <li>Prof. Ranjan Bose, Director, IITP-Delhi</li>
                      <li>Prof. Manoj Mishra, Professor, IIT Roorkee</li>
                      <li>Prof. Vijay Kumar, Professor, JNU Delhi</li>
                      <li>Prof. B. K. Singh, Professor, IIT Roorkee</li>
                      <li>Prof. Pramod Kumar Jain, Director, IIT(BHU) Varanasi</li>
                      <li>Prof. Kolin Poul, Professor, IIT Delhi</li>
                      <li>Prof. Balaraman Ravindran, Professor, IIT Madras</li>
                      <li>Prof. Somenath Biswas, Professor, IIT Kanpur</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
