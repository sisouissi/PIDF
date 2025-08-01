import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { SectionId } from './types';
import { AbbreviationsModal } from './components/AbbreviationsModal';
import { ReferencesModal } from './components/ReferencesModal';

// Composant de connexion
const LoginForm: React.FC<{ onLogin: (success: boolean) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Identifiants (vous pouvez les changer ici ou utiliser des variables d'environnement)
    const correctUsername = 'admin';
    const correctPassword = 'pneumo2025';
    
    if (username === correctUsername && password === correctPassword) {
      // Stocker l'authentification dans le sessionStorage
      sessionStorage.setItem('authenticated', 'true');
      onLogin(true);
    } else {
      setError('Identifiants incorrects');
      onLogin(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Accès sécurisé
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="username"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              autoComplete="current-password"
            />
          </div>
          
          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('welcome');
  const [isAbbreviationsModalOpen, setIsAbbreviationsModalOpen] = useState(false);
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Vérifier l'authentification au chargement de l'application
  useEffect(() => {
    const authenticated = sessionStorage.getItem('authenticated');
    setIsAuthenticated(authenticated === 'true');
  }, []);

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('authenticated');
    setIsAuthenticated(false);
  };

  // Si l'utilisateur n'est pas authentifié, afficher le formulaire de connexion
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  // Si l'utilisateur est authentifié, afficher l'application normale
  return (
    <>
      <div className="h-screen bg-slate-100 font-sans p-4 flex gap-4">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          onOpenAbbreviations={() => setIsAbbreviationsModalOpen(true)}
          onOpenReferences={() => setIsReferencesModalOpen(true)}
        />
        <ContentArea activeSection={activeSection} />
        
        {/* Bouton de déconnexion discret */}
        <button
          onClick={handleLogout}
          className="fixed top-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors z-10"
          title="Se déconnecter"
        >
          Déconnexion
        </button>
      </div>

      {isAbbreviationsModalOpen && <AbbreviationsModal onClose={() => setIsAbbreviationsModalOpen(false)} />}
      {isReferencesModalOpen && <ReferencesModal onClose={() => setIsReferencesModalOpen(false)} />}
    </>
  );
};

export default App;