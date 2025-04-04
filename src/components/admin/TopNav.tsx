import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../hooks/useLanguage';

interface TopNavProps {
  onMenuClick: () => void;
}

const TopNav = ({ onMenuClick }: TopNavProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center h-full px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          onClick={onMenuClick}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="flex-1 flex items-center">
          <h1 className={`text-2xl font-semibold text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'لوحة التحكم' : 'Admin Dashboard'}
          </h1>
        </div>

        <div className="ml-4 flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-orange hover:bg-brand-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange transition-colors"
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
            >
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-brand-orange text-white flex items-center justify-center">
                A
              </div>
            </button>

            {showDropdown && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {language === 'ar' ? 'تسجيل الخروج' : 'Sign out'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
