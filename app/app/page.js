import Head from "next/head";
import Image from "next/image";
import styles from "./css/styles.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="Fernando Guillen" />
        <link rel="icon" type="image/x-icon" href="/image/favicon.ico" />
        <script
          src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
          crossOrigin="anonymous"
          async
        ></script>
        <link
          href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
          rel="stylesheet"
        />
        <link href="/css/styles.css" rel="stylesheet" />
      </Head>

      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="/">
          <span className="d-block d-lg-none">Fernando Guillen</span>
          <Image
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/image/profile.jpg"
            alt="Profile of Fernando Guillen"
            width={300}
            height={200}
            priority
          />
        </a>
        <Link href="./about" style={{ color: "white" }}>About</Link>
        <Link href="./portfolio" style={{ color: "white" }}>Portfolio</Link>
        <Link href="./blog" style={{ color: "white" }}>Blog</Link>
        <Link href="./contact" style={{ color: "white" }}>Contact</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            {[
              "about",
              "experience",
              "education",
              "skills",
              "interests",
              "awards",
            ].map((section) => (
              <li key={section}>
                <a
                  className="nav-link js-scroll-trigger"
                  href={`#${section}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0">
        <Section id="about">
          <h1 className="mb-0">
            Fernando <span className="text-primary">Guillen</span>
          </h1>
          <div className="subheading mb-5">
            3542 Bloor Street · Toronto, ON · (647) 767-3456 ·
            <a href="mailto:fernandogaroche@gmail.com">
              fernandogaroche@gmail.com
            </a>
          </div>
          <p className="lead mb-4">
          I am proficient in foundational programming concepts like variables, data types, control flow, and functions. 
          I am eager to apply these skills to real-world projects and learn more advanced techniques like object-oriented programming and data structures.
          </p>
        </Section>

        <hr className="m-0" />

        {/* Add similar reusable Section components for "experience", "education", "skills", "interests", and "awards". */}
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        async
      ></script>
      <script src="/js/scripts.js" async></script>
    </>
  );
}

function Section({ id, children }) {
  return (
    <section className="resume-section" id={id}>
      <div className="resume-section-content">{children}</div>
    </section>
  );
}