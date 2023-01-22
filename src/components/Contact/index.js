import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
        // set Timeout function not working 
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_bghfqjw', 'template_hv91dbm', form.current, 'k6TksuCGVJaNfeybX')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    
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
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    </div>
    <div className="info-map">
          Sowri Korturti,
          <br />
          Roxbury Crossing <br />
          Massachusetts<br />
          Boston, 02120<br />
          <br />
          <span>sowri1219@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[17.38,78.41]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[17.38,78.41]}>
              <Popup>Sowri lives here, come over for a cup of coffee :) </Popup>
            </Marker>
          </MapContainer>
        </div>    
    <Loader type= "pacman" />
</>
)
}
export default Contact