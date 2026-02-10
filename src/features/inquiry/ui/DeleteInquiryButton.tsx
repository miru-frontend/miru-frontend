'use client';

import { useRouter } from 'next/navigation';
import { deleteInquiry } from '../model/api'; // 나중에 api.ts에 추가할 함수
import { useModalStore } from '@/app/store/useModalStore';

export const DeleteInquiryButton = ({ id }: { id: string }) => {
  const { openModal, closeModal } = useModalStore();
  const router = useRouter();

  const handleDelete = () => {
    openModal({
      title: '정말 삭제하시겠습니까?',
      description: '삭제된 문의글은 복구할 수 없습니다.',
      buttons: [
        { label: '취소', onClick: closeModal, variant: 'secondary' },
        {
          label: '삭제',
          bgColor: '#EF4444',
          textColor: '#FFFFFF',
          onClick: async () => {
            try {
              await deleteInquiry(id);
              closeModal();
              router.push('/inquiry'); // 삭제 후 목록으로 이동 [cite: 2026-02-10]
            } catch (error) {
              alert('삭제에 실패했습니다.');
            }
          },
        },
      ],
    });
  };

  return (
    <button
      onClick={handleDelete}
      className="text-gray hover:text-point-red text-sm transition-colors cursor-pointer hover:underline underline-offset-4"
    >
      삭제
    </button>
  );
};
