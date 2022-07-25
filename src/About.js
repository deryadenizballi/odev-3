import { Link } from "react-router-dom";
import davsan from "./davsan.jpg";

function About() {
  return (
    <div>
      <p>Anasayfa sayfa</p>
      <img src={davsan} alt="fireSpot" />
      <Link to="/">Anasayfaya Git </Link>
    </div>
  );
}

export default About;
