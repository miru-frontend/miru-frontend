import { FooterNav } from './FooterNav';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <FooterNav />
          <p className="text-xs font-bold text-gray-400">
            © 2026 miru. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
