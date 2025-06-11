import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (

<div>
      {/* Hero Section with NIT Delhi Image */}
      <div className="relative">
  <div className="w-full h-[500px] md:h-[600px] relative">
    <Image src="/images/nit-delhi-campus.jpg" alt="NIT Delhi Campus" fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-2">
      <span className="text-sky-500">I</span>nternational <span className="text-sky-500">C</span>onference
    </h1>
    <p className="text-2xl mb-4">on</p>
    <h2 className="text-3xl md:text-5xl font-bold mb-2">
      <span className="text-sky-500">I</span>ntelligent <span className="text-sky-500">S</span>ystem
    </h2>
    <p className="text-xl mb-4">and</p>
    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      <span className="text-sky-500">A</span>pplications
    </h2>
    <p className="text-xl md:text-2xl font-bold mb-2">
      29<span className="text-sm align-top">th</span> - 31<span className="text-sm align-top">st</span> May, 2026
    </p>
    <p className="text-lg md:text-xl mb-8">
      National Institute of Technology Delhi, New Delhi, India
    </p>
  </div>
</div>


      {/* Wave Separator */}
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#4f46e5"
            fillOpacity="0.2"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Important Dates Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title">Important Dates</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#2e3192]">Paper Submission</h3>
                <p className="text-lg font-medium">1st August 2025</p>
                <p className="text-lg font-medium">30th November 2025 (Deadline)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#2e3192]">Notification of Acceptance</h3>
                <p className="text-lg font-medium">15th January 2026</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#2e3192]">Camera-Ready Submission</h3>
                <p className="text-lg font-medium">1st March 2026</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#2e3192]">Conference Registration</h3>
                <p className="text-lg font-medium">5th April 2026</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#2e3192]">Conference Dates</h3>
                <p className="text-lg font-medium">29-31st May 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Organised by Section */}
<section className="section-padding">
  <div className="container mx-auto">
    <h2 className="section-title">Organised by</h2>
    <div className="text-center">
      <h3 className="text-2xl font-bold text-blue-600 mb-6">NATIONAL INSTITUTE OF TECHNOLOGY DELHI</h3>
      
      

      <p className="max-w-4xl mx-auto text-justify">
        National Institute of Technology Delhi is a premier public technical autonomous institution located in New
        Delhi. NIT Delhi is an Institution of National Importance and aims to provide instructions and research
        facilities in various disciplines of Engineering, Science and Technology, Management, Social Sciences and
        Humanities for advance learning and dissemination of knowledge. The mission of NIT Delhi is to produce
        human resource those who are creative, competitive, and innovative with high intellect and ethical values.
      </p>
    </div>
  </div>
</section>

      {/* About the Conference Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title">About the NIT Delhi</h2>
          {/* Image Container */}
      <div className="flex justify-center gap-8 py-6">
        {/* First Image */}
        <div className="w-1/2 max-w-xs h-56 relative">
          <Image 
            src="https://www.ic2sdt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnitd_acad.5f53daf4.jpg&w=3840&q=75" 
            alt="Mini Campus" 
            fill
            className="object-contain"
          />
        </div>
        
        {/* Second Image */}
        <div className="w-1/2 max-w-xs h-56 relative">
          <Image 
            src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-23%20020042-071Win9paxHW0bt9BKBFQvAHgfVAXh.png" 
            alt="Conference Logo" 
            fill
            className="object-contain"
          />
        </div>
      </div>
          <div className="max-w-4xl mx-auto text-justify">
            <p className="mb-4">
            National Institute of Technology Delhi (NITD) is one of the thirty one NITs established in the year 2010 by
            an act of the parliament and has been declared as an Institute of National importance. NIT Delhi is an
            autonomous Institute, which functions under the aegis of the Ministry of Education, Government of India. NIT
            Delhi is ranked 51 by NIRF 2023 in Engineering category.
            </p>
            <p className="mb-4">
            It aims to provide education and research facilities in various disciplines of Engineering, Science and
            Technology, Management, Social Sciences, and Humanities for advanced learning and dissemination of
            knowledge. The mission of NIT Delhi is to develop a highly intelligent and deeply ethical human resource, a
            workforce which is creative, competitive and innovative. The Institute is imparting holistic education,
            along with inculcating high moral values in its students.
            </p>
            <p className="mb-4">
            NIT Delhi started its academic session in 2010 and it was operating from its transit campus at Narela, Delhi
            until recently. The institute has now completely shifted to its permanent campus situated on NH-1 (GT Karnal
            Road), Narela sub-city, New Delhi. The institute offers B. Tech. programmes in six areas of technology
            (Computer Science and Engineering, Electronics and Communication Engineering, Electrical Engineering,
            Artificial Intelligence & Data Science, Civil Engineering and Mechanical Engineering), M. Tech. programmes
            in eight disciplines, along with Ph.D. programmes in all branches of Science and Engineering.
            </p>
            <p className="mb-4">
            The institute makes all attempts to establish strong research collaborations in evolving fields of research
            in science and engineering. The programmes like joint thesis work, inter-institute collaborative projects,
            institute assistantship to PG and doctoral students, and administrative support to faculty members for
            taking up research and consultancy work (sponsored by external agencies). From 2022-23 academic session, the
            institute has started the Post-Doctoral Fellowship (PDF) programme to further escalate the research
            activities. NIT Delhi has implemented the guidelines of National Education Policy (NEP) 2020 for current
            batches of students.
          </p>
            
          </div>
        </div>
      </section>

      {/* How to Reach Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-title">How to Reach</h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-4">
              The venue for the event i.e., National Institute of Technology Delhi is about 30 kms from the center of
              the city i.e., India Gate, New delhi FA7,Zone, P1, GT Karnal Rd, Delhi, 110036. There are several ways you
              can use to reach the venue. The distances from several means are mentioned below.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <ul className="list-none space-y-3">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-[#2e3192] text-white font-bold">
                    1
                  </span>
                  Indira Gandhi Internal Airport (T-3) – 50 kms
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-[#2e3192] text-white font-bold">
                    2
                  </span>
                  Hazrat Nizamuddin Railway Station – 40 kms
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-[#2e3192] text-white font-bold">
                    3
                  </span>
                  New Delhi Railway Station – 30 Kms
                </li>
              </ul>
            </div>
            <p className="mb-4">
              Mostly, Cabs are available 24/7 and you can also go for metros which are available from 06:00 AM to 11:00
              PM through-out Delhi. Although to reach NIT Delhi via metro you need to come to &quot;Jahangirpuri Metro
              Station&quot; (nearest metro station) & then take another available option to come to NIT Delhi which is
              nearly 15 Kms away.
            </p>
            <div className="mt-6 flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8606290553424!2d77.13097807549823!3d28.79069997564801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1714170000000!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Footer */}
      <div className="w-full mt-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#4f46e5"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}
