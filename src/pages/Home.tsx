import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { categories, services, WHATSAPP_NUMBER } from '../data/services';

export default function Home() {
  const featuredServices = services.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="hero-glow absolute inset-0" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-wassal-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-wassal-purple/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-xs">منصة يمنية للتسويق الرقمي</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="gradient-text">وَصَّال</span>
              <br />
              <span className="text-white">وصّل رسالتك للعالم</span>
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              منصة تجمع بين أفضل مقدمي خدمات التسويق الرقمي وأصحاب الأعمال.
              حسّن ظهورك، زد مبيعاتك، وابنِ علامتك التجارية.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="gradient-bg text-white px-8 py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-wassal-orange/20">
                تصفح الخدمات
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً، أريد الاستفسار عن خدمات التسويق الرقمي')}`}
                 target="_blank" rel="noopener noreferrer"
                 className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-white/10 transition-colors">
                تواصل معنا 💬
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg mx-auto">
              <div>
                <div className="text-2xl sm:text-3xl font-black gradient-text">150+</div>
                <div className="text-gray-500 text-xs mt-1">خدمة متاحة</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black gradient-text">50+</div>
                <div className="text-gray-500 text-xs mt-1">مسوّق محترف</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black gradient-text">500+</div>
                <div className="text-gray-500 text-xs mt-1">عميل سعيد</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">تصنيفات التسويق الرقمي</h2>
            <p className="text-gray-400">اختر التصنيف المناسب لاحتياجاتك</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map(cat => (
              <Link key={cat.id} to={`/services/${cat.id}`}
                className="bg-[#1a1030] rounded-2xl p-5 border border-white/5 card-glow transition-all duration-300 hover:-translate-y-1 hover:border-wassal-orange/20 text-center group">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="text-white text-sm font-bold mb-1 group-hover:text-wassal-orange transition-colors">{cat.name}</h3>
                <p className="text-gray-500 text-xs">{cat.serviceCount} خدمة</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 sm:py-20 bg-[#0a0614]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">خدمات مميزة</h2>
              <p className="text-gray-400 text-sm">أحدث الخدمات من مسوّقين محترفين</p>
            </div>
            <Link to="/services" className="text-wassal-orange text-sm font-medium hover:underline hidden sm:block">
              عرض الكل ←
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to="/services" className="text-wassal-orange font-medium">عرض جميع الخدمات ←</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">كيف يعمل وَصَّال؟</h2>
            <p className="text-gray-400">ثلاث خطوات بسيطة للبدء</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: '🔍', title: 'ابحث عن الخدمة', desc: 'تصفح التصنيفات واختر الخدمة التسويقية المناسبة لمشروعك' },
              { step: '02', icon: '💬', title: 'تواصل مع المسوّق', desc: 'تواصل مباشرة عبر واتساب لمناقشة التفاصيل والاتفاق على الخدمة' },
              { step: '03', icon: '🚀', title: 'استلم النتائج', desc: 'احصل على خدمة احترافية وشاهد نمو مشروعك الرقمي' },
            ].map(item => (
              <div key={item.step} className="relative bg-[#1a1030] rounded-2xl p-8 border border-white/5 text-center">
                <div className="absolute -top-4 right-6 bg-gradient-to-r from-wassal-orange to-wassal-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.step}
                </div>
                <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="gradient-bg rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">جاهز لتطوير تسويقك الرقمي؟</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                انضم لمنصة وَصَّال واستفد من خدمات تسويقية احترافية بأسعار مناسبة
              </p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً، أريد معرفة المزيد عن خدمات وَصَّال')}`}
                 target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-white text-wassal-purple font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                تواصل معنا الآن 🚀
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp float */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
         className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
         title="تواصل عبر واتساب">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.339 0-4.508-.794-6.24-2.128l-.435-.344-3.175 1.064 1.064-3.175-.344-.435A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </div>
  );
}
