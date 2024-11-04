// src/App.jsx
import { LanguageProvider } from './contexts/LanguageContext';
import { Outlet } from 'react-router-dom';
import Header from  './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;