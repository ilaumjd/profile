import Image from "next/image";
import Link from "next/link";
import React from "react";
import { accounts } from "./_utils/accounts";

export default function Home() {
  return (
    <section className="text-center mt-10">
      <Image
        src="/assets/photo.jpg"
        alt={""}
        className="w-50 h-50 rounded-full mx-auto"
        width={1000}
        height={1000}
      />
      <h3 className="text-xl font-semibold mt-4">Ilham Aulia Majid</h3>
      <div className="flex justify-center mt-4 space-x-4">
        {accounts.map((account) => (
          <Link href={account.link} key={account.link}>
            <Image
              src={account.src}
              alt={""}
              className="w-6 h-6"
              width={0}
              height={0}
            />
          </Link>
        ))}
      </div>
      <p className="text-lg text-gray-700 mt-4 max-w-lg mx-auto">
        {`Hi, I'm a software engineer with ${new Date().getFullYear() - 2020}+ YoE, focused on mobile development and cloud services. I enjoy solving complex challenges and building effective solutions.`}
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
