import Link from 'next/link';

interface NavigationBarMenuProps {
  isMobile?: boolean;
}

export default function NavigationBarMenu({
  isMobile = false,
}: NavigationBarMenuProps) {
  return (
    <>
      <Link href="/dashboard" className={`link ${isMobile ? 'px-4 py-2' : ''}`}>
        대시보드
      </Link>
      <Link href="/ranking" className={`link ${isMobile ? 'px-4 py-2' : ''}`}>
        랭킹
      </Link>
    </>
  );
}
