


// src/views/Home.jsx
import feedbackImage from '../assets/images/feedback.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { language, translations } = useLanguage();
  const { home } = translations;

   const articles = {
  
    en: [
      {
        id: 1,
        title: "How to Earn with Surveys",
        excerpt: "Discover the best platforms and maximize your earnings with our expert advice.",
        date: "Nov 3, 2024",
        category: "Guides"
      },
      {
        id: 2,
        title: "Top 10 Reliable Survey Sites",
        excerpt: "Our selection of the best survey sites verified and approved by our team.",
        date: "Nov 2, 2024",
        category: "Rankings"
      },
      {
        id: 3,
        title: "Beginner's Guide",
        excerpt: "Everything you need to know to start and succeed with paid surveys.",
        date: "Nov 1, 2024",
        category: "Tutorials"
      },
      {
        id: 4,
        title: "Maximize Your Monthly Earnings",
        excerpt: "Strategies and tips to optimize your income with online surveys.",
        date: "Oct 31, 2024",
        category: "Strategies"
      },
      {
        id: 5,
        title: "Common Mistakes to Avoid",
        excerpt: "Common pitfalls and how to avoid them to succeed with surveys.",
        date: "Oct 30, 2024",
        category: "Tips"
      },
      {
        id: 6,
        title: "Mobile Surveys",
        excerpt: "How to take advantage of surveys even on the go with your smartphone.",
        date: "Oct 29, 2024",
        category: "Mobile"
      },
      {
        id: 7,
        title: "Platform Comparison",
        excerpt: "Detailed analysis of the best paid survey platforms.",
        date: "Oct 28, 2024",
        category: "Analysis"
      },
      {
        id: 8,
        title: "Optimize Your Profile",
        excerpt: "Tips for creating an attractive profile and receiving more surveys.",
        date: "Oct 27, 2024",
        category: "Tips"
      },
      {
        id: 9,
        title: "International Surveys",
        excerpt: "How to participate in surveys from different countries and increase your earnings.",
        date: "Oct 26, 2024",
        category: "International"
      },
      {
        id: 10,
        title: "Effective Time Management",
        excerpt: "Organization and planning to optimize your survey participation.",
        date: "Oct 25, 2024",
        category: "Productivity"
      },
      {
        id: 11,
        title: "Hidden Bonuses",
        excerpt: "Discover unknown opportunities to earn more with surveys.",
        date: "Oct 24, 2024",
        category: "Tips"
      },
      {
        id: 12,
        title: "Success Stories",
        excerpt: "Inspiring stories of people succeeding with online surveys.",
        date: "Oct 23, 2024",
        category: "Success Stories"
      }
    ],
      fr: [
      {
        id: 1,
        title: "Comment gagner avec les sondages",
        excerpt: "Découvrez les meilleures plateformes et maximisez vos gains avec nos conseils d'experts.",
        date: "3 Nov 2024",
        category: "Guides"
      },
      {
        id: 2,
        title: "Top 10 des sites fiables",
        excerpt: "Notre sélection des meilleurs sites de sondages vérifiés et approuvés par notre équipe.",
        date: "2 Nov 2024",
        category: "Classements"
      },
      {
        id: 3,
        title: "Guide du débutant",
        excerpt: "Tout ce que vous devez savoir pour commencer et réussir dans les sondages rémunérés.",
        date: "1 Nov 2024",
        category: "Tutoriels"
      },
      {
        id: 4,
        title: "Maximiser ses gains mensuels",
        excerpt: "Stratégies et astuces pour optimiser vos revenus avec les sondages en ligne.",
        date: "31 Oct 2024",
        category: "Strategies"
      },
      {
        id: 5,
        title: "Les erreurs à éviter",
        excerpt: "Les pièges courants et comment les éviter pour mieux réussir vos sondages.",
        date: "30 Oct 2024",
        category: "Conseils"
      },
      {
        id: 6,
        title: "Sondages sur mobile",
        excerpt: "Comment profiter des sondages même en déplacement avec votre smartphone.",
        date: "29 Oct 2024",
        category: "Mobile"
      },
      {
        id: 7,
        title: "Comparatif des plateformes",
        excerpt: "Analyse détaillée des meilleures plateformes de sondages rémunérés.",
        date: "28 Oct 2024",
        category: "Analyses"
      },
      {
        id: 8,
        title: "Optimiser son profil",
        excerpt: "Conseils pour créer un profil attractif et recevoir plus de sondages.",
        date: "27 Oct 2024",
        category: "Conseils"
      },
      {
        id: 9,
        title: "Sondages internationaux",
        excerpt: "Comment participer à des sondages dans différents pays et augmenter ses gains.",
        date: "26 Oct 2024",
        category: "International"
      },
      {
        id: 10,
        title: "Gérer son temps efficacement",
        excerpt: "Organisation et planification pour optimiser sa participation aux sondages.",
        date: "25 Oct 2024",
        category: "Productivite"
      },
      {
        id: 11,
        title: "Les bonus cachés",
        excerpt: "Découvrez les opportunités méconnues pour gagner plus avec les sondages.",
        date: "24 Oct 2024",
        category: "Astuces"
      },
      {
        id: 12,
        title: "Témoignages de succès",
        excerpt: "Histoires inspirantes de personnes qui réussissent avec les sondages en ligne.",
        date: "23 Oct 2024",
        category: "success"
      }
    ]
  };
  

  // Sélectionner les articles selon la langue actuelle
  const currentArticles = articles[language];

  return (
    <div>
      {/* Section Hero */}
      <div className="relative h-[400px] mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-purple-800">
          <img 
            src={feedbackImage} 
            alt={home.welcome} 
            className="w-full h-full object-cover mix-blend-overlay" 
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {home.welcome}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl">
              {home.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Section Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {home.latestArticles}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full">
                    {home.categories[article.category.toLowerCase()]}
                   
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {article.date}
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    {home.readMore} →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;