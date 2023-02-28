'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { jetBrainsMono } from '@/app/fonts';

const navItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'about',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/contact': {
    name: 'contact',
    x: 127,
    y: 69,
    w: '56px',
  },
  '/uses': {
    name: 'uses',
    x: 182,
    y: 104,
    w: '100px',
  },
  '/spotify': {
    name: 'spotify',
    x: 237,
    y: 137,
    w: '100px',
  },
};

export default function Navbar() {
  const pathname = usePathname() || '/';

  const findNav = () => {
    return Object.entries(navItems).find(([path]) => pathname === path)?.[1];
  };

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className={'lg:sticky lg:top-20 ' + jetBrainsMono.className}>
        <nav
          className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            <div className="hidden md:block">
              <motion.div
                className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                layoutId="test2"
                initial={{
                  opacity: 0,
                  y: findNav()!.y,
                }}
                animate={{
                  opacity: 1,
                  y: findNav()!.y,
                  width: findNav()!.w,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
              />
            </div>
            <div className="block md:hidden">
              <motion.div
                className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                layoutId="test"
                initial={{
                  opacity: 0,
                  x: findNav()!.x,
                }}
                animate={{
                  opacity: 1,
                  x: findNav()!.x,
                  width: findNav()!.w,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                }}
              />
            </div>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]'
                  }
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
