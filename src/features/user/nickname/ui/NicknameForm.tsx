'use client';

import { useForm } from 'react-hook-form';
import { useModalStore } from '@/app/store/useModalStore';
import { checkAndSaveNickname } from '../model/useNicknameValidation';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export const NicknameForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { nickname: '' },
  });

  const { openModal, closeModal } = useModalStore();

  const handleDecision = async (data: { nickname: string }) => {
    // 1. 입력값 비어있는지만 가볍게 체크
    if (!data.nickname.trim()) {
      openModal({
        title: '입력 확인',
        description: '닉네임을 입력해 주세요.',
        buttons: [{ label: '확인', onClick: closeModal, variant: 'primary' }],
      });
      return;
    }

    // 2. 백엔드에 POST로 보내서 저장 시도 (백엔드가 글자수, 중복을 모두 체크함)
    const result = await checkAndSaveNickname(data.nickname);

    // 3. 실패 시: 백엔드가 준 에러 메시지(중복 등)를 모달로 노출 [cite: 2026-01-11]
    if (!result.isOk) {
      openModal({
        title: '닉네임 설정 오류',
        description: result.message,
        buttons: [
          {
            label: '다시 입력',
            onClick: closeModal,
            variant: 'primary',
            bgColor: 'point-red',
            textColor: 'color-white',
          },
        ],
      });
      return;
    }

    // 4. 성공 시: 모달 없이 바로 다음 단계 진행 [cite: 2026-01-11]
    console.log('닉네임 저장 성공:', data.nickname);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit(handleDecision)}
        className="flex flex-col items-center"
      >
        <p className="mb-1 text-sm text-gray">
          닉네임은 최대 15자까지 입력할 수 있습니다.
        </p>

        <Input
          {...register('nickname', {
            required: true, // 필수 입력
            minLength: 2, // 최소 2자
            maxLength: 15, // 최대 15자
          })}
          placeholder="닉네임을 입력해주세요"
          // maxLength를 직접 써주면 15자 이상 타이핑 자체가 안 됩니다. [cite: 2026-01-11]
          maxLength={15}
          className="w-80 h-16 text-xl text-center border rounded-full border-gray-300 focus:outline-none focus:border-blue-500"
        />

        <Button type="submit" className="w-80 mt-6 ">
          결정
        </Button>
      </form>
    </div>
  );
};
