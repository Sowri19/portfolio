import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    // adding the global styling class to the section "paddings"
    <section className={`paddings ${css.wrapper}`}>
      <motion.div className={`innerWidth ${css.container}`}>
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <span className="primaryText">
            Hey There,
            <br />
            I'm Sowri.
          </span>

          <span className="secondaryText">
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </span>
        </div>

        <div className={css.person}>
          <img src="./person1.png" alt="" />
        </div>

        <a className={css.email} href="mailto:sowri1219@gmail.com">
          sowri1219@gmail.com
        </a>

        {/* Lower Elements */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">3</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>

          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>UI/UX DESIGNER</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
