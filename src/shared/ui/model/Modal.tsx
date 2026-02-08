'use client';

//모달 껍데기
import React from 'react';
import Image from 'next/image';

export interface ModalButton {
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
      onClick={onClose}
    >
      <div
        className="w-full max-w-[320px] rounded-[24px] bg-white p-7 shadow-xl flex flex-col items-center text-center border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4">
          <Image
            src="/assets/icons/warning.png"
            alt="Warning"
            width={120}
            height={120}
            priority
          />
        </div>
        <h3 className="mb-2 text-[20px] font-bold text-[#111827] leading-tight">
          {title}
        </h3>
        {description && (
          <p className="mb-6 text-[14px] text-[#111827] opacity-70 whitespace-pre-wrap leading-normal">
            {description}
          </p>
        )}
        {children}
        {buttons && buttons.length > 0 && (
          <div className="flex w-full gap-2 mt-2">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={btn.onClick}
                style={{ backgroundColor: btn.bgColor, color: btn.textColor }}
                className={`flex-1 rounded-[12px] py-3 text-[16px] font-semibold transition-all active:scale-95 ${
                  !btn.bgColor &&
                  (btn.variant === 'secondary'
                    ? 'bg-gray-100 text-[#111827]'
                    : 'bg-main text-white')
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
