import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useAllProducts } from '../hooks/useProducts';
import { stores } from '../lib/supabase';

export default function Products() {
  const { products, loading, error } = useAllProducts();
  const [search, setSearch] = useState('');
  const [activeStore, setActiveStore] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Get unique categories from loaded products
  const categories = useMemo(() => {
    const cats = new Set<string>();
    const filtered = activeStore === 'all' ? products : products.filter(p => p.storeId === activeStore);
    filtered.forEach(p => cats.add(p.category));
    return Array.from(cats);
  }, [products, activeStore]);

  const filtered = useMemo(() => {
    let result = products;
    if (activeStore !== 'all') {
      result = result.filter(p => p.storeId === activeStore);
    }
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [products, activeStore, activeCategory, search]);

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
            🛍️ المنتجات من متاجرنا الشريكة
          </h1>
          <p className="text-gray-400 text-sm">
            تصفح جميع المنتجات من ميرا شوب و HTH Online في مكان واحد
          </p>
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {stores.map(store => {
            const count = products.filter(p => p.storeId === store.id).length;
            return (
              <button
                key={store.id}
                onClick={() => {
                  setActiveStore(activeStore === store.id ? 'all' : store.id);
                  setActiveCategory('all');
                }}
                className={`p-5 rounded-2xl border text-right transition-all ${
                  activeStore === store.id
                    ? 'border-wassal-orange/50 bg-wassal-orange/10'
                    : 'border-white/5 bg-[#1a1030] hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{store.icon}</span>
                  <div>
                    <div className="text-white font-bold text-lg">{store.name}</div>
                    <div className="text-gray-400 text-xs">{count} منتج</div>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">{store.description}</p>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="ابحث عن منتج..."
              className="w-full bg-[#1a1030] border border-white/10 rounded-xl px-4 py-3 pr-11 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-wassal-orange/50 transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          </div>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
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
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'gradient-bg text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin text-4xl mb-4">⏳</div>
            <p className="text-gray-400">جاري تحميل المنتجات...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">⚠️</div>
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        ) : filtered.length > 0 ? (
          <>
            <p className="text-gray-500 text-xs mb-4">{filtered.length} منتج</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map(p => <ProductCard key={`${p.storeId}-${p.id}`} product={p} />)}
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
