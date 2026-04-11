export function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-medium transition-colors rounded-full cursor-default bg-accent-violet/10 text-accent-violet ring-1 ring-inset ring-accent-violet/20 font-display hover:bg-accent-violet/20">
      {children}
    </span>
  );
}
