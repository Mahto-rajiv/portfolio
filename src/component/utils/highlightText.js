import React from 'react';

export const highlightText = (text, terms = []) => {
  if (!text || !terms || terms.length === 0) return text;
  const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(${terms.map(escape).join('|')})`, 'gi');
  return String(text)
    .split(pattern)
    .map((part, i) => {
      const isHit = terms.some((t) => new RegExp(`^${escape(t)}$`, 'i').test(part));
      return isHit
        ? React.createElement('strong', { key: i, className: 'font-semibold' }, part)
        : React.createElement('span', { key: i }, part);
    });
};
