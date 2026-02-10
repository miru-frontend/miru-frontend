'use client';

import Link from 'next/link';
import { InquiryList } from '@/features/inquiry/ui/InquiryList';
import { Button } from '@/shared/ui/button';

export const InquiryListSection = () => {
  return (
    <section className="w-full max-w-[800px] mx-auto">
      <div className="flex justify-end w-full mb-6">
        {/*  asChild를 쓰면 Button이 Link 태그처럼 작동합니다. */}
        <Button asChild className="cursor-pointer">
          <Link href="/inquiry/write">글쓰기</Link>
        </Button>
      </div>

      <InquiryList />
    </section>
  );
};
