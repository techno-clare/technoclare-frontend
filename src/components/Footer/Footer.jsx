import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Column 1: Logo Section */}
        <div className={styles.column}>
          <div className={styles.logoSection}>
            <img
              src="/path-to-your-logo.png"
              alt="TechnoClare Logo"
              className={styles.footerLogo}
            />
            <h2>TECHNOCLARE</h2>
          </div>
        </div>

        {/* Column 2: Main Links */}
        <div className={styles.column}>
          <ul className={styles.footerList}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Account Links */}
        <div className={styles.column}>
          <ul className={styles.footerList}>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
            <li>
              <a href="/freelancing">Freelancing</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Subscribe and Social Icons */}
        <div className={styles.column}>
          <div className={styles.footerSubscribe}>
            <input type="email" placeholder="Email" />
            <button className={styles.subscribeBtn}>SUBSCRIBE</button>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright &copy; 2024 All Rights Reserved</p>
        {/* <a href="#" className={styles.scrollUp}>
          <FontAwesomeIcon icon={faArrowUp} />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
