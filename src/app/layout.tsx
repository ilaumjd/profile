import { accounts } from "./_utils/accounts";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

export const metadata = {
  title: "My Profile",
  description: "Ilham Aulia Majid's personal playground.",
};

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
        <header className="bg-background shadow sticky top-0 z-50">
          <nav className="container mx-auto p-4 flex justify-between">
            <h1 className="text-2xl font-bold">Ilham AM</h1>
            <div className="space-x-4">
              <Link href="/" className="text-accent hover:underline">
                Home
              </Link>
              <Link href="/resume" className="text-accent hover:underline">
                Resume
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-background shadow mt-8 text-center text-base text-secondary md:fixed md:bottom-0 md:left-0 md:right-0">
          <div className="container mx-auto p-4">
            <div className="flex justify-center space-x-4 mt-2">
              {accounts.map((account) => (
                <Link
                  className="text-accent hover:underline"
                  href={account.link}
                  key={account.link}
                >
                  {account.name}
                </Link>
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
