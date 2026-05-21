import { Product, stores } from '../lib/supabase';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const store = stores.find(s => s.id === product.storeId);

  return (
    <div className="bg-[#1a1030] rounded-2xl overflow-hidden border border-white/5 card-glow transition-all hover:-translate-y-1 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=400&q=80';
          }}
        />
        {/* Store badge */}
        {store && (
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm"
            style={{ backgroundColor: store.color + 'CC' }}
          >
            {store.icon} {store.name}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-bold text-sm mb-2 line-clamp-2 group-hover:text-wassal-orange transition-colors leading-relaxed">
          {product.name}
        </h3>

        <p className="text-gray-400 text-xs mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-wassal-orange font-black text-lg">
            {product.price.toLocaleString()} <span className="text-xs font-medium">{store?.currency}</span>
          </span>
          <span className="bg-white/5 text-gray-400 text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Visit store button */}
        {store && (
          <a
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full text-center py-2.5 rounded-xl text-sm font-bold transition-all border border-white/10 text-white/70 hover:text-white hover:border-wassal-orange/50 hover:bg-wassal-orange/10"
          >
            زيارة {store.name} ↗
          </a>
        )}
      </div>
    </div>
  );
}
