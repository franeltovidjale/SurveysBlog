// src/views/About.jsx

import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { translations } = useLanguage();
  const { about } = translations;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {about.title}
        </h1>
        <p className="text-xl text-gray-600">
          {about.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            {about.mission.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {about.mission.text}
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">
            {about.values.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {about.values.items.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            {about.team.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {about.team.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;