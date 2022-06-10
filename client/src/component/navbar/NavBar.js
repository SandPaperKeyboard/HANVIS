import classes from './NavBar.module.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default NavBar;



/*
const Header = () => (
    <div className="Header">
        <Link to="/" className="Header-logo">
            <img src={hanvisLogo} className="Header-root" alt="HANVIS"/>
        </Link>
        <div className="Header-nav">
            <a href="http://www.hannam.ac.kr/kor/main/" target="_blank" rel="noopener noreferrer">
                <img src={homeLogo} className="Header-link" alt="한남대학교"/>
            </a>
            <a href="https://my.hnu.kr/html/main/sso.html" target="_blank" rel="noopener noreferrer">
                <img src={hiporLogo} className="Header-link" alt="하이포탈"/>
            </a>
            <a href="https://hiclass.hannam.ac.kr/learningx/main" target="_blank" rel="noopener noreferrer">
                <img src={hiclLogo} className="Header-link" alt="하이클래스"/>
            </a>
            <Link to="/service_center">
                <img src={scLogo} className="Header-link" alt="고객센터"/>
            </Link>
        </div>
    </div>
)
*/