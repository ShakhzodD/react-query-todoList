import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#a8a8", padding: "10px" }}
      >
        <Link className="mx-5" to="/">
          React Query Crud
        </Link>
        <Link className="mx-5" to="/create-book">
          + Add new book
        </Link>
        <Link className="mx-5" to="/update-book">
          update
        </Link>
        <Link className="mx-5" to="/table">
          table
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
