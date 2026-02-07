'use client';

import { Logo } from '@/shared/ui/logo/Logo';
import { Navigation } from './Navigation';
import { UserActions } from './UserActions';
import { useHeaderScroll } from '../lib/useHeaderScroll'; // 분리한 훅 가져오기

export const Header = () => {
  const isScrolled = useHeaderScroll(80);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <div className="flex items-center mb-1">
            <Logo />
          </div>
          <Navigation />
        </div>
        <UserActions />
      </div>
    </header>
  );
};
