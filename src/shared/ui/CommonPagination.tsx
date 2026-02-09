import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';

// 훅에서 계산해준 값들을 그대로 받아오기만 하면 됩니다.
interface CommonPaginationProps {
  page: number;
  totalPages: number;
  pageNumbers: number[];
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const CommonPagination = ({
  page,
  totalPages,
  pageNumbers,
  onPageChange,
  onNext,
  onPrev,
}: CommonPaginationProps) => {
  return (
    <Pagination className="mt-12">
      <PaginationContent>
        {/* [이전] 버튼 */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPrev();
            }}
            className={
              page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'
            }
          />
        </PaginationItem>

        {/* 숫자 버튼들 */}
        {pageNumbers.map((num) => (
          <PaginationItem key={num}>
            <PaginationLink
              href="#"
              isActive={page === num}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(num);
              }}
              className="cursor-pointer"
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* [다음] 버튼 */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNext();
            }}
            className={
              page === totalPages
                ? 'pointer-events-none opacity-50'
                : 'cursor-pointer'
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
