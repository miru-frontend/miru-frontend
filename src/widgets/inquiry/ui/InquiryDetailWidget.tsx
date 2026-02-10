'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchInquiryById } from '@/features/inquiry/model/api';
import { InquiryDetailSection } from './InquiryDetailSection';

// 1. 외부에서 사용하는 위젯 본체
export const InquiryDetailWidget = ({ id }: { id: string }) => {
  return (
    <ErrorBoundary
      fallback={
        <div className="py-20 text-center text-red-500">
          글을 불러오지 못했습니다.
        </div>
      }
    >
      <Suspense
        fallback={
          <div className="py-20 text-center text-gray-400">
            내용을 불러오는 중...
          </div>
        }
      >
        <InquiryDetailContent id={id} />
      </Suspense>
    </ErrorBoundary>
  );
};

// 2. 실제 데이터를 패칭하는 내부 컴포넌트 1번으로 렌더링을 시작하면서 이 함수가 실행됨
const InquiryDetailContent = ({ id }: { id: string }) => {
  const { data } = useSuspenseQuery({
    queryKey: ['inquiry', id],
    queryFn: () => fetchInquiryById(id),
  });

  // 성공하면 데이터를 Section에 전달합니다.
  return <InquiryDetailSection data={data} id={id} />;
};
