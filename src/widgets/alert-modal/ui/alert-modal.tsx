'use client';

import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/shared/ui/alert-dialog';
import { cn } from '@/shared/lib/utils';

interface AlertModalProps {
  title: string;
  body?: string;
  cancelText?: string;
  actionText?: string;
  onCancel?: () => void;
  onAction?: () => void;
}
export default function AlertModal({
  title,
  body,
  cancelText = '취소',
  actionText = '확인',
  onCancel,
  onAction,
}: AlertModalProps) {
  return (
    <>
      <AlertDialogContent className="sm:max-w-82 sm:gap-6 sm:p-6">
        <AlertDialogHeader className="sm:gap-2">
          <AlertDialogTitle
            className={cn(
              body ? 'title-s600' : 'sub-title-m500',
              'text-gray-800',
            )}
          >
            {title}
          </AlertDialogTitle>
          {body && (
            <AlertDialogDescription className="body-m500 text-gray-600">
              {body}
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  );
}
