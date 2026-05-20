import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { categories, services } from '../data/services';

export default function Services() {
  const { categorySlug } = useParams();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(categorySlug || 'all');

  const filtered = useMemo(() => {
    let result = services;
    if (activeCategory !== 'all') {
      result = result.filter(s => s.categoryId === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, search]);

  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
            {currentCategory ? currentCategory.name : 'جميع خدمات التسويق الرقمي'}
          </h1>
          <p className="text-gray-400 text-sm">
            {currentCategory ? currentCategory.description : 'تصفح جميع الخدمات التسويقية المتاحة'}
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="ابحث عن خدمة..."
              className="w-full bg-[#1a1030] border border-white/10 rounded-xl px-4 py-3 pr-11 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-wassal-orange/50 transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'gradient-bg text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            الكل
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'gradient-bg text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <>
            <p className="text-gray-500 text-xs mb-4">{filtered.length} خدمة</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(s => <ServiceCard key={s.id} service={s} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">😔</div>
            <h3 className="text-white font-bold text-lg mb-2">لا توجد نتائج</h3>
            <p className="text-gray-400 text-sm">جرب البحث بكلمات مختلفة أو اختر تصنيف آخر</p>
          </div>
        )}
      </div>
    </div>
  );
}
