import React from "react";
import Hyperlink from "../_utils/hyperlink";

export default function About() {
  return (
    <section className="md:mb-30">
      <h2 className="text-3xl font-semibold mb-6">About</h2>
      <p className="text-lg mt-4 space-y-4 leading-relaxed">
        <span className="block">
          Hello, I am <strong>Ilham Aulia Majid</strong> 👋
        </span>

        <span className="block">
          {`A software engineer with ${new Date().getFullYear() - 2020}+ years of experience. I started my journey as a mobile developer but right now I'm doing a lot of things outside of the mobile world. I love doing exploration and always open to learn new things.`}
        </span>

        <span className="block">
          {`Outside of work, I enjoy watching anime and playing video games. I also love
          going for bike rides and having walks (because I'm bad at running :p)
          and enjoying the pain and joy that comes with it. Those are the first
          thing I usually do in the morning before doing chores. Yes, I'm a morning person and I
          don't have any skill to sleep in the morning, unless I got real tired from the previous day.`}
        </span>

        <span className="block">
          This is my personal website. Mainly used for showing my
          <Hyperlink text={"Portfolio"} url={"/showcase"} />
          and
          <Hyperlink text={"Resume"} url={"/resume"} className="ml-1" />, but I
          also use this as my place to experiment and try things out. Especially
          when I have a free time and feel motivated.
          {` Yet, I'm still figuring out what are the other things I can do on this
          website.`}
        </span>

        <span className="block">
          This website is built using
          <Hyperlink text={"Next.js"} url={"https://nextjs.org/"} />
          and
          <Hyperlink text={"Tailwind CSS"} url={"https://tailwindcss.com/"} />-
          currently two of the most popular frameworks for building modern
          websites. The font used here is
          <Hyperlink
            text={"Inter"}
            url={"https://fonts.google.com/specimen/Inter"}
            className="ml-1"
          />
          , which I got from Google Fonts using Next.js font optimization.
        </span>

        <span className="block">
          I built this website using
          <Hyperlink
            text={"Neovim"}
            url={"https://neovim.io/"}
            className="ml-1"
          />
          , which has always been my editor of choice. I run it inside my
          terminal
          <Hyperlink
            text={"Ghostty"}
            url={"https://ghostty.org/"}
            className="ml-1"
          />
          , combined with
          <Hyperlink text={"tmux"} url={"https://github.com/tmux/tmux/wiki"} />
          for managing sessions. My go-to coding fonts are either
          <Hyperlink
            text={"Intel One Mono"}
            url={
              "https://www.intel.com/content/www/us/en/company-overview/one-monospace-font.html"
            }
          />
          or
          <Hyperlink
            text={"JetBrains Mono"}
            url={"https://www.jetbrains.com/lp/mono/"}
            className="ml-1"
          />
          . While I experiment with various colorschemes, I always come back to
          <Hyperlink
            text={"Rosé Pine"}
            url={"https://rosepinetheme.com/"}
            className="ml-1"
          />
          . Even this website theme is inspired by it, both in dark and light
          mode.
        </span>

        <span className="block">
          I work mostly on macOS, but I always have a Linux machine available as
          my personal device. Currently, I run
          <Hyperlink
            text={"Void Linux"}
            url={"https://voidlinux.org/"}
            className="ml-1"
          />
          , not a widely popular distro, but it meets my needs perfectly. On top
          of it, I choose
          <Hyperlink text={"Niri"} url={"https://github.com/YaLTeR/niri"} />
          as my window manager/compositor, which provides a unique scrolling
          window manager experience instead of traditional floating or hyped
          tiling experiences.
        </span>

        <span className="block">
          Besides the default one shipped with the OS, I also use
          <Hyperlink text={"Nix"} url={"https://github.com/NixOS/nix"} />
          package manager. I love it because I can use it on both Linux and
          macOS. The package manager itself is declarative and reproducible,
          allowing me to easily replicate my setup across machines, even with
          different operating systems. I just need to write the configuration
          once and apply it anywhere.
          {` That's why I also always prefer apps that offer cross-platform support.`}
        </span>

        <span className="block">
          Finally, if you want to get in touch, you can find me through the
          social media links at the bottom of this page. Alternatively, feel
          free to email me at
          <Hyperlink
            text={"ilaumjd@gmail.com"}
            url={"mailto:ilaumjd@gmail.com"}
            className="ml-1"
          />
          . Thank you for the visit!
        </span>
      </p>
    </section>
  );
}
