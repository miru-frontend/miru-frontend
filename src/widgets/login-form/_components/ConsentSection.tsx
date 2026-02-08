'use client';

import Link from 'next/link';
import { Checkbox } from './Checkbox';

interface ConsentSectionProps {
  checkedItems: { consent1: boolean; consent2: boolean };
  onChange: (id: 'consent1' | 'consent2', value: boolean) => void;
}

const ConsentItem = ({
  label,
  checked,
  onCheck,
  href, // onDetailClick 대신 href를 받습니다.
}: {
  label: string;
  checked: boolean;
  onCheck: () => void;
  href: string; // 이동할 경로
}) => (
  <div className="flex items-center justify-between w-full py-1">
    <div className="flex items-center gap-2 cursor-pointer" onClick={onCheck}>
      <Checkbox checked={checked} />
      <span className="text-[#191919] text-sm font-medium">{label}</span>
    </div>

    <Link
      href={href}
      target="_blank"
      onClick={(e) => {
        e.stopPropagation(); // 체크박스 클릭 이벤트 전파 방지 [cite: 2026-01-11]
      }}
      className="text-[#767676] text-[12px] underline underline-offset-2 hover:text-[#191919] transition-colors"
    >
      자세히
    </Link>
  </div>
);

export const ConsentSection = ({
  checkedItems,
  onChange,
}: ConsentSectionProps) => {
  return (
    <div className="flex flex-col gap-2 w-full mt-10">
      <ConsentItem
        label="개인정보 처리방침 (필수)"
        checked={checkedItems.consent1}
        onCheck={() => onChange('consent1', !checkedItems.consent1)}
        href="/terms/privacy" // 실제 경로 지정 [cite: 2026-01-11]
      />
      <ConsentItem
        label="서비스 이용약관 (필수)"
        checked={checkedItems.consent2}
        onCheck={() => onChange('consent2', !checkedItems.consent2)}
        href="/terms/service" // 실제 경로 지정 [cite: 2026-01-11]
      />
    </div>
  );
};
