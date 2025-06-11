import Image from "next/image";

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-20">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#2e3192] mb-6">Workshop</h1>

      {/* Workshop Title and Speakers */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#ff5722]">Workshop: 01</h2>
        <h3 className="text-xl md:text-2xl font-bold text-[#ff5722] mt-2">
          Title: AR - VR and Robotics
        </h3>
        <p className="text-md mt-1 text-purple-800 font-medium">
        </p>
      </div>

      {/* Speaker Card */}
      <div className="border border-red-400 rounded-md p-4 flex flex-col items-center justify-center bg-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-1 text-center">
          {/* Optional: Speaker Name */}
        </h4>
        <p className="text-black text-2xl font-bold text-center">
          COMING SOON
        </p>
      </div>
    </div>
  );
}
