import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About the Conference</h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="text-justify">
          <p className="mb-4">


              The International Conference on Intelligent Systems and Applications (ICISA 2026) emerges as a pivotal
              global platform at the intersection of technological innovation, scientific research, and transformative
              applications of artificial intelligence and intelligent systems. Scheduled to bring together the
              world&apos;s leading researchers, industry innovators, academic scholars, and technology practitioners,
              this conference represents a critical juncture in understanding and shaping the future of intelligent
              technologies across multidimensional domains.

          </p>
          <p className="mb-4">
The conference will comprehensively explore the rapidly evolving landscape of intelligent systems,
              encompassing advanced machine learning algorithms, neural network architectures, cognitive computing,
              quantum machine learning, and their unprecedented applications in solving complex real-world challenges.
              Participants will delve into groundbreaking research addressing critical global issues such as climate
              change mitigation, personalized healthcare, sustainable urban development, autonomous transportation,
              cybersecurity, and advanced robotics, demonstrating the profound potential of intelligent systems to drive
              meaningful societal transformations.

          </p>
          <p className="mb-4">
 The meticulously curated technical sessions will showcase cutting-edge research methodologies, innovative
              algorithmic approaches, and practical implementations that push the boundaries of computational
              intelligence, highlighting the symbiotic relationship between theoretical advancements and pragmatic
              technological solutions. Distinguished keynote speakers from premier global research institutions, leading
              technology corporations, and innovative startup ecosystems will share insights into emerging trends,
              breakthrough technologies, and visionary perspectives that are reshaping our understanding of intelligent
              systems.

          </p>
          <p className="mb-4">
              We welcome you to this humble initiative to take part in the celebrations on possibilities of
              collaborative research and innovative ideas.

          </p>
        </div>

        <div className="flex flex-col justify-center">
          <Image
            src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-23%20081753-JLbTmoQt5XAR8x57es33WOHqK7g1mz.png"
            alt="NIT Delhi Campus"
            width={450}
            height={300}
            className="rounded-lg shadow-lg m-3"
          />

          <Image
            src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-23%20082140-ABAJe8z4y3A8PS3vVJE8jiZ6j0G9Ig.png"
            alt="NIT Delhi Campus"
            width={450}
            height={300}
            className="rounded-lg shadow-lg m-3"
          />

          <Image
            src="https://rklfuc72catfgesp.public.blob.vercel-storage.com/Screenshot%202025-05-23%20082339-eMy6yKj1v535WoatqLp79ZxxRdPNoN.png"
            alt="NIT Delhi Campus"
            width={450}
            height={300}
            className="rounded-lg shadow-lg m-3"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
<div className="border p-6 rounded-lg shadow-md">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-xl font-bold">Venue</h3>
    <a
      href="https://www.google.com/maps/place/National+Institute+of+Technology+Delhi/@28.8165425,77.130391,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1b1923ada2e3:0x1169930518add2fe!8m2!3d28.8165378!4d77.1329659!16s%2Fm%2F0l8gg7v?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-blue-600 hover:underline"
    >
      Open on Map
    </a>
  </div>
  <p>National Institute of Technology Delhi</p>
  <p>Plot No. FA7, Zone P1, GT Karnal Rd</p>
  <p>Delhi - 110036</p>
</div>


        <div className="border p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>karanverma@nitdelhi.ac.in</p>
          <p>sachinsingh@nitdelhi.ac.in</p>
          <p>gsheoran@nitdelhi.ac.in</p>
        </div>

        <div className="border p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Social Media Handles</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/nitdelhi" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.facebook.com/nitdelhi" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://twitter.com/nitdelhi" target="_blank" rel="noopener noreferrer" className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
