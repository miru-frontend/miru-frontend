'use client';

import { useState } from 'react';
import { ConsentSection } from '../_components/ConsentSection';
import {
  KaKaoButton,
  NaverButton,
  GoogleButton,
} from '../_components/SocialButtons';
import { useModalStore } from '@/app/store/useModalStore';

export default function LoginForm() {
  const [checkedItems, setCheckedItems] = useState({
    consent1: false,
    consent2: false,
  });

  const { openModal, closeModal } = useModalStore();

  const handleLogin = (provider: string) => {
    const missing = [];
    if (!checkedItems.consent1) missing.push('개인정보 처리방침');
    if (!checkedItems.consent2) missing.push('서비스 이용약관');

    if (missing.length > 0) {
      openModal({
        title: '필수 동의 필요',
        description: `${missing.join(', ')}에 동의하셔야\n서비스 이용이 가능합니다.`,
        buttons: [
          {
            label: '확인',
            onClick: closeModal,
            variant: 'primary',
            bgColor: '#4A90E2',
            textColor: '#FFFFFF',
          },
        ],
      });
      return;
    }

    console.log(`${provider} 로그인 시도`);
  };

  return (
    <section className="flex flex-col gap-5 w-full max-w-[500px] px-4 mx-auto mt-40 mb-16">
      {/* 4. 불필요한 익명함수 대신 최적화된 handleLogin 전달 (이전 수업 내용 복습!) [cite: 2026-01-11] */}
      <KaKaoButton onClick={() => handleLogin('kakao')} />
      <GoogleButton onClick={() => handleLogin('google')} />
      <NaverButton onClick={() => handleLogin('naver')} />

      <ConsentSection
        checkedItems={checkedItems}
        onChange={(id, val) =>
          setCheckedItems((prev) => ({ ...prev, [id]: val }))
        }
      />
    </section>
  );
}
