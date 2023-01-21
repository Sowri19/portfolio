import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
// import { faAws } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
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
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAws} color="#000000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
    </div>
        </div>
    )
}

export default About;
