import axios from 'axios';
import { apiClient } from '@/shared/api/apiClient';

/**
 * 닉네임을 서버에 저장하는 함수
 */
export const checkAndSaveNickname = async (nickname: string) => {
  try {
    const response = await apiClient.post('/api/v1/user/nickname', {
      nickname,
    });

    return {
      isOk: true,
      message: response.data.message,
    };
  } catch (err: unknown) {
    // Axios 에러인지 확인
    if (axios.isAxiosError(err)) {
      return {
        isOk: false,
        message: err.response?.data?.message ?? '서버에서 오류가 발생했습니다.',
      };
    }

    //  Axios가 아닌 진짜 예외
    return {
      isOk: false,
      message: '알 수 없는 오류가 발생했습니다.',
    };
  }
};
