import axios from 'axios';

// 1. Axios 인스턴스 생성
export const apiClient = axios.create({
  // 환경변수에 저장된 API 주소를 사용합니다. [cite: 2026-01-11]
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // 중요: 세션 쿠키를 서버와 주고받기 위해 필수 설정입니다. [cite: 2026-01-11]
  withCredentials: true,
});

// 2. 요청 인터셉터: 모든 요청이 나가기 직전에 실행됩니다. [cite: 2026-02-09]
apiClient.interceptors.request.use(
  (config) => {
    // 브라우저 쿠키에서 'XSRF-TOKEN'이라는 이름의 값을 찾아옵니다. [cite: 2026-01-11]
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('XSRF-TOKEN='))
      ?.split('=')[1];

    if (token) {
      // 백엔드 민수현님과 약속한 헤더 이름(X-XSRF-TOKEN)으로 토큰을 실어 보냅니다. [cite: 2026-01-11]
      config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token);
    }

    return config;
  },
  (error) => {
    // 요청 과정에서 에러가 나면 여기서 처리합니다.
    return Promise.reject(error);
  },
);
