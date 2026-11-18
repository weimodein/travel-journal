import globeIcon from "../assets/images/globe.png";

function Header() {
  return (
    <header>
      <img src={globeIcon} alt="Globe icon" />
      <h1>my travel journal.</h1>
    </header>
  );
}

export default Header;
