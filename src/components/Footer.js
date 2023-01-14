import React from "react";

/* Styles */
import "./style.css";

/* Assets */
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import linkedin from "../assets/icons/linkedin.png";

/* Components */
import Email from "./Email.js";

class Footer extends React.Component {
  state = {
    email: undefined,
    success: "",
    error: "",
  };

  render() {
    /* Social media links */
    const INSTAGRAM_LINK = "https://www.instagram.com/cerevro.app";
    const FACEBOOK_LINK =
      "https://www.facebook.com/cerevroapp-113129837185081/?__tn__=kC-R&eid=ARCEYkMfzvI7Oxt0DPPK6KXBTiOqbGAZSDhTbIdSslDUUF0nS2UjTY8fX5Fwi-qcnKUC7amIUp1MZOyo&hc_ref=ARS5yxFDqshb3iJnFIEcN1-KvTntODOPg9I3Oyck9BrrTPLT9-b-yJOPfgHrJ1WYuws";
    const LINKEDIN_LINK = "https://www.linkedin.com/company/cerevro";

    return (
      <footer id="footer" className="bg-cerevro-linear-gradient mt-1 pb-0">
        <div className="container">
          <div className="row align-items-center h-100">
            <div className="col-8 col-lg-4 d-none d-md-block">
              <Email />
              <p className="mt-3 mb-2 text-left">
                De Latam con{" "}
                <span role="img" aria-label="orange heart">
                  🧡
                </span>{" "}
                para el mundo
              </p>
            </div>
            <div className="col-12 d-block d-md-none col-12 col-lg-4 mb-1 mt-2">
              <Email />
            </div>
            <div className="col-12 col-md-4"></div>
            <div className="col-12 col-md-4 col-lg-3">
              <h5 className="text-center">Conoce más de Cerevro</h5>
              <div className="row m-auto justify-content-center">
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="facebook de cerevro" />
                </a>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram de cerevro" />
                </a>
                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin de cerevro" />
                </a>
              </div>
            </div>
            <div className="col-12 d-block d-md-none">
              <p className="mt-4 mb-2 text-center">
                De Latam con{" "}
                <span role="img" aria-label="orange heart">
                  🧡
                </span>{" "}
                para el mundo
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
