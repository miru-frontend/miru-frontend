// features/inquiry/model/api.ts
import { apiClient } from '@/shared/api/apiClient'; // 공통 apiClient 가져오기
import { Inquiry } from './types';

//문의글 목록 전체 조회 (GET)
export const fetchAllInquiries = async (): Promise<Inquiry[]> => {
  // 1. apiClient를 사용하면 baseURL, CSRF 토큰, withCredentials가 자동으로 적용됩니다.
  const response = await apiClient.get<Inquiry[]>('/inquiry/all');

  // 2. Axios는 응답 데이터가 'data' 필드에 들어있습니다.
  // 에러 처리는 apiClient 인터셉터에서 공통으로 하거나, 여기서 추가로 할 수 있습니다.
  return response.data;
};

//문의글 신규 등록 (POST)
export const createInquiry = async (data: {
  title: string;
  content: string;
}) => {
  const response = await apiClient.post('/api/inquiry/posting', data);
  return response.data;
};
