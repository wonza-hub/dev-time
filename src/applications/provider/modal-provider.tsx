import { AlertModal } from '@/widgets/alert-modal';

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <AlertModal />
    </>
  );
}
