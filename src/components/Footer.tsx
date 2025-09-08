import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'
import { KaeyrosAnalyticsLogoSvgIcon } from './custom/svg';

// Mock components since they're not available


const FacebookSvgIcon = () => <div className="w-6 h-6 bg-blue-600 rounded"></div>;

export function Footer() {
  return (
    <footer className="bg-primary-900 bg-[#DFE3F45E] py-8 md:py-16">
      <div className="container flex flex-col gap-5 md:gap-8 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - CTA */}
        <div className='flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-4 md:gap-0'>
          <div className="text-left">
            <h1 className='text-black font-bold text-lg md:text-xl lg:text-[24px]'>
              We provide data driven solutions!
            </h1>
          </div>
          <div className="w-full md:w-auto">
            <Button className='bg-[#FF5F00] px-4 py-3 md:px-[2rem] md:py-[1.5rem] cursor-pointer text-sm md:text-base w-fit md:w-auto'>
              Contactez-nous
            </Button>
          </div>
        </div>

        {/* Main Content Section */}
        <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-0'>
          
          {/* Left Section - Logo and Contact Info */}
          <div className='w-full lg:w-1/2 space-y-4 md:space-y-6'>
            <div className="flex justify-start">
              <div className="scale-125 md:scale-150 p-3 lg:scale-[1.75]">
                <KaeyrosAnalyticsLogoSvgIcon/>
              </div>
            </div>
            <div className="space-y-2 mt-5 text-left text-sm md:text-base">
              <h1 className="font-medium">CAMEROUN: Av du 27 Août Tsinga, Yaoundé</h1>
              <h2 className="font-medium">DEUTSCHLAND: Martin-Schmeißer Weg 10, 44227 Dortmund</h2>
              <h3 className="text-blue-600">info@kaeyros-analytics.de</h3>
            </div>
          </div>

          {/* Right Section - Links and Socials */}
          <div className="w-full lg:w-1/2 lg:mx-auto lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-sm md:text-base text-gray-700">
              
              {/* Navigation Links */}
              <div className="space-y-3 md:space-y-4 text-left">
                <h4 className="font-semibold text-gray-900 mb-2 md:hidden">Navigation</h4>
                <a href="#" className="hover:text-blue-900 block transition-colors">Produits</a>
                <a href="#" className="hover:text-blue-900 block transition-colors">Services</a>
                <a href="#" className="hover:text-blue-900 block transition-colors">Team</a>
                <a href="#" className="hover:text-blue-900 block transition-colors">À propos</a>
                <a href="#" className="hover:text-blue-900 block transition-colors">Blog</a>
                <a href="#" className="hover:text-blue-900 block transition-colors">Carrière</a>
              </div>

              {/* Social Links */}
              <div className="space-y-3 md:space-y-4 flex flex-col items-start md:items-start">
                <h4 className="font-semibold text-gray-900 mb-2 md:hidden">Suivez-nous</h4>
                <a href="#" className="flex items-center justify-start gap-3 hover:text-blue-900 transition-colors">
                  <span className="bg-blue-900 text-white w-7 h-7 flex items-center justify-center rounded text-xs font-semibold">
                    in
                  </span>
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center justify-start gap-3 hover:text-blue-900 transition-colors">
                  <span className="bg-blue-900 text-white w-7 h-7 flex items-center justify-center rounded text-xs font-semibold">
                    F
                  </span>
                  <span>Facebook</span>
                </a>
              </div>

              {/* Languages */}
              <div className="space-y-3 md:space-y-4 hidden md:block md:items-end">
                <h4 className="font-semibold text-gray-900 mb-2 md:hidden">Langues</h4>
                <a href="#" className="hover:text-blue-900 block transition-colors">Français</a>
                <a href="#" className="hover:text-blue-900 block transition-colors">Anglais</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-center md:justify-end gap-2 md:gap-4 items-center text-center md:text-end text-xs md:text-sm text-gray-600">
            {/* <p className="hover:text-gray-800 transition-colors">
              Informations Légales et Confidentialité
            </p> */}
            <span className="hidden md:inline text-gray-400">|</span>
            <p>Copyright 2024 Kaeyros Analytics All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// // src/components/footer.tsx
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { KaeyrosAnalyticsLogoSvgIcon } from './custom/svg'
// import { Settings } from 'lucide-react'
// import { FacebookSvgIcon } from './custom/CountrySvg'

// export function Footer() {
//   return (
//     <footer className="bg-primary-900 bg-[#DFE3F45E] py-8 md:py-16">
//       <div className="container flex flex-col gap-5 md:gap-8 mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Top Section - CTA */}
//         <div className='flex flex-col md:flex-row justify-between w-full items-center gap-4 md:gap-0'>
//           <div className="text-left">
//             <h1 className='text-black font-bold text-lg md:text-xl lg:text-[24px]'>
//               We provide data driven solutions!
//             </h1>
//           </div>
//           <div >
//             <Button className='bg-[#FF5F00] px-4 py-3 md:px-[2rem] md:py-[1.5rem] cursor-pointer text-sm md:text-base'>
//               Contactez-nous
//             </Button>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-0'>
          
//           {/* Left Section - Logo and Contact Info */}
//           <div className='w-full lg:w-1/2 space-y-4 md:space-y-6 '>
//             <div className="flex justify-start">
//               <div className="scale-125 md:scale-150 p-3 lg:scale-[1.75]">
//                 <KaeyrosAnalyticsLogoSvgIcon />
//               </div>
//             </div>
//             <div className="space-y-2 mt-5 text-left text-sm md:text-base">
//               <h1 className="font-medium">CAMEROUN: Av du 27 Août Tsinga, Yaoundé</h1>
//               <h2 className="font-medium">DEUTSCHLAND: Martin-Schmeißer Weg 10, 44227 Dortmund</h2>
//               <h3 className="text-blue-600">info@kaeyros-analytics.de</h3>
//             </div>
//           </div>

//           {/* Right Section - Links and Socials */}
//           <div className="w-full lg:w-1/2 lg:mx-auto lg:px-6">
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-sm md:text-base text-gray-700">
              
//               {/* Navigation Links */}
//               <div className="space-y-3 md:space-y-4 text-left">
//                 <h4 className="font-semibold text-gray-900 mb-2 md:hidden">Navigation</h4>
//                 <a href="#" className="hover:text-blue-900 block transition-colors">Produits</a>
//                 <a href="#" className="hover:text-blue-900 block transition-colors">Services</a>
//                 <a href="#" className="hover:text-blue-900 block transition-colors">Team</a>
//                 <a href="#" className="hover:text-blue-900 block transition-colors">À propos</a>
//                 <a href="#" className="hover:text-blue-900 block transition-colors">Blog</a>
//                 <a href="#" className="hover:text-blue-900 block transition-colors">Carrière</a>
//               </div>

//               {/* Social Links */}
//               <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
//                 <h4 className="font-semibold text-gray-900 mb-2 md:hidden">Suivez-nous</h4>
//                 <a href="#" className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-900 transition-colors">
//                   <span className="bg-blue-900 text-white w-7 h-7 flex items-center justify-center rounded text-xs font-semibold">
//                     in
//                   </span>
//                   <span>LinkedIn</span>
//                 </a>
//                 <a href="#" className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-900 transition-colors">
//                   <span className="bg-blue-900 text-white w-7 h-7 flex items-center justify-center rounded text-xs font-semibold">
//                     F
//                   </span>
//                   <span>Facebook</span>
//                 </a>
//               </div>

//               {/* Languages */}
//               <div className="space-y-3 md:space-y-4 hidden md:block md:items-end">
//                 <h4 className="font-semibold text-gray-900 mb-2 md:hidden">Langues</h4>
//                 <a href="#" className="hover:text-blue-900 block transition-colors">Français</a>
//                 <a href="#" className="hover:text-blue-900 block transition-colors">Anglais</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-6 md:pt-8 border-t border-gray-300">
//           <div className="flex flex-col md:flex-row justify-center md:justify-end gap-2 md:gap-4 items-center text-center md:text-end text-xs md:text-sm text-gray-600">
//             {/* <p className="hover:text-gray-800 transition-colors">
//               Informations Légales et Confidentialité
//             </p> */}
//             <span className="hidden md:inline text-gray-400">|</span>
//             <p>Copyright 2024 Kaeyros Analytics All Rights Reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// // src/components/footer.tsx
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { KaeyrosAnalyticsLogoSvgIcon } from './custom/svg'
// import { Settings } from 'lucide-react'
// import { FacebookSvgIcon } from './custom/CountrySvg'

// export function Footer() {
//   return (
//     <footer className="bg-primary-900 bg-[#DFE3F45E]  py-16">
//       <div className="container flex flex-col gap-5 mx-auto px-4 sm:px-6 lg:px-8 ">
//         <div className='flex justify-between w-full  items-center'>
//           <div>
//             <h1 className='text-black font-bold text-[24px]'>We provide data driven solutions!</h1>
//           </div>
//           <div>
//             <Button className='bg-[#3E52BC] px-[2rem] py-[1.5rem] cursor-pointer'>
//               Contactez-nous
//             </Button>
//           </div>
//         </div>
//         <div className=' flex flex-row justify-between'>
//           <div className='w-full'>
//             <div>
//               <KaeyrosAnalyticsLogoSvgIcon />
//             </div>
//             <div>
//               <h1>CAMEROUN: Av du 27 Août Tsinga, Yaoundé</h1>
//               <h2>DEUTSCHLAND: Martin-Schmeißer Weg  10, 44227 Dortmund </h2>
//               <h3>info@kaeyros-analytics.de</h3>
//             </div>
//           </div>
//           <div className="w-full mx-auto px-6">
//             <div className="grid grid-cols-3 gap-8 text-sm text-gray-700">
//               {/* Left column */}
//               <div className="space-y-4">
//                 <a href="#" className="hover:text-blue-900 block">Produits</a>
//                 <a href="#" className="hover:text-blue-900 block">Services</a>
//                 <a href="#" className="hover:text-blue-900 block">Team</a>
//                 <a href="#" className="hover:text-blue-900 block">À propos</a>
//                 <a href="#" className="hover:text-blue-900 block">Blog</a>
//                 <a href="#" className="hover:text-blue-900 block">Carrière</a>
//               </div>

//               {/* Middle column (socials) */}
//               <div className="space-y-4 flex flex-col items-start bg-">
//                 <a href="#" className="flex  items-center justify-between gap-3 hover:text-blue-900">
//                   <span className="bg-blue-900 text-white w-7 h-7 flex items-center justify-center rounded">
//                     in
//                   </span>
//                   <span>
//                     LinkedIn
//                   </span>
//                 </a>
//                 <a href="#" className=" flex items-center justify-between gap-3 hover:text-blue-900">
//                   <span className="bg-blue-900 text-white w-7 h-7 flex items-center justify-center rounded">
//                     F
//                   </span>
//                   <span>
//                     Facebook
//                   </span>
//                 </a>
//               </div>

//               {/* Right column (languages) */}
//               <div className="space-y-4 flex flex-col items-end">
//                 <a href="#" className="hover:text-blue-900 block">Français</a>
//                 <a href="#" className="hover:text-blue-900 block">Anglais</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 flex flex-col md:flex-row justify-end gap-2 items-center text-end">
//           <p>Informations Légales et Confidentialité</p> | <p>Copyright 2024 Kaeyros Analytics All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }