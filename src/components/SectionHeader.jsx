import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'light', // 'light' (ivory background) or 'dark' (teal/obsidian background)
  className = '',
}) {
  const isDark = theme === 'dark';

  return (
    <div className={`space-y-4 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
          isDark 
            ? 'bg-gold-500/10 text-gold-300 border border-gold-500/30' 
            : 'bg-sacred-600/10 text-sacred-700 border border-sacred-600/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl leading-[1.15] font-normal tracking-tight ${
          isDark ? 'text-ivory-50' : 'text-sacred-950'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-base sm:text-lg md:text-xl font-light leading-relaxed ${
          isDark ? 'text-ivory-200/80' : 'text-sacred-800/80'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
