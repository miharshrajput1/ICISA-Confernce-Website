import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-[#2e3192] text-white">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex w-full justify-between">
          <li className="py-6 px-4 hover:bg-blue-800 transition-colors">
            <Link href="/">HOME</Link>
          </li>
          <li className="py-6 px-4 hover:bg-blue-800 transition-colors">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="py-6 px-4 hover:bg-blue-800 transition-colors">
            <Link href="/registration">REGISTRATION</Link>
          </li>
          <li className="py-6 px-4 hover:bg-blue-800 transition-colors">
            <Link href="/submission">SUBMISSION</Link>
          </li>
          <li className="py-6 px-4 hover:bg-blue-800 transition-colors">
            <Link href="/tracks">TRACKS</Link>
          </li>
          <li className="py-6 px-4 hover:bg-blue-800 transition-colors">
            <Link href="/speakers">SPEAKERS</Link>
          </li>
          <li className="py-6 px-4 hover:bg-blue-800 transition-colors">
            <Link href="/committees">COMMITTEES</Link>
          </li>
          <li className="py-6 px-4 hover:bg-blue-800 transition-colors">
            <Link href="/supporter">SUPPORTER</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
