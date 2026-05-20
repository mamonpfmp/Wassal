import { Link } from 'react-router-dom';
import type { Service } from '../data/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link to={`/service/${service.id}`}
      className="bg-[#1a1030] rounded-2xl overflow-hidden border border-white/5 card-glow transition-all duration-300 hover:-translate-y-1 group block">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img src={service.image} alt={service.title} loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1030] via-transparent to-transparent" />
        <div className="absolute bottom-3 right-3 bg-wassal-purple/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
          {service.price.toLocaleString()} {service.currency}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-bold text-sm leading-relaxed mb-3 line-clamp-2 group-hover:text-wassal-orange transition-colors">
          {service.title}
        </h3>

        {/* Provider */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{service.providerAvatar}</span>
            <span className="text-gray-400 text-xs">{service.provider}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-gray-300 text-xs">{service.rating}</span>
            <span className="text-gray-500 text-xs">({service.reviewCount})</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {service.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
