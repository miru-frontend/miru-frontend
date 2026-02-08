// widgets/nickname-section/ui/NicknameSection.tsx
import { NicknameCharacter } from '@/features/nickname/ui/NicknameCharacter';
import { NicknameForm } from '@/features/nickname/ui/NicknameForm';

export const NicknameSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <div className="text-center mb-10">
        <h1 className="text-[40px] font-bold text-gray-900 mb-2">반갑습니다</h1>
        <p className="text-2xl font-medium text-gray-700">
          닉네임을 정해주세요
        </p>
      </div>

      <NicknameCharacter />
      <div className="w-full max-w-[500px] mt-4">
        <NicknameForm />
      </div>
    </section>
  );
};
