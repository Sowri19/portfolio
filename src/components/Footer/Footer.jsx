import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTelegram, faSnapchat, faTwitter, faDiscord, faInstagram, faFacebook, faStackOverflow, faMedium, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
        <span className="primaryText">
        Let's make something <br />
        amazing together.
        </span>
        <span className="primaryText">
        Start by <a href="mailto:sowri1219@gmail.com">saying hi</a>
        </span>
        <span className="secondaryText">
        <a href="https://www.linkedin.com/in/sowri-sampath/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://telegram.org/sowriiii" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegram} /></a>
        <a href="https://twitter.com/sowriiii" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.snapchat.com/sowriiii" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSnapchat} /></a>
        <a href="https://discord.com/sowri#8753" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
        <a href="https://www.instagram.com/sowriiii" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.facebook.com/sowriiii" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://stackoverflow.com/users/21299419/sowri" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} /></a>
        <a href="https://medium.com/@sowri1219" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium} /></a>
        <a href="https://github.com/sowri19" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </span>


        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>75 Saint Alphonsus St, Boston, MA 02120, USA</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;