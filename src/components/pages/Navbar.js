import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, SetClick] = useState(false);
  const handleClick = () => SetClick(!click);
  return (
    <div className="navbar">
      <div class="navbar-container container">
        <div class="navbar-logo">Tsepela</div>
        <div class="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
