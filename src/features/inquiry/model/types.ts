export interface Inquiry {
  id: number; // 게시글 고유 번호
  title: string; // 게시글 제목
  date: string; // 작성일
  status: 'WAITING' | 'COMPLETED'; // 답변 상태
}

export interface InquiryDetailProps {
  data: {
    title: string;
    createdAt: string;
    status: string;
    content: string;
    adminName?: string;
    adminContent?: string;
  };
}
