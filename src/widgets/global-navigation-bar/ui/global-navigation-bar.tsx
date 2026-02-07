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
import NavigationBarMenu from './navigation-bar-menu';
import NavigationBarLogin from './navigation-bar-login';

interface GlobalNavigationBarProps {
  isLoggedIn?: boolean;
}

export default function GlobalNavigationBar({
  isLoggedIn = false,
}: GlobalNavigationBarProps) {
  return (
    <nav className="bg-primary-light sticky top-0 z-50 w-full">
      <div className="body-s600 mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/brand-logo-horizontal.svg"
              alt="logo"
              width={148}
              height={40}
            />
          </Link>
          <div className="tablet:flex tablet:items-center tablet:gap-6 hidden">
            <NavigationBarMenu />
          </div>
        </div>

        {/* Desktop Navigation - tablet 이상에서만 표시 */}
        <div className="tablet:flex tablet:items-center tablet:gap-6 hidden">
          <NavigationBarLogin isLoggedIn={isLoggedIn} />
        </div>

        {/* Mobile Navigation - tablet 미만에서만 표시 */}
        <Sheet>
          <SheetTrigger asChild className="tablet:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="text-secondary size-5" />
              <span className="sr-only">메뉴 열기</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="text-secondary w-[280px]">
            <SheetHeader>
              <SheetTitle className="sr-only">모바일 네비게이션 바</SheetTitle>
              <Image
                src="/images/brand-logo-vertical.svg"
                alt="logo"
                width={70}
                height={53}
                className="mx-auto"
              />
            </SheetHeader>
            <div className="flex flex-col gap-4 py-4">
              <NavigationBarMenu isMobile />
              <div className="my-2 border-t" />
              <NavigationBarLogin isLoggedIn={isLoggedIn} isMobile />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
