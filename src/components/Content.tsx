import { ReactNode } from 'react';

interface ContentRootProps {
  children: ReactNode;
  className?: string;
}

function ContentRoot({ children, className = '' }: ContentRootProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[url('../assets/bg-stars.svg')] ${className}`}
    >
      {children}
    </div>
  );
}

function StripesRight() {
  return (
    <div className="bg-stripes-size  absolute right-0 top-0 h-full w-2 bg-stripes" />
  );
}

function StripesLeft() {
  return (
    <div className="bg-stripes-size absolute left-0 top-0 h-full w-2 bg-stripes" />
  );
}

function Galaxy() {
  return (
    <div className="absolute right-0 top-1/2 h-[290px] w-[524px] -translate-y-1/2 translate-x-1/2 rounded-full bg-momentsy-beige blur-[196px]" />
  );
}

export const Content = {
  Root: ContentRoot,
  StripesLeft,
  StripesRight,
  Galaxy,
};
