import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Profile",
  description: "Ilham Aulia Majid's personal playground.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        {/* Header */}
        <header className="bg-black shadow">
          <nav className="container mx-auto p-4 flex justify-between">
            <h1 className="text-2xl font-bold">Ilham AM</h1>
            <div className="space-x-4">
              <Link href="/" className="text-blue-500 hover:underline">
                About Me
              </Link>
              <Link href="/resume" className="text-blue-500 hover:underline">
                Resume
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer
          className={`
            bg-black shadow mt-8
            text-center text-sm text-gray-500
            ${
              // Apply fixed positioning on medium screens and above
              // Static positioning on small screens
              "md:fixed md:bottom-0 md:left-0 md:right-0"
            }
          `}
        >
          <div className="container mx-auto p-4">
            <p>© 2024-{new Date().getFullYear()} by Ilham Aulia Majid</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://github.com/ilaumjd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ilaumjd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
