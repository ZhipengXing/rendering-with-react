import React from "react";
import "./Header.css";

function Header({ name, imageSrc, birthday }) {
  return (
    <>
      <img src={imageSrc} />
      <h1>{name}</h1>
      <h2>{birthday}</h2>
    </>
  );
}

export default Header;
