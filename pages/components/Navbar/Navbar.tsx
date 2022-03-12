import React, { useEffect, useState } from "react";
import styles from "../../../styles/global.module.scss";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Avada:
          </a>
          {/* <div> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                onClick={() => setActiveTab("home")}
                className={`nav-link ${activeTab === "home" && "active"}`}
                aria-current="page"
                href="/home"
              >
                Home
              </a>
              <a
                onClick={() => setActiveTab("features")}
                className={`nav-link ${activeTab === "features" && "active"}`}
                href="#"
              >
                Features
              </a>
              <a
                onClick={() => setActiveTab("shortcuts")}
                className={`nav-link ${activeTab === "shortcuts" && "active"}`}
                href="#"
              >
                Shortcuts
              </a>
              <a
                onClick={() => setActiveTab("pages")}
                className={`nav-link ${activeTab === "pages" && "active"}`}
                href="#"
              >
                Pages
              </a>
              <a
                onClick={() => setActiveTab("portfolio")}
                className={`nav-link ${activeTab === "portfolio" && "active"}`}
                href="#"
              >
                Portfolio
              </a>
              <a
                onClick={() => setActiveTab("blog")}
                className={`nav-link ${activeTab === "blog" && "active"}`}
                href="#"
              >
                Blog
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
