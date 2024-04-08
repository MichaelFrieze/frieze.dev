import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: "Uses",
  description: "Software I use, devices I love, and other things I recommend.",
};

export default function Uses() {
  return (
    <>
      <SimpleLayout title="Software I use, devices I love, and other things I recommend.">
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="MacBook Air, M1, 16GB RAM">
              I was using an Intel-based MacBook Pro prior to this and the
              difference is night and day. The M1 chip is so much better.
              I&apos;ve owned this MacBook since 2021 and still have no reason
              to upgrade.
            </Tool>
            <Tool title="MINISFORUM HX80G, Ryzen 7 5800H, 32GB RAM, 1TB SSD, RX 6600M">
              As my primary Windows/Linux machine, this mini-PC packs a serious
              punch and works well as my gaming PC. It handles even demanding
              titles like Star Citizen without too many issues. While I tend to
              use my MacBook more for coding, this compact system is my go-to
              when I need to run Windows or Linux software for work.
            </Tool>
            <Tool title="GIGABYTE M27Q PRO: 27 inch 165Hz 1440P">
              This display is a great low-cost companion for the MacBook and the
              HX80G mini-PC. With its 2560 x 1440 resolution, 165Hz refresh
              rate, and AMD FreeSync support, it delivers an incredibly smooth
              and detailed gaming experience. The IPS panel ensures accurate
              colors and wide viewing angles, making it great for both work and
              play.
            </Tool>
            <Tool title="Sennheiser HD 560 S">
              For audio, I rely on my trusty pair of Sennheiser HD 560 S. These
              open-back headphones deliver an exceptional listening experience,
              whether I&apos;m listening to music, on a call with a client,
              gaming, or just casual entertainment. The detailed, neutral sound
              signature and wide soundstage make them great for critical
              listening, while the comfortable design keeps me immersed for long
              listening sessions.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              While I like using Vim, VS Code is my go-to code editor. The
              intuitive interface and vast ecosystem of extensions make VS Code
              an indispensable part of my development workflow. It&apos;s easy
              to customize and set up exactly how I like it. But beyond just the
              practical benefits, I genuinely enjoy using VS Code - the smooth
              experience and thoughtful design make it a pleasure to work with,
              whether I&apos;m tackling complex projects or just doing some
              quick coding.
            </Tool>
            <Tool title="Codeium">
              This is my favorite AI code generation tool for VS Code. I think
              it&apos;s a lot better than GitHub Copilot and it&apos;s free for
              individuals. This tool is seriously underrated.
            </Tool>
            <Tool title="Poimandres">
              This is my favorite dark theme for VS Code.
            </Tool>
            <Tool title="Monaspace">
              This superfamily of fonts are my go-to when coding. It was created
              by engineers at GitHub and designed with programmers in mind. A{" "}
              <em>mono</em>-spaced type usually suffers from an inherent problem
              of uneven texture, but Monaspace has a feature called texture
              healing that evens out the density and preserves the grid. There
              are 5 fonts to choose from and my favorite is Neon, which they
              call Neo-grotesque sans.
            </Tool>
            <Tool title="Pretty TypeScript Errors">
              I am not going to mention a lot of VS Code extensions here, but
              this one deserves a mention. It makes it so much easier to make
              sense of TypeScript errors.
            </Tool>
            <Tool title="Obsidian">
              This is what I used for note taking. I mostly just use it as a
              simple text editor for markdown and it&apos;s great for that
              purpose. I also like it because it stores all my notes as markdown
              files on my system.
            </Tool>
            <Tool title="iTerm2">
              I&apos;m honestly not even sure what features I get with this that
              aren&apos;t just part of the macOS Terminal but it&apos;s what I
              use.
            </Tool>
            <Tool title="Rectangle">
              This is what I used to move and resize windows in macOS using
              keyboard shortcuts and snap areas.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              This design tool seems to be the industry standard these days.
              It&apos;s great and I can&apos;t imagine using anything else.
            </Tool>
            <Tool title="Excalidraw">
              Excalidraw is an open-source, web-based drawing tool built with
              React. I use it for creating diagrams and wireframes.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              I use Notion to keep track of my tasks, projects, and more. It has
              a lot of features that I use, and I love it. I mostly use Obsidian
              for note taking, but I use Notion for everything else.
            </Tool>
            <Tool title="1Password">
              This password manager securely stores all my login credentials,
              allowing me to quickly and easily access the accounts and services
              I need without the hassle of remembering or repeatedly entering
              passwords. The seamless integration with my browsers and apps
              means I can autofill logins with a single click, saving me
              valuable time. Beyond just passwords, 1Password also helps me
              organize sensitive information like payment details, software
              licenses, crypto wallets, ssh keys, and secure notes.
            </Tool>
            <Tool title="Perplexity">
              Perplexity has become an essential productivity tool in my daily
              work. As an AI assistant, it helps me tackle all sorts of tasks -
              from research and analysis to helping me brainstorm ideas. I can
              quickly get concise, well-written and cited responses, saving me
              time compared to using traditional web searches.
            </Tool>
            <Tool title="Raindrop">
              As an all-in-one bookmark manager, it allows me to seamlessly save
              and organize content from across the web - whether it&apos;s
              articles, videos, PDFs, or just general webpages. But what I
              appreciate most is Raindrop&apos;s robust search capabilities,
              which let me quickly surface relevant bookmarks, even if I
              can&apos;t recall the exact title or URL.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
