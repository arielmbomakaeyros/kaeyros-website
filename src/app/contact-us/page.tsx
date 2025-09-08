"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import {
  AddressSolutionSvg,
  EmailSolutionSvg,
  PhoneSolutionSvg,
} from "@/components/custom/SolutionSvg";
import CustomInputFields from "@/components/custom/CustomInputField";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/contacts/contact_hero_img.jpg')",
          // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Contactez-nous
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-1-500 gap-8 lg:gap-12">
            {/* Left Column - Contact Form and Info */}
            <div className="space-y-8 flex flex-col lg:flex-row lg:justify-between">
              {/* Contact Form */}
              <div className="bg-white p-4 sm:p-6 lg:p-8 w-full lg:w-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-gray-800 mb-4 lg:mb-6">
                  Prenez contact
                </h2>
                <p className="text-gray-600 text-base lg:text-[18px] mb-4 lg:mb-6">
                  Envoyez-nous un message et nous vous répondrons dans les plus
                  brefs délais.
                </p>

                <div className="space-y-4 lg:space-y-6 w-full">
                  <div>
                    <CustomInputFields
                      label="Email :"
                      name="email"
                      value="Kungang"
                    />
                  </div>

                  <div>
                    <CustomInputFields
                      label="Prénom :"
                      name="prenom"
                      value="Nij"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Votre message..."
                      required
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Soumettre
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 lg:space-y-6 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-0">
                {/* Phone */}
                <div className="flex flex-col w-full sm:w-auto lg:w-[300px] h-auto lg:h-[200px] text-center gap-3 justify-center items-center space-x-4 p-4 bg-[#FAFAFA] rounded-lg">
                  <div className="">
                    <PhoneSolutionSvg />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Numéro de téléphone
                    </h3>
                    <p className="text-gray-600">+237 694 669 174</p>
                    <p className="text-gray-600">+237 672 369 105</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col w-full sm:w-auto lg:w-[300px] h-auto lg:h-[200px] text-center gap-3 justify-center items-center space-x-4 p-4 bg-[#FAFAFA] rounded-lg">
                  <div className="">
                    <EmailSolutionSvg />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Adresse mail
                    </h3>
                    <p className="text-gray-600">contact@company.com</p>
                    <p className="text-gray-600">support@company.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col w-full sm:w-auto lg:w-[300px] h-auto lg:h-[200px] text-center gap-3 justify-center items-center space-x-4 p-4 bg-[#FAFAFA] rounded-lg">
                  <div className=" ">
                    <AddressSolutionSvg />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Adresse géographique
                    </h3>
                    <p className="text-gray-600">Av. de l'Art, Soa, Yaounde</p>
                    <p className="text-gray-600">Face au Campus Soa</p>
                    <p className="text-gray-600">University</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      {/* Right Column - Map */}
            <div className="w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3980.02026871201!2d11.5034!3d3.8847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scm!4v1694180836102!5m2!1sen!2scm"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
            </div>
    </div>
  );
};

export default ContactUsPage;
