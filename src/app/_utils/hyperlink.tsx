import Link from "next/link";
import { CgExternal } from "react-icons/cg";

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
      <CgExternal className="inline-block align-middle" />
    </Link>
  );
}
