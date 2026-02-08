import Image from 'next/image';

export const LoginHero = () => {
  return (
    <div className="flex flex-col items-center mb-10 mt-20">
      <Image
        src="/assets/images/miru-login-logo.png"
        alt="MIRU 로그인 로고"
        width={280} // 이미지 비율에 맞춰 적절히 조절하세요!
        height={120}
        priority
      />
    </div>
  );
};
