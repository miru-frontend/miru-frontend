import Link from 'next/link';
import { Bell, Menu, User } from 'lucide-react';

export const UserActions = () => {
  return (
    <div className="flex items-center gap-6">
      <Link
        href="/login"
        className=" font-bold leading-none hover:text-blue-600"
      >
        로그인
      </Link>

      <button className="flex items-center justify-center p-1 point cursor-pointer ">
        <Bell size={24} strokeWidth={2} />
      </button>

      <button className="flex items-center justify-center p-1 cursor-pointer ">
        <User size={24} strokeWidth={2} />
      </button>

      {/* 모바일에서만 보이는 햄버거 메뉴 (md:hidden) */}
      <Link href="/mobile-menu">
        <button className="flex md:hidden items-center justify-center p-1 cursor-pointer">
          <Menu size={24} strokeWidth={2} />
        </button>
      </Link>
    </div>
  );
};
