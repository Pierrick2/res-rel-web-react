import "../styles/header.css";
import logo from "../assets/resre_logo_2.png";

function Header() {
  const title = "Ressources relationnelles";
  return (
    <div className="header">
      <img src={logo} alt="Logo res rel" className="header-logo" />
      <h1 className="header-title">{title}</h1>;
    </div>
  );
}

export default Header;
