import Link from "next/link";

interface HyperlinkProps {
  text: string;
  url: string;
  className?: string;
}

export default function Hyperlink({ text, url, className }: HyperlinkProps) {
  return (
    <Link
      href={url}
      className={`text-accent hover:underline ${className || "mx-1"}`}
    >
      {text}
    </Link>
  );
}
