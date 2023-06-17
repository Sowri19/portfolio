import React from 'react'
import { motion } from "framer-motion";
import css from './Portfolio.module.scss'
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
        <a className="anchor" id="portfolio"></a>
    <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
            <div>
                <span className="primaryText">
                    My Latest Works
                </span>
                <p style = {{marginTop: "10px"}}>
                    Perfect solution for digital experience
                </p>
            </div>
            <span className="secondaryText">
    <a href="https://github.com/sowri19" target="_blank" rel="noopener noreferrer">Explore More Works</a>
</span>

        </div>
        {/* Images */}
        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./Blockfit.jpeg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./Portfolio.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./iosapp.png" alt="project" />
        </div>
    </div>
    </motion.section>
  )
}

export default Portfolio