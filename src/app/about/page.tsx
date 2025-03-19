import React from "react";

export default function Home() {
  return (
    <section className="md:mb-30">
      <h2 className="text-3xl font-semibold mb-6">About</h2>
      <p className="text-xl mt-4 space-y-4 leading-relaxed">
        <span className="block">
          Hello, I am <strong>Ilham</strong> 👋
        </span>

        <span className="block">
          {`A software engineer with ${new Date().getFullYear() - 2020}+ years of experience. I started my journey as a mobile developer but right now I'm doing a lot of things outside of the mobile world. I love doing exploration and always open to learn new things.`}
        </span>

        <span className="block">
          {`Outside of work, I enjoy watching anime and playing games. I also love
          going for bike rides and having walks (because I cannot run :p)
          and enjoying the pain and joy that comes with it. These are the first
          thing I usually do in the morning. Yes, I'm a morning person and I
          don't have any skill to sleep in the morning, unless I got real tired from the previous day.`}
        </span>

        <span className="block">
          {`This is my personal website. Mainly used for showing my Portfolio and
          Resume, but I also use this as my place to experiment and try things
          out. I'm still figuring out what the other thing I can do on this
          website.`}
        </span>

        <span className="block">
          This website is built using Next.js and TailwindCSS - two of the most
          popular frameworks for building modern websites. The font used here is
          Inter, which I got from Google Fonts using Next.js font optimization.
        </span>

        <span className="block">
          I built this website using Neovim, which has always been my editor of
          choice. I run it inside my terminal Ghostty, combined with tmux for
          managing sessions. My go-to coding fonts are either Intone Mono or
          JetBrains Mono. While I experiment with various colorschemes, I always
          come back to Rosé Pine. Even this website theme is inspired by it,
          both in dark and light mode.
        </span>

        <span className="block">
          I work mostly on macOS, but I always have a Linux machine available as
          my personal device. Currently, I run Void Linux, not a widely popular
          distro, but it meets my needs perfectly. On top of it, I run Niri as
          my window manager/compositor, which provides a unique scrolling window
          manager experience instead of traditional floating or hyped tiling
          experiences.
        </span>

        <span className="block">
          Besides the default packages from the distro, I also use the Nix
          package manager. I love it because I can use it on both Linux and
          macOS. The package manager itself is declarative and reproducible,
          allowing me to easily replicate my setup across machines, even with
          different operating systems. I just need to write the configuration
          once and apply it anywhere.
        </span>

        <span className="block">
          Finally, if you want to reach me, you can access one of the social
          media links at the bottom of this web page. Or just send me an email
          at ilaumjd@gmail.com. Thank you for the visit!
        </span>
      </p>
    </section>
  );
}
