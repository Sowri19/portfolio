import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
const About =()=>{
    const [letterClass,setLetterClass] = useState('text-animate');
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
        // set Timeout function not working 
    }, []);
    return(
        <div className="container about-page">
            <div className= 'text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o','u','t', ' ', 'm', 'e']}
                idx={15}/>
            </h1>
            <p>I'm a highly ambitious front-end developer looking for a position at a reputable IT company with the chance to use the most recent technology on difficult and varied projects.</p>
            <p>I have a peaceful sense of assurance, am innately interested, and am constantly trying to get better at design by solving one design problem at a time.</p>
            <p>As a Master's student in Information Systems with a strong interest in front-end development, I possess the technical skills and knowledge to design and implement visually appealing and user-friendly web applications.</p>
            </div>

            <div className="stage-cube-cont">
                
            </div>
        </div>
    )
}

export default About;
