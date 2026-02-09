import { useState } from 'react';

export const usePagination = (pageSize = 10, groupSize = 10) => {
  const [page, setPage] = useState(1);

  // 이 함수가 '페이지 계산 공통화'의 핵심
  const getPaginationData = (totalCount: number) => {
    const totalPages = Math.ceil(totalCount / pageSize) || 1;
    const currentGroup = Math.ceil(page / groupSize);
    const startPage = (currentGroup - 1) * groupSize + 1;
    const endPage = Math.min(currentGroup * groupSize, totalPages);

    //버튼에 그려질 페이지 번호들
    const pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );

    return { totalPages, pageNumbers };
  };

  return {
    page,
    setPage,
    getPaginationData,
    // totalPages를 받아서 다음/이전으로 가게 업그레이드!
    goToNext: (totalPages: number) =>
      setPage((p) => Math.min(p + 1, totalPages)),
    goToPrev: () => setPage((p) => Math.max(p - 1, 1)),
  };
};
