// 아직 에러바운딩 안끝낸 가짜 상세페이지
'use client';

import { Suspense } from 'react'; // React 기본 기능 [cite: 2026-02-10]
import { ErrorBoundary } from 'react-error-boundary';
import Link from 'next/link';
import { InquiryList } from '@/features/inquiry/ui/InquiryList';
import { Button } from '@/shared/ui/button';

export const InquiryListSection = () => {
  return (
    <section className="w-full max-w-[800px] mx-auto">
      <div className="flex justify-end w-full mb-6">
        <Button asChild className="cursor-pointer">
          <Link href="/inquiry/write">글쓰기</Link>
        </Button>
      </div>
      {/*  에러 발생 시 처리 */}
      <ErrorBoundary
        fallback={
          <div className="py-20 text-center text-red-500">
            에러가 발생했습니다.
          </div>
        }
      >
        {/* 로딩 중일 때 처리 */}
        <Suspense
          fallback={
            <div className="w-full py-20 text-center text-gray-400">
              불러오는 중...
            </div>
          }
        >
          <InquiryList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};
