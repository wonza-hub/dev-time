import Link from 'next/link';
import { cn } from '@/shared/lib/utils';

interface NavigationBarLoginProps {
  isLoggedIn: boolean;
  isMobile?: boolean;
}

export default function NavigationBarLogin({
  isLoggedIn,
  isMobile = false,
}: NavigationBarLoginProps) {
  const linkClassName = cn('link', isMobile && 'px-4 py-2');

  if (isLoggedIn) {
    return (
      <>
        <Link href="/mypage" className={linkClassName}>
          마이페이지
        </Link>
        <Link href="/signout" className={linkClassName}>
          로그아웃
        </Link>
      </>
    );
  }

  return (
    <>
      <Link href="/signin" className={linkClassName}>
        로그인
      </Link>
      <Link href="/signup" className={linkClassName}>
        회원가입
      </Link>
    </>
  );
}
