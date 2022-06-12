import {Link} from "react-router-dom";
/*
import homeLogo from '../../img/HNU_Home_logo.png'
import hiclLogo from '../../img/HI-Class_logo.png'
import hiporLogo from '../../img/HI-Portal_logo.png'
import scLogo from '../../img/Service-Center_logo.png'
*/
import {motion} from 'framer-motion'

const NavLinks = (props) => {
  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="http://www.hannam.ac.kr/kor/main/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homepage
        </a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://my.hnu.kr/html/main/sso.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi-Portal
        </a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://hiclass.hannam.ac.kr/learningx/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi-Class
        </a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/service_center">Service Center</Link>
      </motion.li>
    </ul>
  );
}

export default NavLinks;

/*
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="http://www.hannam.ac.kr/kor/main/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={homeLogo} className="Header-link" alt="한남대학교" />
        </a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://my.hnu.kr/html/main/sso.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={hiporLogo} className="Header-link" alt="하이포탈" />
        </a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a
          href="https://hiclass.hannam.ac.kr/learningx/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={hiclLogo} className="Header-link" alt="하이클래스" />
        </a>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/service_center">
          <img src={scLogo} className="Header-link" alt="고객센터" />
        </Link>
      </motion.li>
    </ul>
*/