import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><a href="mailto:mohamedinfakstc@gmail" className="email">mohamedinfakstc@gmail.com</a></span>
        <div className="f-icons">   
          <a href="https://www.instagram.com/mohamedinfakstc/" target="_blank" rel="noreferrer"><Insta color="white" size={"3rem"}  /> </a>
          <a href="https://web.facebook.com/mohammed.infak.716/" target="_blank" rel="noreferrer"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/mohamedinfak" target="_blank" rel="noreferrer"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
