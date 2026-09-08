import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const items = [
  "Home",
  "About Us",
  "How it Works",
  "Shop",
  "Calculator",
  "Contact Us",
  "Partner With Us",
  "FAQs",
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/shop" className="brand">
        <span className="brand-mark">1Fi</span>
      </Link>

      <nav>
        {items.map((label) =>
          label === "Shop" ? (
            <NavLink
              key={label}
              to="/shop"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {label}
            </NavLink>
          ) : (
            <a
              key={label}
              href={
                label === "How it Works"
                  ? "/marketplace#how-it-works"
                  : "#"
              }
              className="nav-link"
            >
              {label}
            </a>
          )
        )}
      </nav>

      <Link to="/marketplace" className="button button-small">
        Shop Now
        <ArrowUpRight size={17} />
      </Link>
    </header>
  );
}