import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

export interface ChipProps {
  label: string;
  onDelete?: () => void;
  className?: string;
}

export function Chip({ label, onDelete, className }: ChipProps) {
  return (
    <div
      className={cn(
        'label-s600 border-primary bg-primary-light text-primary inline-flex items-center gap-1 rounded-[5px] border px-3 py-[13px]',
        className,
      )}
    >
      <span>{label}</span>
      {onDelete && (
        <button
          onClick={onDelete}
          className="text-primary ml-1 flex cursor-pointer items-center justify-center transition-opacity hover:opacity-70"
          type="button"
          aria-label={`${label} 삭제`}
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
