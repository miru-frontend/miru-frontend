'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createInquiry } from '@/features/inquiry/model/api';
import { Button } from '@/shared/ui/button';
import { TitleInput } from '@/shared/ui/title-input';
import { TiptapEditor } from '@/shared/ui/tiptap-editor';
import { useModalStore } from '@/app/store/useModalStore';

export function InquiryWriteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  // 1. 모달 제어 함수 가져오기
  const { openModal, closeModal } = useModalStore();

  const handleSubmit = async () => {
    if (!title || !content) {
      openModal({
        title: '입력 확인',
        description: '제목과 내용을 모두 입력해주세요.',
        buttons: [{ label: '확인', onClick: closeModal, variant: 'primary' }],
      });
      return;
    }

    try {
      await createInquiry({ title, content });

      // 2. 성공 시 모달 띄우기
      openModal({
        title: '등록 완료',
        description: '문의글이 성공적으로 등록되었습니다.',
        buttons: [
          {
            label: '확인',
            onClick: () => {
              closeModal();
              router.push('/inquiry'); // 확인 누르면 목록으로 이동 [cite: 2026-02-10]
            },
            variant: 'primary',
          },
        ],
      });
    } catch (error) {
      // 3. 실패 시 에러 모달
      openModal({
        title: '등록 실패',
        description: '서버 오류로 인해 등록에 실패했습니다. 다시 시도해주세요.',
        buttons: [{ label: '닫기', onClick: closeModal, variant: 'secondary' }],
      });
    }
  };
  return (
    <section>
      <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <TiptapEditor
        placeholder="문의 내용을 입력해주세요"
        content={content}
        onChange={setContent}
      />
      <div className="flex justify-end w-full mt-4 ">
        <Button className="cursor-pointer px-8 py-2" onClick={handleSubmit}>
          올리기
        </Button>
      </div>
    </section>
  );
}
