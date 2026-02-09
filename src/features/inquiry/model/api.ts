// features/inquiry/model/api.ts (실제 API용)
import { Inquiry } from './types';

export const fetchAllInquiries = async (): Promise<Inquiry[]> => {
  // 서버에서 전체 데이터를 주는 엔드포인트라고 가정합니다. [cite: 2026-01-11]
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/inquiry/all`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  if (!response.ok) {
    throw new Error('전체 목록을 불러오는 데 실패했습니다.');
  }

  // 백엔드가 [ {}, {}, ... ] 형태의 배열을 준다고 가정합니다. [cite: 2026-01-11]
  return response.json();
};
