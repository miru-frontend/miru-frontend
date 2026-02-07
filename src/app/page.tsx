import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Header } from '@/widgets/header';

export default function Home() {
  return (
    <div className=" space-y-10 bg-bg-white min-h-screen">
      <Header />
      {/* 1. Button: 메인 컬러 확인 */}
      <section className="space-y-4">
        <h2 className="text-h2">1. Buttons (Primary & Point)</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="default">Primary (메인 파랑)</Button>
          <Button variant="destructive">Destructive (포인트 레드)</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary (회색조)</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* 2. Badge: 강조 색상 확인 */}
      <section className="space-y-4">
        <h2 className="text-h2">2. Badges</h2>
        <div className="flex gap-2">
          <Badge variant="default">Main Label</Badge>
          <Badge variant="outline">Outline Label</Badge>
          <Badge variant="destructive">Warning</Badge>
        </div>
      </section>

      {/* 2. Badge: 강조 색상 확인 */}
      <section className="space-y-4">
        <h2 className="text-h2">2. Badges</h2>
        <div className="flex gap-2">
          <Badge variant="default">Main Label</Badge>
          <Badge variant="outline">Outline Label</Badge>
          <Badge variant="destructive">Warning</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-h2">2. Badges</h2>
        <div className="flex gap-2">
          <Badge variant="default">Main Label</Badge>
          <Badge variant="outline">Outline Label</Badge>
          <Badge variant="destructive">Warning</Badge>
        </div>
      </section>

      {/* 3. Input & Textarea: 테두리 및 포커스 색상 */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-h2">3. Forms (Focus Ring 확인)</h2>
        <Input placeholder="이름을 입력하세요 (Focus 시 파란색인지 확인)" />
        <Textarea placeholder="자기소개를 적어보세요" />
      </section>

      {/* 4. Card: 배경색과 테두리 조화 */}
      <section className="space-y-4">
        <h2 className="text-h2">4. Card & Typography</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle className="text-main">분석 진행 중</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-foreground">
              이 카드의 배경과 텍스트 색상이 조화로운지 확인하세요.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
