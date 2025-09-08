import React from 'react'
import { WhoAreWe } from './custom/svg'
import Image from 'next/image'
import SmallSectionHeader from './custom/SmallSectionHeader';

const data = [
  {
    id: 1, 
    number: "20",
    label: "Entreprises partenaires",
    image: "/actuality/blog1.jpg",
  },
  {
    id: 2, 
    number: "10+",
    label: "Solutions digitales",
    image: "/actuality/blog2.jpg",
  },
  {
    id: 3, 
    number: "7",
    label: "Pays couverts",
    image: "/actuality/blog3.png",
  },
    {
    id: 4, 
    number: "7",
    label: "Pays couverts",
    image: "/actuality/blog3.png",
  },
];

const ActuallitySection = () => {
  return (
        <section id="products" className="py-16 bg-white w-full">
            <div className="px-4 sm:px-6 lg:px-8 ">
                <div className="text-center mb-[5rem]">
                    
                    <SmallSectionHeader label='Blog' />
                    <h2 className="text-3xl text-[#0F2A96] lg:text-4xl font-bold text-primary-900 mb-4">
                        Nos actualités
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Découvrez nos analyses, insights et bonnes pratiques autour de la data, l’IA et la transformation digitale. Restez informé et inspirez vos décisions grâce à nos contenus experts et accessibles.
                    </p>
                </div>

                <div className=' w-full'>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 items-end gap-4 sm:gap-6 md:gap-8">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white overflow-hidden hover:shadow-2xl transition flex flex-col"
                            >
                                {/* Top Image */}
                                <div className="relative w-full h-[200px]">
                                    <Image
                                        src={item.image}
                                        alt={item.label}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Bottom Content */}
                                <div className="flex flex-col gap-[1.5rem] p-6 text-left flex-grow">
                                    <div className=''>
                                        <p className="text-sm text-gray-500 mb-2">Rapport Juin 2025</p>
                                    </div>
                                    <div className='flex flex-col gap-[5rem]'>
                                        <p className="text-base text-gray-800 leading-relaxed mb-4">
                                            Nos clients réalisent des percées, innovent plus rapidement et réduisent leurs coûts.
                                            Vous pouvez le faire aussi.
                                        </p>
                                        <a
                                            href="#"
                                            className="mt-auto text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                                        >
                                            Lire l’article au complet →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ActuallitySection