import Link from "next/link";

export default function AboutPage() {
    return (
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p>
          I&apos;m a <span className="font-bold">full stack developer</span> with a background in marine biology and molecular science.
          I enjoy translating complex data into elegant, accessible web tools and love working at the intersection of science, design, and technology.
        </p>
        <p>
          My work blends strong technical architecture with human-centered design. Outside of tech, I love crocheting, gardening, and restoring an old house.
        </p>
        <p>While I was a {" "}
          <Link
            href="/previous"
            className="text-blue-600 hover:underline hover:text-blue-800 font-semibold transition-colors"
          >
            molecular marine biologist
          </Link>
          , I had to write bash scripts, python scripts, and wrangle data in R to analyze massive amounts of DNA data that I stored in SQL relational databases.  Through this, I discovered a love of coding and found excuses to code up and automate as much of my life as possible.</p>

        <p> When the opportunity arose to jump from the lab to a tech role in 2020, I seized it. I was hired as a database administrator, but within 3 months, I taught myself JavaScript, the ArgGIS SDK, and React and was taking on projects as a full-stack developer.</p>

      <p> You can see from my long list of {" "}
          <Link
            href="/projects"
            className="text-blue-600 hover:underline hover:text-blue-800 font-semibold transition-colors"
          >
            projects
          </Link>
          {" "}completed since then that I&apos;ve been continuously learning and growing as a developer while handling multiple projects simultaneously.</p>
      </section>
    )
  }