/**
 * 소셜 로그인 시작 (OAuth2 인증 요청)
 * @param provider 'kakao' | 'naver' | 'google'
 */
export const startSocialLogin = (provider: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // 1. 현재 페이지 주소를 가져옵니다. (로그인 후 돌아올 목적지)
  const currentPath = window.location.pathname + window.location.search;

  // 2. 백엔드 주소로 이동 (세션 방식이므로 토큰을 쿼리로 받을 필요 없음)
  // 대신 백엔드와 약속한 'redirect_url' 파라미터에 현재 주소를 담아 보냅니다.
  const loginUrl = `${baseUrl}/oauth2/authorization/${provider}?redirect_url=${encodeURIComponent(currentPath)}`;

  // 3. 페이지 이동 (이후 과정은 백엔드가 세션을 구워주며 처리함)
  window.location.href = loginUrl;
};
