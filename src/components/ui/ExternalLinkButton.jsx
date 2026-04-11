import { ExternalLink } from 'lucide-react';

export function ExternalLinkButton({ href, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all bg-brand/90 rounded-lg hover:bg-brand hover:scale-105 hover:shadow-[0_0_15px_rgba(10,102,194,0.5)] active:scale-95 ${className}`}
    >
      {children}
      <ExternalLink size={16} />
    </a>
  );
}
