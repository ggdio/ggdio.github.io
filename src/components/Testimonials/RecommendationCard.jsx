import { useState } from 'react';

function getInitials(name) {
  if (!name) return '?';
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name[0].toUpperCase();
}

export function RecommendationCard({ recommendation }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="glass p-6 rounded-2xl break-inside-avoid mb-6 relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-app-glass to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <svg className="w-8 h-8 text-brand/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-app-text-muted italic mb-6 leading-relaxed">"{recommendation.feedback}"</p>
        
        <div className="flex items-center gap-4">
          {(!recommendation.avatarUrl || imageError) ? (
            <div className="w-12 h-12 rounded-full border border-app-border bg-brand/20 flex items-center justify-center text-brand-light font-display font-semibold">
              {getInitials(recommendation.name)}
            </div>
          ) : (
            <img 
              src={recommendation.avatarUrl} 
              alt={recommendation.name} 
              className="w-12 h-12 rounded-full border border-app-border object-cover"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          )}
          <div>
            <h4 className="font-display font-semibold text-app-text">{recommendation.name}</h4>
            <p className="text-sm text-brand-light">{recommendation.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
