// 가짜 문의 상세피이지 컴포넌트 껍데기

import { Badge } from '@/shared/ui/badge';
import { InquiryAdminAnswer } from './InquiryAdminAnswer';
import { DeleteInquiryButton } from '@/features/inquiry/ui/DeleteInquiryButton';
import { InquiryDetailProps } from '@/features/inquiry/model/types';

export const InquiryDetailSection = ({
  data,
  id,
}: {
  data: InquiryDetailProps['data'];
  id: string;
}) => {
  const badgeVariant = data.status === '답변대기' ? 'destructive' : 'default';

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="mb-8 border-b pb-6">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          {/* 삭제 버튼 피처 배치 */}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400">{data.createdAt}</p>
          <DeleteInquiryButton id={id} />
        </div>
        <Badge
          variant={badgeVariant}
          className="px-2 py-1 rounded-full text-sm font-medium mt-4"
        >
          {data.status}
        </Badge>
      </div>

      {/* 본문 내용 */}
      <div className="min-h-[300px] text-lg leading-loose mb-10">
        {data.content}
      </div>

      {/* 운영자 답변 컴포넌트 */}
      <InquiryAdminAnswer
        adminName={data.adminName}
        adminContent={data.adminContent}
      />
    </div>
  );
};
