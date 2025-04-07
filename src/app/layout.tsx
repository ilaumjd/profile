import { accounts } from "./_utils/accounts";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { navigations } from "./_utils/navigations";
import Hyperlink from "./_utils/hyperlink";
import getMetadata from "./_utils/metadata";

export const metadata = getMetadata();

const roboto = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen flex flex-col text-lg`}
      >
        {/* Header */}
        <header className="bg-background shadow md:sticky top-0 z-50">
          <nav className="container mx-auto p-4 md:px-30 flex justify-center md:justify-between">
            <Link
              href="/"
              className="text-2xl text-accent font-bold hover:text-accent hidden sm:block"
            >
              Ilham Aulia Majid
            </Link>
            <div className="space-x-4">
              {navigations.map((navigation, index) => (
                <Link
                  href={navigation.href}
                  key={index}
                  className="text-accent hover:underline"
                >
                  {navigation.name}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-8 md:px-30">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-background shadow mt-8 text-center text-sm text-secondary md:fixed md:bottom-0 md:left-0 md:right-0">
          <div className="container mx-auto p-4">
            <div className="flex justify-center space-x-4">
              {accounts.map((account) => (
                <Hyperlink
                  text={account.name}
                  url={account.link}
                  className="text-accent hover:underline"
                  key={account.link}
                />
              ))}
            </div>
            <p className="mt-2">
              © 2024-{new Date().getFullYear()} by Ilham Aulia Majid
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
