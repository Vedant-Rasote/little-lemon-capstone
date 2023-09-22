import React from "react";
import headerLogo from "./images/Asset 16@4x.png";

const Header = () => {
  return (
    <header>
      <nav
        class="navbar navbar-expand-lg rounded border-bottom"
        aria-label="navbar"
      >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-lg-flex" id="navbar">
          <a class="navbar-brand col-lg-3 me-0" href="#home">
            <img width="200" src={headerLogo} />
          </a>
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li class="nav-item">
              <a class="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#reservation">
                Reservation
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#order_online">
                Order Online
              </a>
            </li>
          </ul>
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <button
              class="btn btn-light rounded-circle p-3 lh-1 mx-1 border"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
              </svg>
            </button>
            <button class="btn btn-dark rounded-pill px-3 mx-1" type="button">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
