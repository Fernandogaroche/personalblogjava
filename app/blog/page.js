"use client";

import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Blockchain Beyond Cryptocurrency",
    description:
      "",
    image: "/image/cryp.jpg",
    content: `
      Blockchain technology is no longer limited to cryptocurrencies like Bitcoin and Ethereum. It is now revolutionizing 
        industries such as finance, supply chain, and healthcare by providing secure, decentralized, and tamper-proof systems. 
        Learn how smart contracts and decentralized applications (DApps) are shaping the future of digital interaction.
    `,
    video: "https://www.youtube.com/watch?v=agTwi4PJSC8", 
  },
  {
    id: 2,
    title: "Quantum Computing: The Next Frontie",
    description:
      "",
    image: "/image/q.jpg",
    content: `
      Quantum computing has the potential to solve complex problems that traditional computers cannot. Leveraging quantum bits
        (qubits), quantum computers are poised to revolutionize fields such as cryptography, material science, and artificial 
        intelligence. Dive into the basics of quantum mechanics and how they underpin this groundbreaking technology.
        
        https://bradenkelley.com/2022/01/quantum-computing-is-the-next-frontier-in-innovation/
    `,
    video: "https://www.youtube.com/watch?v=BDfc9RQeztU",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description:
      "",
    image: "/image/ia.jpg",
    content: `
      A technology that has such an enormous impact needs to be of central interest to people across our entire society. 
      But currently, the question of how this technology will get developed and used is left to a small group of entrepreneurs and engineers..
        
      https://ourworldindata.org/artificial-intelligence
    `,
    video: "https://www.youtube.com/watch?v=ad79nYk2keg",
  },
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

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
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
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
      
      <header className="page-section-heading text-center text-uppercase text-secondary mb-5">
      <div style={styles.container}>
        <br></br>
      <h1 style={styles.title}>Technology Articles</h1>
      <br></br>
      <div style={styles.articles}>
        {articles.map((article) => (
          <div
            key={article.id}
            style={styles.card}
            onClick={() => setSelectedArticle(article)}
          >
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={400}
              style={styles.image}
            />
        
            <strong><p className="mb-6">{article.title}</p></strong>
            <p className="d-flex flex-column flex-md-row justify-content-between mb-4">{article.description}</p>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedArticle(null)}
            >
              Close
            </button>
            <h2 style={styles.title}>{selectedArticle.title}</h2>
            <p>{selectedArticle.content}</p>
            {selectedArticle.video && (
              <iframe
                width="600"
                height="400"
                src={selectedArticle.video}
                title={selectedArticle.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
      <p></p>
      <Link href="/" style={styles.backLink}>
            Back to Home
          </Link>
    </div>
      </header>    
    </>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#bd5d38",
  },
  articles: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    borderRadius: "10px",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "700px",
    width: "100%",
  },
  closeButton: {
    backgroundColor: "#ff5252",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    float: "right",
  },
  video: {
    display: "block",
    maxWidth: "100%",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  backLink: {
    display: "inline-block",
    marginTop: "20px",
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
