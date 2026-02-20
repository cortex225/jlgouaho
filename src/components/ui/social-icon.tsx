import React from 'react';

interface SocialIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: React.ReactNode;
}

export const SocialIcon = React.forwardRef<HTMLAnchorElement, SocialIconProps>(
  ({ href, icon, ...props }, ref) => (
    <a 
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all p-2 dark:hover:text-indigo-400"
      {...props}
    >
      {icon}
    </a>
  )
);

SocialIcon.displayName = "SocialIcon";
