import React from "react";
import Social from "@components/Social";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Social />

        <div className="post-date">
          {/* <Link to="/about">Sally Oh | devlog</Link> */}
          Sally Oh | devlog
        </div>
      </footer>
    </>
  );
};

export default Footer;
