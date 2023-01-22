import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'
// all the elements like svg container, svg, and the solid image are going to be hidden
// inorder to manipulate with them and apply gsep animation to it we need to use useRef three elements.

const Logo = () => {
const bgRef = useRef();

  useEffect(() => {
    bgRef.current.className = 'svg';
  });

  return (
    <div className="logo-container" >
      <img
        ref={bgRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo