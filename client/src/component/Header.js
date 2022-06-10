import {Link} from "react-router-dom";

import hanvisLogo from '../img/HANVIS.gif';
import NavBar from "./navbar/NavBar";
/*
import homeLogo from '../img/HNU_Home_logo.png'
import hiclLogo from '../img/HI-Class_logo.png'
import hiporLogo from '../img/HI-Portal_logo.png'
import scLogo from '../img/Service-Center_logo.png'
*/

const Header = () => (
  <>
    <div className="Header">
      <Link to="/" className="Header-logo">
        <img src={hanvisLogo} className="Header-root" alt="HANVIS" />
      </Link>
      <div className="Header-nav">
        <NavBar />
      </div>
    </div>
  </>
);

export default Header;

/*
<div className="Header">
    <Link to="/" className="Header-logo">
      <img src={hanvisLogo} className="Header-root" alt="HANVIS" />
    </Link>
    <div className="Header-nav">
      <a
        href="http://www.hannam.ac.kr/kor/main/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={homeLogo} className="Header-link" alt="한남대학교" />
      </a>

      <a
        href="https://my.hnu.kr/html/main/sso.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={hiporLogo} className="Header-link" alt="하이포탈" />
      </a>

      <a
        href="https://hiclass.hannam.ac.kr/learningx/main"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={hiclLogo} className="Header-link" alt="하이클래스" />
      </a>

      <Link to="/service_center">
        <img src={scLogo} className="Header-link" alt="고객센터" />
      </Link>
    </div>
  </div>
*/