// src/shared/ui/title-input.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

// ✅ 인터페이스로 타입 분리
export interface TitleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TitleInput = React.forwardRef<HTMLInputElement, TitleInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className={cn(
          'w-full bg-transparent py-4',
          // globals.css의 h1 크기(2.25rem) 사용, 700에서 500(medium)으로 두께 조절
          'text-[length:var(--font-size-h1)] font-medium text-foreground',
          'placeholder:text-gray-300',
          'border-none outline-none focus:ring-0 px-0', // 테두리 제거 및 헤더 정렬을 위해 좌측 패딩 제거
          'transition-colors',
          className,
        )}
        placeholder="제목을 입력하세요"
        {...props}
      />
    );
  },
);
TitleInput.displayName = 'TitleInput';

export { TitleInput };
