export default function getMetadata(prefix?: string | null) {
  let title = "Ilham Aulia Majid";
  if (prefix) {
    title = `${prefix} - ${title}`;
  }
  return {
    title,
    description: "Ilham Aulia Majid's personal playground.",
  };
}
