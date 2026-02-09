import Image from 'next/image';

export const InquiryHero = () => {
  return (
    <div className="flex items-center justify-between py-12 px-8 ">
      <div>
        <h1 className="text-size-h1 font-bold mb-2">1 : 1 문의</h1>
        <p className="text-gray-500">혹시 도움이 필요하신가요?</p>
      </div>
      {/* 캐릭터 이미지 배치 */}
      <div className="relative w-40 h-40">
        <Image
          src="/assets/images/inquiry-hero.png"
          alt="Inquiry Hero Character"
          width={300}
          height={300}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};
