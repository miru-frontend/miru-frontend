'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchAllInquiries } from '../model/api';
import { InquiryItem } from './InquiryItem';
import { usePagination } from '@/shared/lib/hooks/usePagination';
import { CommonPagination } from '@/shared/ui/CommonPagination';

export const InquiryList = () => {
  const pagination = usePagination();

  const {
    data: allInquiries,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['inquiries-all'],
    queryFn: fetchAllInquiries,
  });

  const totalCount = allInquiries?.length || 0;
  const { totalPages, pageNumbers } = pagination.getPaginationData(totalCount);
  const offset = (pagination.page - 1) * 10;
  const currentViewData = allInquiries?.slice(offset, offset + 10);

  if (isLoading)
    return (
      <div className="w-full py-20 text-center text-gray-400">
        불러오는 중...
      </div>
    );

  if (isError)
    return (
      <div className="py-20 text-center text-red-500">에러가 발생했습니다.</div>
    );

  return (
    <section className="flex flex-col items-center w-full max-w-[800px] mx-auto pb-20">
      <h2 className="sr-only">문의 게시글 목록</h2>

      {totalCount > 0 ? (
        <>
          {/* 리스트 영역 */}
          <div className="flex flex-col gap-4 w-full mb-10">
            {currentViewData?.map((item) => (
              <InquiryItem key={item.id} {...item} />
            ))}
          </div>

          {/* 페이지네이션 */}
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
        /* 빈 상태(Empty State) */
        <div className="flex flex-col items-center justify-center w-full py-32 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-400 text-lg font-medium">
            작성하신 문의글이 없습니다.
          </p>
          <p className="text-gray-300 text-sm mt-2">
            궁금한 점이 있다면 상단의 글쓰기 버튼을 이용해 주세요!
          </p>
        </div>
      )}
    </section>
  );
};
