import { useState } from 'react';

export const useNicknameValidation = () => {
  const [nickname, setNickname] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  // 닉네임 유효성 검사
  const isLengthValid = nickname.length > 0 && nickname.length <= 15;

  // 제출 가능 여부
  const canSubmit = isLengthValid && !isDuplicate;

  return { nickname, setNickname, isDuplicate, isLengthValid, canSubmit };
};
