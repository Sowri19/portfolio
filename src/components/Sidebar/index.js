import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar =() => (
<div className="nav-bar">
    <Link className="logo" to ="/">
        <img src = {LogoS} alt="logo" />
        <img className='sub-logo' src = {LogoSubtitle} alt="Sowri" />
    </Link>
<nav>
    <NavLink exact = "true" activeclassname="active" to="/">
        {/* activeclassname is used to style the link */}
    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
    </NavLink>
    <NavLink exact = "true" activeclassname="active" className="about-link" to="/about">
        {/* activeclassname is used to style the link */}
    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
    </NavLink>
    <NavLink exact = "true" activeclassname="active" className="contact-link" to="/contact">
        {/* activeclassname is used to style the link */}
    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
    </NavLink>
</nav>
<ul>
    <li>
        <a target="_blank" rel= 'noreferrer' href='https://www.linkedin.com/in/sowri-sampath'>
            {/* _blank opens up the link in the new window */}
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
        </a>
        <a target="_blank" rel= 'noreferrer' href='https://github.com/Sowri19'>
            {/* _blank opens up the link in the new window */}
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
        </a>
        <a target="_blank" rel= 'noreferrer' href='https://www.instagram.com/sowriiii/'>
            {/* _blank opens up the link in the new window */}
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
        </a>
    </li>
</ul>
</div>
)

export default Sidebar;