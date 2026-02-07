import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <NavLink href="/analysis">자기분석</NavLink>
      <NavLink href="/about">자기분석이란?</NavLink>
      <NavLink href="/board">게시판</NavLink>
      <NavLink href="/tips">자기분석 팁</NavLink>
    </nav>
  );
};

//스타일 중복을 줄이기 위한 내부 컴포넌트
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className=" font-bold leading-none hover:text-blue-600 transition-colors"
  >
    {children}
  </Link>
);
