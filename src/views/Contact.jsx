
  // src/views/Contact.jsx

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";


  const Contact = () => {
    const { translations } = useLanguage();
    const { contact } = translations;
    const [formStatus, setFormStatus] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Ajoutez ici la logique d'envoi du formulaire
      setFormStatus('success');
    };
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {contact.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contact.form.name}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contact.form.email}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contact.form.subject}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {contact.form.message}
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {contact.form.send}
              </button>
              {formStatus && (
                <p className={`text-center ${formStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {contact.form[formStatus]}
                </p>
              )}
            </form>
          </div>
  
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-6">
              {contact.info.title}
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">{contact.info.email}</p>
                <p className="text-indigo-600">{contact.info.emailValue}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">{contact.info.hours}</p>
                <p className="text-gray-600">{contact.info.hoursValue}</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 italic">{contact.info.response}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;