import Image from 'next/image';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';

export default async function HomePage() {
  return (
    <section className="">
      <h1 className="font-bold text-3xl font-serif">Sayidulloh Abbasov</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        I am SaDi, I am a freelancer web developer
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt="Sayidulloh Abbasov"
          className="rounded-full grayscale"
          src={'/images/avatar.jpg'}
          width={100}
          height={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <p className="flex items-center gap-2">
            <TwitterIcon />
            {/* {`${tweetCount.toLocaleString()} tweets all time`} */}
          </p>
          <p className="flex items-center gap-2">
            <GitHubIcon />
            {/* {`${starCount.toLocaleString()} stars on this repo`} */}
          </p>
          <p className="flex items-center">
            <ViewsIcon />
            {/* {`${views.toLocaleString()} blog views all time`} */}
          </p>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        I have been working as a programmer/studying for programming for several
        years
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/SaDi_BRo"
          >
            <ArrowIcon />
            <p className="h-7">follow me on twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:isadi@email.com"
          >
            <ArrowIcon />
            <p className="h-7">get email</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
