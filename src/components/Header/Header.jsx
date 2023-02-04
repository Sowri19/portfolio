import React from 'react'
import css from './Header.module.scss';
import {BiMenuAltLeft, BiPhoneCall} from 'react-icons/bi';
import {motion} from 'framer-motion';
import {getMenuStyles, headerVariants} from '../../utils/motion';
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = React.useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div 
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewPort={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}
    style= {{boxShadow: headerShadow}}
    >

      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Sowri
        </div>
        <ul
        style={getMenuStyles(menuOpened)}
        className={`flexCenter ${css.menu}`}>
          <li><a href="">Services</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}><a href=""></a>
          <p>857-381-1427</p>
          <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        {/* Medium and small screens */}
        <div className={css.menuIcon} onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltLeft size={"30px"} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header