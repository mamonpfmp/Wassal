import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../data/services';

export default function Footer() {
  return (
    <footer className="bg-[#0a0614] border-t border-white/5 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/wassal-logo-200.webp" alt="وَصَّال كوم" className="w-11 h-11 rounded-xl object-contain" />
              <span className="text-xl font-bold gradient-text">وَصَّال كوم</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              منصة يمنية رائدة للتسويق الرقمي تجمع بين مقدمي خدمات التسويق المحترفين وأصحاب الأعمال.
              وصّل رسالتك للعالم!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-wassal-orange transition-colors">الرئيسية</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-wassal-orange transition-colors">جميع الخدمات</Link></li>
              <li><a href="#categories" className="text-gray-400 hover:text-wassal-orange transition-colors">التصنيفات</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-wassal-orange transition-colors">كيف يعمل</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2">
                  <span>📱</span> واتساب
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-2"><span>📍</span> صنعاء، اليمن</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} وَصَّال كوم — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
