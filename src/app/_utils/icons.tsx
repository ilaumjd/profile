import { FaGithub, FaLinkedin } from "react-icons/fa";

interface IconsProps {
  name: string;
  size: number;
}

export default function Icon({ name, size }: IconsProps) {
  switch (name.toLowerCase()) {
    case "linkedin":
      return <FaLinkedin size={size} />;
    case "github":
      return <FaGithub size={size} />;
    default:
      return null;
  }
}
