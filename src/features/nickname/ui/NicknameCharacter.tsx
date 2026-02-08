import Image from 'next/image';

export const NicknameCharacter = () => {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      <Image
        src="/assets/images/nickname-hero.png"
        alt="Welcome Character"
        width={300}
        height={300}
        priority
        className="object-contain"
      />
    </div>
  );
};
