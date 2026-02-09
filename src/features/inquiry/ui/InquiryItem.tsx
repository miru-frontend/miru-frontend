'use client'; // useRouter를 쓰려면 필요합니다!

import { useRouter } from 'next/navigation'; // 이동을 위한 도구
import { Card } from '@/shared/ui/card';
import { Inquiry } from '../model/types';
import { Badge } from '@/shared/ui/badge';

// 1. Omit에서 'id'를 빼지 말고 포함시킵니다.
export const InquiryItem = ({ id, title, date, status }: Inquiry) => {
  const router = useRouter();

  const statusConfig = {
    WAITING: { label: '답변대기', className: 'bg-point-red text-white' },
    COMPLETED: { label: '답변완료', className: 'bg-main text-white' },
  };

  const currentStatus = statusConfig[status];

  // 2. 클릭 시 상세 페이지로 이동하는 함수
  const handleClick = () => {
    router.push(`/inquiry/${id}`); // 예: /inquiry/123 주소로 이동
  };

  return (
    <Card
      onClick={handleClick}
      className="flex flex-row justify-between items-center p-6 bg-white border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold group-hover:text-main transition-colors">
          {title}
        </h3>
        <span className="text-xs text-gray font-medium">{date}</span>
      </div>
      <Badge
        className={`w-24 h-8 justify-center py-1 px-0 text-xs font-bold rounded-md border-none ${currentStatus.className}`}
      >
        {currentStatus.label}
      </Badge>
    </Card>
  );
};
