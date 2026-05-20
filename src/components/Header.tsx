import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F0A1A]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/wassal-logo-200.webp" alt="وَصَّال كوم" className="w-11 h-11 rounded-xl object-contain" />
            <div>
              <span className="text-lg font-bold gradient-text">وَصَّال</span>
              <span className="text-xs text-gray-400 block -mt-1">للتسويق الرقمي</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">الرئيسية</Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">الخدمات</Link>
            <a href="#categories" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">التصنيفات</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">كيف يعمل</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/services" className="gradient-bg text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              تصفح الخدمات
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-300 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <nav className="flex flex-col gap-3">
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white px-2 py-2">الرئيسية</Link>
              <Link to="/services" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white px-2 py-2">الخدمات</Link>
              <a href="#categories" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white px-2 py-2">التصنيفات</a>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white px-2 py-2">كيف يعمل</a>
              <Link to="/services" onClick={() => setMenuOpen(false)} className="gradient-bg text-white px-5 py-2 rounded-lg text-sm font-medium text-center mt-2">
                تصفح الخدمات
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
