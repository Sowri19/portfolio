import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser,faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
</div>
)

export default Sidebar;