// shared/ui/Modal.tsx
import React from 'react';
import Image from 'next/image';

interface ModalButton {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  bgColor?: string;
  textColor?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  buttons?: ModalButton[];
  children?: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  buttons,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose} // 배경 클릭 시 닫기 기능 추가
    >
      <div
        className="w-full max-w-[320px] rounded-[24px] bg-[var(--color-bg-white)] p-7 shadow-xl flex flex-col items-center text-center border border-[var(--color-border)]"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
      >
        {/* 1. 고정 아이콘 */}
        <div className="mb-4">
          <Image
            src="/assets/icons/warning.png"
            alt="Warning"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* 2. 타이포그래피 */}
        <h3 className="mb-2 text-[20px] font-bold text-[#111827] leading-tight">
          {title}
        </h3>

        {description && (
          <p className="mb-6 text-[14px] text-[#111827] opacity-70 whitespace-pre-wrap leading-normal">
            {description}
          </p>
        )}

        {children}

        {/* 3. 버튼 영역: 색상 설정 가능하게 스타일 연결 */}
        {buttons && buttons.length > 0 && (
          <div className="flex w-full gap-2 mt-2">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={btn.onClick}
                style={{
                  backgroundColor: btn.bgColor, // bgColor가 있으면 우선 적용
                  color: btn.textColor, // textColor가 있으면 우선 적용
                }}
                className={`flex-1 rounded-[var(--radius-lg)] py-3 text-[16px] font-semibold transition-all active:scale-95
                  ${
                    !btn.bgColor && // 직접 지정한 bgColor가 없을 때만 기본 클래스 적용
                    (btn.variant === 'secondary'
                      ? 'bg-[var(--color-bg-gray-mid)] text-[#111827]'
                      : 'bg-[var(--color-main)] text-white hover:opacity-90')
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
