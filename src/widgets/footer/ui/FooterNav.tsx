import Link from 'next/link';

export const FooterNav = () => {
  return (
    <nav className="flex items-center gap-8">
      <FooterLink href="/terms">이용약관</FooterLink>
      <FooterLink href="/privacy">개인정보동의</FooterLink>
      <FooterLink href="/contact">고객문의</FooterLink>
    </nav>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors"
  >
    {/* text-sm: --font-size-sm (14px) 적용 */}
    {/* text-secondary-foreground: 설정하신 중간 회색 적용 */}
    {/* hover:text-primary: 마우스 올리면 메인 블루(#537fe7)로 변경 */}
    {children}
  </Link>
);
