import type { Metadata } from 'next';

function Link({ text, link }: { text: string; link: string }) {
  return (
    <a
      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 text-neutral-500 underline"
      href={link}
    >
      {text}
    </a>
  );
}

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function Uses() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, videos, and music.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 className="mt-4 mb-1" id="coding">
          Coding
        </h3>
        <ul className="ml-5 list-disc text-neutral-500">
          <li>
            My editor of choice is&nbsp;
            <Link
              text="Visual Studio Code"
              link="https://code.visualstudio.com/"
            />
            &nbsp;with a giant pile of&nbsp;
            <Link text="extensions" link="https://howivscode.com/SaDi-BRo" />.
          </li>
          <li>
            I am currently using&nbsp;
            <Link
              text="One Dark Pro"
              link="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme"
            />
            &nbsp;as my theme.
          </li>
          <li>
            <Link
              text="Material"
              link="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
            />
            &nbsp;is currently my icon theme of choice.
          </li>
        </ul>
        <h3 className="mt-4 mb-1" id="software">
          Terminal
        </h3>
        <ul className="ml-5 list-disc text-neutral-500">
          <li>I just use native terminal when I'm on Unix.</li>
          <li>
            <Link
              link="https://github.com/PowerShell/PowerShell"
              text="PowerShell"
            />
            &nbsp;when I'm on Windows.
          </li>
        </ul>
        <h3 className="mt-4 mb-1" id="software">
          Desktop Apps
        </h3>
        <ul className="ml-5 list-disc text-neutral-500">
          <li>
            I prefer <Link link="https://google.com/chrome" text="Chrome" />
            &nbsp;Edition for both browsing and development.
          </li>
          <li>
            <Link link="https://www.postman.com/" text="Postman" />
            &nbsp;for API development and testing.
          </li>
          <li>
            <Link link="https://www.figma.com/" text="Figma" />
            &nbsp;mainly for inspecting designs.
          </li>
          <li>
            <Link link="https://discord.com/" text="Discord" />
            &nbsp;and&nbsp;
            <Link link="https://telegram.org/" text="Telegram" />
            &nbsp;for messaging or calls.
          </li>
          <li>
            <Link link="https://www.spotify.com/" text="Spotify" /> for music.
          </li>
        </ul>
        <h3 className="mt-4 mb-1" id="other-tech">
          Desk Setup
        </h3>
        <ul className="ml-5 list-disc text-neutral-500">
          <li>
            Laptop:{' '}
            <Link
              link="https://www.lenovo.com/lt/lt/laptops/lenovo/g-series/g505/"
              text="Lenovo G505"
            />
            &nbsp;15.6" AMD
          </li>
          <li>
            Processor:{' '}
            <Link
              link="https://www.amd.com/en/support/apu/amd-series-processors/amd-a4-series-apu-for-desktops/a4-5000-radeon-hd-8330"
              text="AMD A4"
            />
          </li>
          <li>RAM: 4GB</li>
        </ul>
        <h3 className="mt-4 mb-1" id="other-tech">
          Other Tech
        </h3>
        <ul className="ml-5 list-disc text-neutral-500">
          <li>Apple Airpods Pro</li>
          <li>Apple Watch</li>
          <li>Redmi Note 10 (5G)</li>
        </ul>
      </div>
    </section>
  );
}
