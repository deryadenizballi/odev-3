import { Link } from "react-router-dom";
import mainLogo from'./Home.jpg';
function Home() {
  return (
    <div>
      <div>
        <p>Anasayfa sayfa</p></div>
      <img  src={mainLogo}  alt="fireSpot"/>

      <Link to="/About">Hakkımızda Sayfasına Git</Link>
    </div>
  );
}

export default Home;
