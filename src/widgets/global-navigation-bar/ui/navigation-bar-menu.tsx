import { cn } from '@/shared/lib/utils';
import Link from 'next/link';

interface NavigationBarMenuProps {
  isMobile?: boolean;
}

export default function NavigationBarMenu({
  isMobile = false,
}: NavigationBarMenuProps) {
  const linkClassName = cn('link', isMobile && 'px-4 py-2');

  return (
    <>
      <Link href="/dashboard" className={linkClassName}>
        대시보드
      </Link>
      <Link href="/ranking" className={linkClassName}>
        랭킹
      </Link>
    </>
  );
}
