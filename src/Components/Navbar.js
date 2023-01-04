import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid black",
      }}
    >
      <h2>Logo</h2>
      {/* Logo img */}
      {/* <div>
          <img />
        </div> */}

      <ul
        style={{
          display: "flex",
          textDecoration: "none",
          listStyle: "none",
          fontSize: "24px",
          gap: "20px",
        }}
      >
        <li>Home</li>
        <li>Ocassions</li>
        <li>Flowers</li>
        <li>Combinations</li>
        <li>Cakes</li>
        <li>Gifts</li>
        <li>Blogs</li>
      </ul>

      <ul
        style={{
          display: "flex",
          textDecoration: "none",
          listStyle: "none",
          fontSize: "24px",
          gap: "20px",
        }}
      >
        <li>cart</li>
        <li>search</li>
      </ul>
    </nav>
  );
};

export default Navbar;
