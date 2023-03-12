import Link from 'next/link';

export default function Navbar() {
  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex overflow-hidden flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link
            href={'/'}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500"
          >
            home
          </Link>
          <Link
            href={'/about'}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500"
          >
            about
          </Link>
          <Link
            href={'/blog'}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500"
          >
            blog
          </Link>
          <Link
            href={'/uses'}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] text-neutral-500"
          >
            uses
          </Link>
        </nav>
      </div>
    </aside>
  );
}
