'use client';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/shared/ui/alert-dialog';
import { useAlertModal } from '../model/alert-modal-store';

export default function AlertModal() {
  const store = useAlertModal();

  if (!store.isOpen) return null;

  const {
    title,
    body,
    onPositive,
    onNegative,
    actions: { close },
  } = store;

  const handleCancelClick = () => {
    if (onNegative) {
      onNegative();
    }
    close();
  };

  const handleActionClick = () => {
    if (onPositive) {
      onPositive();
    }
    close();
  };

  return (
    <AlertDialog open={store.isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{body}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancelClick}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleActionClick}>
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
