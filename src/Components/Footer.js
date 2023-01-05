import React from "react";

import { FooterDataLinks } from "./FooterDataLinks";

const FooterLinks = ({ title, links }) => {
  console.log(`${title}`);
  console.log(`${links}`);

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {links &&
          links.map((link, index) => <li key={`${link + index}`}>{link}</li>)}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
        width: "100%",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          //   padding: "40px 0",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <FooterLinks title={"Quick Links"} links={FooterDataLinks[0]} />
        <FooterLinks
          title={"Information"}
          links={FooterDataLinks[2]}
        />
        <FooterLinks title={"Support"} links={FooterDataLinks[3]} />
        <FooterLinks title={"Contact Us"} links={FooterDataLinks[4]} />
      </div>
    </div>
  );
};

export default Footer;
