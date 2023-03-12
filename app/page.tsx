import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Sayidulloh Abbasov</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        I am a web developer
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt="Sayidulloh Abbasov"
          className="rounded-full"
          src="/avatar.jpg"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
