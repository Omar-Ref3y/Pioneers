import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../hooks/useLanguage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const success = await login(username, password);
      if (success) {
        navigate('/admin');
      } else {
        setError(language === 'ar' ? 'بيانات الاعتماد غير صالحة' : 'Invalid credentials');
      }
    } catch (err) {
      setError(language === 'ar' ? 'حدث خطأ. حاول مرة اخرى' : 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <h2 className={`mt-6 text-center text-3xl font-extrabold text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'ar' ? 'تسجيل الدخول للوحة التحكم' : 'Sign in to Admin Dashboard'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                {language === 'ar' ? 'اسم المستخدم' : 'Username'}
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-brand-orange focus:border-brand-orange focus:z-10 sm:text-sm"
                placeholder={language === 'ar' ? 'اسم المستخدم' : 'Username'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                {language === 'ar' ? 'كلمة المرور' : 'Password'}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-brand-orange focus:border-brand-orange focus:z-10 sm:text-sm"
                placeholder={language === 'ar' ? 'كلمة المرور' : 'Password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-orange hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
            >
              {language === 'ar' ? 'تسجيل الدخول' : 'Sign in'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
