'use client';

import { Chip } from '@/shared/ui/chip';
import { toast } from 'sonner';
import { Checkbox } from '@/shared/ui/checkbox';

export default function Home() {
  const handleDelete = () => {
    toast.error('삭제 버튼 클릭');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-zinc-50 p-10 font-medium dark:bg-black">
      <h2 className="text-2xl font-bold">Chip Component Test</h2>

      <div className="flex gap-8">
        {/* 읽기 모드 - X 버튼 없음 */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500">Read Mode</span>
          <Chip label="item" />
        </div>

        {/* 쓰기 모드 - X 버튼 있음 */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500">Write Mode</span>
          <Chip label="item" onDelete={handleDelete} />
        </div>
      </div>

      <div className="mt-8 border-t pt-8">
        <h3 className="mb-4 text-xl font-bold">Other Components</h3>
        <Checkbox />
      </div>
    </div>
  );
}
