import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2e3192] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ICISA 2026</h3>
            <p className="mb-4">
              International Conference on Intelligent System and Applications
            </p>
            <p>May 29-31, 2026</p>
            <p>National Institute of Technology Delhi, India</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <p>
                  National Institute of Technology Delhi
                  <br />
                  Plot No. FA7, Zone P1, GT Karnal Rd
                  <br />
                  Delhi - 110036, India
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <div>
                  <p>+91-8003389258</p>
                  <p>+91-7042131946</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <p>icisa2026@nitdelhi.ac.in</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/registration" className="hover:underline">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/submission" className="hover:underline">
                  Paper Submission
                </Link>
              </li>
              <li>
                <Link href="/tracks" className="hover:underline">
                  Conference Tracks
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:underline">
                  Keynote Speakers
                </Link>
              </li>
              <li>
                <Link href="https://www.nitdelhi.ac.in" className="hover:underline">
                  NIT Delhi Website
                </Link>
              </li>
            </ul>
          </div>
        </div>

       <div className="border-t border-blue-800 mt-8 pt-6 text-center">
  <p>&copy; 2026 ICISA. All rights reserved.</p>
  <p className="text-sm mt-2">
    Designed and Developed by{" "}
    <a 
      href="https://www.linkedin.com/in/iamarwaz/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-yellow-500 hover:text-yellow-600 underline"
    >
      Arwaz Khan
    </a>,{" "}
    <a 
      href="https://www.linkedin.com/in/harsh-singh-b2468a271/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-yellow-500 hover:text-yellow-600 underline"
    >
      Harsh Aryan Singh
    </a>, and{" "}
    <a 
      href="https://www.linkedin.com/in/amitanshu-lal-611248244/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-yellow-500 hover:text-yellow-600 underline"
    >
      Amitanshu Lal
    </a>
  </p>
  <p className="text-sm">Department of Computer Science and Engineering</p>
  <p className="text-sm">National Institute of Technology, Delhi</p>
</div>
      </div>
    </footer>
  )
}
