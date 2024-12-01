"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

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

        <div style={styles.container}>
        <section style={styles.section}>
          <h1 style={styles.title}>Contact Me</h1>

          <div style={styles.contactInfo}>
          <div style={styles.socialIcons}>
    <a
      className="social-icon"
      href="https://www.linkedin.com/in/fernando-guillen-aroche/"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.iconLink}
    >
      <Image
        src="/image/linkedin-icon.png"
        alt="LinkedIn"
        width={210}
        height={100}
        style={styles.imageIcon}
      />
      
    </a>
    <a
      className="social-icon"
      href="https://github.com/Fernandogaroche"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.iconLink}
    >
      <Image
        src="/image/github-icon.png"
        alt="GitHub"
        width={210}
        height={100}
        style={styles.imageIcon}
      />
    </a>
    <a
      className="social-icon"
      href="mailto:fernandogaroche@gmail.com"
      style={styles.iconLink}
    >
      <Image
        src="/image/email-icon.png"
        alt="Email"
        width={210}
        height={100}
        style={styles.imageIcon}
      />
    </a>
  </div>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />

            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />

            <label htmlFor="message" style={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.textarea}
              required
            ></textarea>

            <button type="submit" style={styles.button}>
              Send Message
            </button>

            {isSubmitted && (
              <p style={styles.successMessage}>
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
          </form>
        </section>

        <footer style={styles.footer}>
          <p>
            &copy; {new Date().getFullYear()} Fernando Guillen. All rights
            reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    margin: "0 auto",
    maxWidth: "800px",
    backgroundColor: "#f5f5f5",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  profileImage: {
    borderRadius: "50%",
  },
  navLink: {
    textDecoration: "none",
    color: "#0070f3",
    marginLeft: "15px",
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#bd5d38",
  },
  description: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#555",
    marginBottom: "20px",
  },
  contactInfo: {
    textAlign: "left",
    marginBottom: "20px",
    lineHeight: "1.8",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    height: "100px",
    resize: "none",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  successMessage: {
    marginTop: "15px",
    color: "green",
    fontSize: "1rem",
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "0.8rem",
    color: "#aaa",
  },
  contactInfo: {
    textAlign: "center",
    marginTop: "20px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  iconLink: {
    color: "#0070f3",
    textDecoration: "none",
    fontSize: "1.5rem",
    transition: "color 0.3s",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#0070f3",
  },
  imageIcon: {
    width: "50px",
    height: "50px",
  },
};
