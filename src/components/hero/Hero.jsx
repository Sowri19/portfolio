import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import {staggerContainer,fadeIn} from "../../utils/motion";

const Hero = () => {
  return (
    // adding the global styling class to the section "paddings"
    <section className={`paddings ${css.wrapper}`}>
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.5}}
      className={`innerWidth ${css.container}`}>
        {/* Upper Elements */}
        <div className={css.upperElements}>

          <motion.span 
          variants={fadeIn("right","tween", 0.2, 1 )}
          className="primaryText">

            Hey There,
            <br />
            I'm Sowri.
          </motion.span>

          <motion.span 
          variants={fadeIn("left","tween", 0.4, 1 )}
          className="secondaryText">
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span>

        </div>

        <motion.div
        variants={fadeIn("up","tween", 0.3, 1 )}
        className={css.person}>
          <motion.img 
          variants={fadeIn("up","tween", 0.5, 1.3 )}
          src="./memoji.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:korturti.s@northeastern.edu">
        korturti.s@northeastern.edu
        </a>

        {/* Lower Elements */}
        <div className={css.lowerElements}>
        <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">3</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>Web Developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;