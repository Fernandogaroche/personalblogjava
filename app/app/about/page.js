import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Head from "next/head";

export default function About() {
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

      <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">About Me</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="flex-grow-1">
                            <p>I'm an international student currently pursuing a Computer Programming Diploma at Georgian College, Ilac Campus. With a passion for technology and problem-solving, I'm eager to apply my skills to real-world projects. I'm also working as an Administrative Assistant to enhance my organizational and communication abilities.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="flex-grow-1">
                            <h3 className="mb-6">A Glimpse into My World</h3>
                            <p></p>
                            <p>As an international student at Georgian College, I'm excited to be part of a vibrant community of learners. My journey in the Computer Programming Diploma program has ignited my passion for technology. Beyond academics, I'm honing my professional skills as an Administrative Assistant, where I've gained valuable experience in organization, communication, and teamwork.</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="flex-grow-1">
                            <h3 className="mb-6">My Skills and Experience</h3>
                            <p></p>
                            <p> I'm a dedicated and results-oriented individual with a strong foundation in computer programming. My current studies at Georgian College, Ilac Campus, are equipping me with the necessary skills to excel in the tech industry. Additionally, my role as an Administrative Assistant has honed my organizational and communication abilities.</p>
                        </div>
                        
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
                        <div className="flex-grow-1">
                            <h3 className="mb-6">Programming Languages</h3>
                            <p></p>
                            <ul className="fa-ul mb-4">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            HTML5
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            CSS3
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Javascript
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            SQL
                        </li>
                    </ul>
                        </div>
                        
                    </div>

                </div>
            </section>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        async
      ></script>
      <script src="/js/scripts.js" async></script>
      <Link href="/">
            Back to Home
          </Link>
    </>
      );
}
