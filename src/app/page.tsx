import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  FacebookIcon,
  RedditIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpg";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I&apos;m Mike Frieze. I live in Metro Detroit, where I develop
            UIs for the web.
          </h1> */}
          {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I&apos;m Mike Frieze. I live in Metro Detroit, where I build
            apps for the web.
          </h1> */}
          {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I&apos;m Mike Frieze. Based in Metro Detroit, I develop UIs for
            the web.
          </h1> */}
          {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I&apos;m Mike Frieze. Web developer in Metro Detroit.
          </h1> */}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I&apos;m Mike Frieze. Living and coding in Metro Detroit.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My journey into web development began with a spark of curiosity at
              the age of 23, leading me down an unexpected path that blossomed
              into a fulfilling career. Eager to further develop my skills, I
              decided to pursue a degree in Computer Science, which eventually
              led to my first job as a Java developer working on the student
              portal at Oakland University.
            </p>
            <p>
              Having transitioned from Java to front-end development, I now
              utilize JavaScript and innovative technologies such as React. My
              focus is on building intuitive user interfaces and dynamic web
              solutions that deliver exceptional user experiences.
            </p>
            <p>
              Outside of coding, my interests include{" "}
              <a
                target="_blank"
                href="https://soundcloud.com/mikefrieze88/something-i-made-in-2016"
                className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              >
                playing guitar
              </a>
              , listening to a variety of music genres, immersing myself in PC
              games like &rdquo;Star Citizen&rdquo; and &rdquo;Crusader Kings
              3&rdquo;, and cherishing moments with{" "}
              <a
                target="_blank"
                href="https://kaylafoister.weebly.com/"
                className="font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              >
                my partner
              </a>{" "}
              since 2010.
            </p>
            <p>
              Curious about how we can work together or just want to chat? Send
              me an email or connect with me on platforms like X, Reddit, or
              Facebook.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/MichaelFrieze" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://github.com/MichaelFrieze"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.reddit.com/user/michaelfrieze/"
              icon={RedditIcon}
              className="mt-4"
            >
              Follow on Reddit
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/frieze.dev"
              icon={FacebookIcon}
              className="mt-4"
            >
              Follow on Facebook
            </SocialLink>
            {/* <SocialLink
              href="https://www.linkedin.com/in/michaelfrieze"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink> */}
            <SocialLink
              href="mailto:mike@frieze.dev"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mike@frieze.dev
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
