import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { language } = useLanguage();

  const navigation = [
    {
      name: language === 'ar' ? 'لوحة التحكم' : 'Dashboard',
      href: '/admin',
      icon: '📊'
    },
    {
      name: language === 'ar' ? 'المشاريع' : 'Projects',
      href: '/admin/projects',
      icon: '🚀'
    },
    {
      name: language === 'ar' ? 'الأقسام' : 'Departments',
      href: '/admin/departments',
      icon: '🏢'
    },
    {
      name: language === 'ar' ? 'المحتوى' : 'Content',
      href: '/admin/content',
      icon: '📝'
    }
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between h-16 px-4 bg-white">
        <img
          className="h-8 w-auto"
          src="/src/assets/pioneers__logo.png"
          alt="Pioneers"
        />
        <button
          className="lg:hidden text-gray-500 hover:text-gray-600"
          onClick={onClose}
        >
          <span className="sr-only">Close sidebar</span>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => window.innerWidth < 1024 && onClose()}
              className={({ isActive }) =>
                `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-brand-orange text-white'
                    : 'text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange'
                }`
              }
              end={item.href === '/admin'}
            >
              <span className="text-xl mr-3">{item.icon}</span>
              <span className={`${language === 'ar' ? 'font-arabic' : ''} flex-1`}>
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40"
                onClick={onClose}
              />
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50"
              >
                {sidebarContent}
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 bg-white border-r border-gray-200 fixed inset-y-0">
        {sidebarContent}
      </div>
      {/* Desktop sidebar spacer */}
      <div className="hidden lg:block w-64 flex-shrink-0" />
    </>
  );
};

export default Sidebar;
