import { InquiryHero } from '@/features/inquiry/ui/InquiryHero';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { InquirySection } from '@/widgets/inquiry/InquirySectionWidget';

export default function page() {
  return (
    <>
      <Header />
      <div className="m-10 md:m-20">
        <InquiryHero />

        <InquirySection />
      </div>

      <Footer />
    </>
  );
}
