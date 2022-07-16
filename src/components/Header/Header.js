import React from "react";
import "./Header.css";

const Header = () => {
  // reload page when title clicked
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <header className="header">
      <h1 className="title" onClick={refreshPage}>
        Meme Generator
      </h1>
    </header>
  );
};
export default Header;
