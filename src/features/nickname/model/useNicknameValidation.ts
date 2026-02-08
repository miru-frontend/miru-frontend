/**
 * 닉네임을 서버에 저장하는 순수 함수
 */
export const checkAndSaveNickname = async (nickname: string) => {
  try {
    const response = await fetch(
      //아직 api 구현전
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/user/nickname`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname }),
      },
    );

    const data = await response.json();

    return {
      isOk: response.ok,
      message: data.message,
    };
  } catch (err) {
    return { isOk: false, message: '서버 연결에 실패했습니다.' };
  }
};
