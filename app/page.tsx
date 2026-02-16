'use client';

import { Button } from '@/shared/ui';
import { AlertDialogTrigger } from '@/shared/ui/alert-dialog';
import AlertModal from '@/widgets/alert-modal/ui/alert-modal';
import { toast } from 'sonner';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 text-3xl font-medium dark:bg-black">
      프리텐다드
      <AlertDialogTrigger asChild>
        <Button variant="outline">얼럿 모달 테스트</Button>
      </AlertDialogTrigger>
      <AlertModal
        title="알림"
        body="알림 내용"
        onCancel={() => {
          toast.error('취소');
        }}
        onAction={() => {
          toast.success('확인');
        }}
      />
    </div>
  );
}
