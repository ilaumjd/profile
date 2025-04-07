import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Showcase() {
  const projects = [
    {
      name: "pende.cc",
      description:
        "Make your long link pendecc! A simple URL shortener website.",
      href: "https://pende.cc",
      stacks: ["Next.js", "Go", "PostgreSQL"],
    },
    {
      name: "Howto",
      description:
        "Find coding answers directly from terminal by scraping from StackOverflow.",
      href: "https://github.com/ilaumjd/howto",
      stacks: ["Swift", "CLI"],
    },
  ];
  return (
    <section className="md:mb-30">
      <h2 className="text-3xl font-semibold mb-4">Showcase</h2>

      {projects.map((project, index) => (
        <Link
          className="mt-4 flex flex-col text-lg border border-gray-300 p-4 md:p-6 rounded-lg hover:bg-secondary hover:text-background"
          key={index}
          href={project.href}
          target="_blank"
        >
          <strong className="text-2xl mb-2">
            {project.name}
            <GoArrowUpRight className="inline-block align-middle" />
          </strong>
          {project.description}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.stacks.map((stack, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm md:text-base bg-tertiary text-background rounded-full"
              >
                {stack}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </section>
  );
}
