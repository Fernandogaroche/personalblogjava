"use client"; // Ensures client-side rendering

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function ApiTester() {
  const apiKey = "mdxug0LmaFudtt7E/mL93Q==RI8rHcdU9g2cFQUj";
  const [mortgageRates, setMortgageRates] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  // Inputs for dynamic API calls
  const [country, setCountry] = useState("CA");
  const [year, setYear] = useState("2024");

  // Fetch Mortgage Rates
  const fetchMortgageRates = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/mortgagerate", {
        headers: { "X-Api-Key": apiKey },
      });
      const data = await response.json();
      setMortgageRates(data);
    } catch (error) {
      console.error("Error fetching mortgage rates:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Holidays
  const fetchHolidays = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/holidays?country=${country}&year=${year}&type=public_holiday`,
        { headers: { "X-Api-Key": apiKey } }
      );
      const data = await response.json();
      setHolidays(data);
    } catch (error) {
      console.error("Error fetching holidays:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Joke
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
      const data = await response.json();
      setJoke(data.joke || data.setup + " " + data.delivery);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial data fetch
    fetchMortgageRates();
    fetchHolidays();
    fetchJoke();
  }, []);

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
      <div className="subheading mb-3">
        <p style={styles.title} >API Integration Page</p>
      </div>
        
        {/* Mortgage Rates Section */}
        <div style={styles.section}>
          <strong><p style={styles.title2}>Mortgage Rates</p></strong>
          {loading ? (
            <p style={styles.loading}>Loading...</p>
          ) : mortgageRates.length > 0 ? (
            <ul style={styles.list}>
              {mortgageRates.map((rate, index) => (
                <li key={index} style={styles.listItem}>
                  <strong>Week:</strong> {rate.week} <br />
                  <strong>30-Year Rate:</strong> {rate.frm_30}% <br />
                  <strong>15-Year Rate:</strong> {rate.frm_15}%
                </li>
              ))}
            </ul>
          ) : (
            <p>No mortgage rates available.</p>
          )}
        </div>

        {/* Holidays Section */}
        <div style={styles.section}>
        <strong><p style={styles.title2}>Holidays</p></strong>
          <div style={styles.inputs}>
            <input
              style={styles.input}
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value.toUpperCase())}
              placeholder="Country Code (e.g., CA)"
            />
            <input
              style={styles.input}
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
            />
            <button onClick={fetchHolidays} style={styles.button}>
              Get Holidays
            </button>
          </div>
          {loading ? (
            <p style={styles.loading}>Loading...</p>
          ) : holidays.length > 0 ? (
            <ul style={styles.list}>
              {holidays.map((holiday, index) => (
                <li key={index} style={styles.listItem}>
                  <strong>{holiday.name}</strong> - {holiday.date}
                </li>
              ))}
            </ul>
          ) : (
            <p>No holidays found.</p>
          )}
        </div>

        {/* Joke Section */}
        <div style={styles.section}>
        <strong><p style={styles.title2}>Programming Joke</p></strong>
          {loading ? (
            <p style={styles.loading}>Loading...</p>
          ) : (
            <p style={styles.result}>{joke || "No joke available."}</p>
          )}
          <button onClick={fetchJoke} style={styles.button}>
            Get New Joke
          </button>
        </div>

        <Link href="/" style={styles.link}>
          Back to Home
        </Link>
      </div>
    </>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#bd5d38",
  },
  title2: {
    textAlign: "left",
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#bd5d38",
  },
  section: {
    marginBottom: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  inputs: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  loading: {
    color: "#555",
    fontStyle: "italic",
  },
  result: {
    fontSize: "18px",
    marginTop: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    marginTop: "10px",
  },
  listItem: {
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  link: {
    display: "block",
    marginTop: "20px",
    textAlign: "center",
    textDecoration: "none",
    color: "#007bff",
  },
};
