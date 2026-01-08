import React from 'react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all p-2 dark:hover:text-indigo-400"
  >
    {icon}
  </a>
);
