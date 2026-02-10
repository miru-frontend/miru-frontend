// features/inquiry/ui/InquiryList.tsx
'use client';

import { useSuspenseQuery } from '@tanstack/react-query'; // 이걸로 교체 서스펜스 사용
import { fetchAllInquiries } from '../model/api';
import { InquiryItem } from './InquiryItem';
import { usePagination } from '@/shared/lib/hooks/usePagination';
import { CommonPagination } from '@/shared/ui/CommonPagination';

export const InquiryList = () => {
  const pagination = usePagination();

  //  isLoading, isError 변수가 필요 없습니다. [cite: 2026-02-10]
  const { data: allInquiries } = useSuspenseQuery({
    queryKey: ['inquiries-all'],
    queryFn: fetchAllInquiries,
  });

  // 이제 allInquiries는 무조건 존재한다고 믿고 바로 로직을 짭니다. [cite: 2026-02-10]
  const totalCount = allInquiries.length;
  const { totalPages, pageNumbers } = pagination.getPaginationData(totalCount);
  const offset = (pagination.page - 1) * 10;
  const currentViewData = allInquiries.slice(offset, offset + 10);

  return (
    <section className="flex flex-col items-center w-full max-w-[800px] mx-auto pb-20">
      <h2 className="sr-only">문의 게시글 목록</h2>

      {totalCount > 0 ? (
        <>
          <div className="flex flex-col gap-4 w-full mb-10">
            {currentViewData.map((item) => (
              <InquiryItem key={item.id} {...item} />
            ))}
          </div>

          <CommonPagination
            page={pagination.page}
            totalPages={totalPages}
            pageNumbers={pageNumbers}
            onPageChange={pagination.setPage}
            onNext={() => pagination.goToNext(totalPages)}
            onPrev={pagination.goToPrev}
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full py-32 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-400 text-lg font-medium">
            작성하신 문의글이 없습니다.
          </p>
        </div>
      )}
    </section>
  );
};
