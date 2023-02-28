'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { jetBrainsMono } from '@/app/fonts';

export default function Navbar() {
  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className={'lg:sticky lg:top-20 ' + jetBrainsMono.className}>
        <nav
          className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            <Link
              href={'/'}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]"
            >
              home
            </Link>
            <Link
              href={'/blog'}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]"
            >
              blog
            </Link>
            <Link
              href={'/about'}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]"
            >
              about
            </Link>
            <Link
              href={'/contact'}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]"
            >
              contact
            </Link>
            <Link
              href={'/uses'}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]"
            >
              uses
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
