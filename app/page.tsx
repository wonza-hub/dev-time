'use client';

import { Chip } from '@/shared/ui/chip';
import { Checkbox } from '@/shared/ui/checkbox';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui/tooltip';
import { toast } from 'sonner';

export default function Home() {
  const handleDelete = () => {
    toast.error('삭제 버튼 클릭');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-zinc-50 p-10 font-medium dark:bg-black">
      <section className="flex flex-col items-center gap-4">
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
      </section>

      <section className="flex flex-col items-center gap-4 border-t pt-12">
        <h3 className="text-2xl font-bold">Tooltip Component Test</h3>

        <div className="flex gap-8">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="bg-primary rounded-md px-4 py-2 text-white transition-opacity hover:opacity-80">
                Hover me
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Plain tooltip</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="bg-secondary rounded-md px-4 py-2 text-white transition-opacity hover:opacity-80">
                Hover me too
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Left positioned tooltip</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 border-t pt-12">
        <h3 className="text-2xl font-bold">Other Components</h3>
        <Checkbox />
      </section>
    </div>
  );
}
