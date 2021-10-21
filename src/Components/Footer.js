import React from "react";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FaReact, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Made with love <FcLike className="icon" /> and some React{" "}
        <FaReact className="react-icon icon" /> by{" "}
        <a
          href="https://github.com/dacitto"
          className="github-link"
          target="_blank"
          rel="noreferrer"
        >
          Salah Eddine Daci <FaGithub className="icon" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
