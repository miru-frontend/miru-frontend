/**
 * @param provider 'kakao' | 'naver' | 'google'
 */

export const startSocialLogin = (provider: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // 백엔드가 지정한 OAuth2 인증 시작 주소로 이동
  window.location.href = `${baseUrl}/oauth2/authorization/${provider}`;
};
