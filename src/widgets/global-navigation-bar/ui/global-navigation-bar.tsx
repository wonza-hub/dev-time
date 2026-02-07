'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Button,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui';
import Image from 'next/image';

interface GlobalNavigationBarProps {
  isLoggedIn?: boolean;
}

export default function GlobalNavigationBar({
  isLoggedIn = false,
}: GlobalNavigationBarProps) {
  return (
    <nav className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="text-secondary body-s600 mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/brand-logo-horizontal.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-foreground transition-colors"
          >
            대시보드
          </Link>
          <Link
            href="/ranking"
            className="hover:text-foreground transition-colors"
          >
            랭킹
          </Link>
        </div>

        {/* Desktop Navigation - tablet 이상에서만 표시 */}
        <div className="tablet:flex tablet:items-center tablet:gap-6 hidden">
          <div className="flex items-center gap-8">
            {isLoggedIn ? (
              <>
                <Link
                  href="/mypage"
                  className="hover:text-foreground transition-colors"
                >
                  마이페이지
                </Link>
                <Button variant="outline">로그아웃</Button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="hover:text-foreground transition-colors"
                >
                  로그인
                </Link>
                <Link
                  href="/signup"
                  className="hover:text-foreground transition-colors"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation - tablet 미만에서만 표시 */}
        <Sheet>
          <SheetTrigger asChild className="tablet:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle className="text-left">DevTime</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-8 py-4">
              <Link
                href="/dashboard"
                className="hover:text-foreground px-4 py-2 transition-colors"
              >
                대시보드
              </Link>
              <Link
                href="/ranking"
                className="hover:text-foreground px-4 py-2 transition-colors"
              >
                랭킹
              </Link>
              <div className="my-2 border-t" />
              {isLoggedIn ? (
                <>
                  <Link
                    href="/mypage"
                    className="hover:text-foreground px-4 py-2 transition-colors"
                  >
                    마이페이지
                  </Link>
                  <Button variant="outline" className="mx-4">
                    로그아웃
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="hover:text-foreground px-4 py-2 transition-colors"
                  >
                    로그인
                  </Link>
                  <Link
                    href="/signup"
                    className="hover:text-foreground px-4 py-2 transition-colors"
                  >
                    회원가입
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
