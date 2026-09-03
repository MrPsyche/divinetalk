import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'light', // 'light' (ivory/white background) or 'dark' (teal/obsidian background)
  className = '',
}) {
  const isDark = theme === 'dark';

  return (
    <div className={`space-y-4 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className={`inline-block text-xs uppercase tracking-[0.25em] font-semibold ${
          isDark ? 'text-gold-400' : 'text-gold-600'
        }`}>
          {badge}
        </span>
      )}

      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-[1.2] tracking-tight ${
          isDark ? 'text-ivory-50' : 'text-sacred-950'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`text-base sm:text-lg font-normal leading-relaxed pt-1 ${
          isDark ? 'text-ivory-200/80' : 'text-sacred-800/80'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
