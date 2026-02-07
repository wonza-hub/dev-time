import Link from 'next/link';

interface NavigationBarLoginProps {
  isLoggedIn: boolean;
  isMobile?: boolean;
}

export default function NavigationBarLogin({
  isLoggedIn,
  isMobile = false,
}: NavigationBarLoginProps) {
  if (isLoggedIn) {
    return (
      <>
        <Link href="/mypage" className={`link ${isMobile ? 'px-4 py-2' : ''}`}>
          마이페이지
        </Link>
        <Link href="/signout" className={`link ${isMobile ? 'px-4 py-2' : ''}`}>
          로그아웃
        </Link>
      </>
    );
  }

  return (
    <>
      <Link href="/signin" className={`link ${isMobile ? 'px-4 py-2' : ''}`}>
        로그인
      </Link>
      <Link href="/signup" className={`link ${isMobile ? 'px-4 py-2' : ''}`}>
        회원가입
      </Link>
    </>
  );
}
