"use client";
import { useState, Fragment } from "react";
import { KaeyrosAnalyticsLogoSvgIcon } from "./svg";

export default function ComingSoon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 p-6">
      <div className="bg-white bg-opacity-90 rounded-xl shadow-xl max-w-md w-full p-10 text-center relative">
        <div className="mb-6 flex justify-center">
          <KaeyrosAnalyticsLogoSvgIcon />
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Coming Soon</h1>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">🚧</h1>
        <p className="text-lg text-gray-700 mb-8">
          We're working hard to bring something amazing. Stay tuned!
        </p>
        <div className="flex justify-center space-x-4">
          {/* <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Notify Me
          </a> */}

          {/* Popover trigger */}
          <button
            type="button"
            className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-600 hover:bg-gray-100 transition focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            Learn More
          </button>
        </div>

        {/* Popover content */}
        {isOpen && (
          <div
            className="absolute z-10 top-full mt-3 left-1/2 transform -translate-x-1/2 w-72 bg-white rounded-lg shadow-lg border border-gray-300 p-5 text-left"
            onClick={() => setIsOpen(false)}
          >
            <h2 className="font-semibold text-lg mb-2">Site Under Construction</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our site is currently being built. The remaining pages and features will be available
              soon. Thanks for your patience and stay tuned for updates!
            </p>
            <button
              type="button"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


// import { KaeyrosAnalyticsLogoSvgIcon } from "./svg";

// export default function ComingSoon() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 p-6">
//       <div className="bg-white bg-opacity-90 rounded-xl shadow-xl max-w-md w-full p-10 text-center">
//         <div className="mb-6 flex justify-center">
//         <KaeyrosAnalyticsLogoSvgIcon />
//         </div>
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-4">🚧 Coming Soon</h1>
//         <p className="text-lg text-gray-700 mb-8">
//           We're working hard to bring something amazing. Stay tuned!
//         </p>
//         <div className="flex justify-center space-x-4">
//           <a
//             href="#"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Notify Me
//           </a>
//           <a
//             href="#"
//             className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-600 hover:bg-gray-100 transition"
//           >
//             Learn More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
