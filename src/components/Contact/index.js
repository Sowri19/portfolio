import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
        // set Timeout function not working 
    }, []);
return (
<>
    <div className= 'container contact-page'>
        <div className='text-zone'>
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I'm looking for freelancing work, especially for challenging or big projects.
          However, please feel free to contact me using the form below if you have any other requests or queries.
          </p>
        </div>
    </div>
    <Loader type= "pacman" />
</>
)
}
export default Contact