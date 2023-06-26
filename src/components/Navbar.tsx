'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const navbarBackgroundClasses = isHomePage
    ? 'bg-transparent'
    : 'bg-momentsy-red';

  return (
    <header
      className={`fixed top-0 z-10 h-16 w-full px-4 md:px-8 ${navbarBackgroundClasses}`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center">
        <nav>
          <Link href="/" className="text-2xl font-bold text-momentsy-beige">
            Momentsy
          </Link>
        </nav>
      </div>
    </header>
  );
}
