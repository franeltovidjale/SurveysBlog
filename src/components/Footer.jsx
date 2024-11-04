// src/components/Footer.jsx
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { translations } = useLanguage();
  const { footer } = translations;

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />,
      href: '#'
    },
    {
      name: 'Twitter',
      icon: <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />,
      href: '#'
    }
  ];

  const quickLinks = [
    { label: footer.bestSites, href: '#' },
    { label: footer.beginnerGuide, href: '#' },
    { label: footer.tips, href: '#' },
    { label: footer.contact, href: '#' }
  ];

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{footer.about}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {footer.aboutText}
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{footer.newsletter.title}</h3>
            <p className="text-gray-300 text-sm">
              {footer.newsletter.text}
            </p>
            <form className="space-y-2">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder={footer.newsletter.placeholder}
                  className="w-full px-4 py-2 rounded text-gray-900 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {footer.newsletter.subscribe}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm">
          <p className="text-gray-300">
            &copy; 2024 SurveysBlog. {footer.legal.rights}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <a href="#" className="hover:text-white transition-colors">
              {footer.legal.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {footer.legal.terms}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {footer.legal.legal}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;