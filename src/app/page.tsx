import Image from "next/image";
import Link from "next/link";
import React from "react";
import { accounts } from "./_utils/accounts";
import Icon from "./_utils/icons";
import { navigations } from "./_utils/navigations";

export default function Home() {
  return (
    <section className="text-center mt-6">
      <Image
        src="/assets/photo.jpg"
        alt={""}
        className="w-50 h-50 rounded-full mx-auto"
        width={1000}
        height={1000}
      />
      <h3 className="text-2xl font-semibold mt-4">Ilham Aulia Majid</h3>
      <div className="flex justify-center mt-4 space-x-4">
        {accounts.map((account) => (
          <Link href={account.link} key={account.link}>
            <Icon name={account.name} size={24} />
          </Link>
        ))}
      </div>
      <p className="text-secondary mt-4 max-w-lg mx-auto">
        {`Hi, I'm a software engineer with ${new Date().getFullYear() - 2020}+ YoE with strong expertise on mobile development, cloud services, and operational automation. Experienced on collaboration accross different timezones to deliver high-quality products. I enjoy solving complex challenges and building effective solutions.`}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {navigations.slice(1).map((navigation, index) => (
          <Link
            href={navigation.href}
            key={index}
            className="bg-accent text-background py-3 px-6 rounded-full hover:bg-background hover:text-accent hover:border-2 hover:border-accent"
          >
            {navigation.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
