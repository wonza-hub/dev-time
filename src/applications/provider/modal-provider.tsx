import { AlertDialog } from '@/shared/ui/alert-dialog';

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AlertDialog>{children}</AlertDialog>;
}
