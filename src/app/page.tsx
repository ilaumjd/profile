import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="text-center mt-10">
      <h2 className="text-4xl font-semibold mt-4">Hello</h2>
      <h3 className="text-xl font-semibold mt-4">Ilham Aulia Majid</h3>
      <div className="flex justify-center mt-4 space-x-4">
        <Link href="https://linkedin.com/in/ilaumjd">
          <Image
            src="/assets/linkedin.svg"
            alt={""}
            className="w-6 h-6"
            width={0}
            height={0}
          />
        </Link>
        <Link href="https://github.com/ilaumjd">
          <Image
            src="/assets/github.svg"
            alt={""}
            className="w-6 h-6"
            width={0}
            height={0}
          />
        </Link>
      </div>
      <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
        {`I'm a software engineer skilled in problem-solving, focused on mobile
        development and cloud solutions. Enjoying complex challenges and
        building solutions.`}
      </p>
      <div className="mt-6">
        <a
          href="/resume"
          className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
