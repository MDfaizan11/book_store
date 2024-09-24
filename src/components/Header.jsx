import React from "react";
import "../Style/header.css";
function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2>Admin Section </h2>
        </div>
        <div className="search_admin_section">
          {/* <div>
            <input type="search" placeholder="search here" />
          </div> */}
        </div>
      </header>
    </>
  );
}

export default Header;
