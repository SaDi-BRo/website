import Navbar from '@/components/sidebar';
import QueryProvider from '@/components/queryprovider';
import { Playing } from '@/components/spotify';
import { fullName } from '@/lib/info';
import { jetBrainsMono } from './fonts';
import './globals.css';

export const metadata = {
  title: {
    default: fullName,
    template: '%s' + ' | ' + fullName,
  },
  description: 'Developer, writer, and creator.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <html
        lang="en"
        className={
          'text-black bg-white dark:text-white dark:bg-[#111010] ' +
          jetBrainsMono.className
        }
      >
        <head />
        <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
          <Navbar />
          <Playing />
          <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
            {children}
          </main>
        </body>
      </html>
    </QueryProvider>
  );
}
