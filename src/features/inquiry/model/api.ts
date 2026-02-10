// features/inquiry/model/api.ts
import { apiClient } from '@/shared/api/apiClient';
import { Inquiry, InquiryDetailProps } from './types';

// 1. 문의글 목록 전체 조회 (GET)
export const fetchAllInquiries = async (): Promise<Inquiry[]> => {
  const response = await apiClient.get<Inquiry[]>('/inquiry/all');
  return response.data;
};

// 2. 문의글 신규 등록 (POST)
export const createInquiry = async (data: {
  title: string;
  content: string;
}) => {
  const response = await apiClient.post('/api/inquiry/posting', data);
  return response.data;
};

// 3. 문의글 상세 조회 (GET)
export const fetchInquiryById = async (
  id: string,
): Promise<InquiryDetailProps['data']> => {
  // 서버 주소 체계에 맞게 '/inquiry/{id}' 형태로 요청합니다.
  const response = await apiClient.get<InquiryDetailProps['data']>(
    `/api/inquiry/${id}`,
  );
  return response.data;
};

// 4. 문의글 삭제 (DELETE) -
export const deleteInquiry = async (id: string): Promise<void> => {
  // 말씀하신 대로 DELETE 메서드와 id를 경로에 담아 보냅니다.
  await apiClient.delete(`/api/inquiry/${id}`);
};
