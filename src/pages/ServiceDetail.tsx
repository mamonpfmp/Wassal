import { useParams, Link } from 'react-router-dom';
import { services, categories, WHATSAPP_NUMBER } from '../data/services';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">🔍</div>
        <h2 className="text-white font-bold text-xl mb-2">الخدمة غير موجودة</h2>
        <Link to="/services" className="text-wassal-orange hover:underline">العودة للخدمات</Link>
      </div>
    );
  }

  const category = categories.find(c => c.id === service.categoryId);
  const related = services.filter(s => s.categoryId === service.categoryId && s.id !== service.id).slice(0, 3);

  const whatsappMsg = encodeURIComponent(`مرحباً، أريد الاستفسار عن خدمة: ${service.title}\n\nالسعر: ${service.price.toLocaleString()} ${service.currency}`);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-white">الرئيسية</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-white">الخدمات</Link>
          {category && (
            <>
              <span>/</span>
              <Link to={`/services/${category.id}`} className="hover:text-white">{category.name}</Link>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-white mb-4 leading-relaxed">{service.title}</h1>

            {/* Provider */}
            <div className="flex items-center gap-3 mb-6 p-4 bg-[#1a1030] rounded-xl border border-white/5">
              <span className="text-3xl">{service.providerAvatar}</span>
              <div>
                <div className="text-white font-bold text-sm">{service.provider}</div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xs">{'★'.repeat(Math.floor(service.rating))}</span>
                  <span className="text-gray-400 text-xs">{service.rating} ({service.reviewCount} تقييم)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-white font-bold text-lg mb-3">وصف الخدمة</h2>
              <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {service.tags.map(tag => (
                <span key={tag} className="bg-wassal-purple/20 text-wassal-violet text-xs px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1030] rounded-2xl p-6 border border-white/5 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-black gradient-text mb-1">{service.price.toLocaleString()} {service.currency}</div>
                <div className="text-gray-500 text-xs">السعر يشمل الخدمة كاملة</div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-gray-400">⏱️ مدة التسليم</span>
                  <span className="text-white font-medium">{service.deliveryDays} {service.deliveryDays > 10 ? 'يوم' : 'أيام'}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-gray-400">⭐ التقييم</span>
                  <span className="text-white font-medium">{service.rating} / 5</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-400">📂 التصنيف</span>
                  <span className="text-white font-medium">{category?.name}</span>
                </div>
              </div>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                 target="_blank" rel="noopener noreferrer"
                 className="block w-full gradient-bg text-white text-center py-3.5 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg shadow-wassal-orange/20 mb-3">
                اطلب الخدمة عبر واتساب 💬
              </a>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً، عندي استفسار عن خدمة: ' + service.title)}`}
                 target="_blank" rel="noopener noreferrer"
                 className="block w-full bg-white/5 border border-white/10 text-white text-center py-3 rounded-xl font-medium text-sm hover:bg-white/10 transition-colors">
                استفسار قبل الطلب
              </a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-black text-white mb-6">خدمات مشابهة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(s => (
                <Link key={s.id} to={`/service/${s.id}`}
                  className="bg-[#1a1030] rounded-2xl p-4 border border-white/5 card-glow transition-all hover:-translate-y-1 group block">
                  <h3 className="text-white font-bold text-sm mb-2 group-hover:text-wassal-orange transition-colors line-clamp-2">{s.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{s.provider}</span>
                    <span className="text-wassal-orange text-xs font-bold">{s.price.toLocaleString()} {s.currency}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
