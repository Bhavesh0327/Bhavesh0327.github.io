import './App.css';
import React, { useState } from 'react';
import ParticlesBg from 'particles-bg'
import MouseParticles from 'react-mouse-particles'
import ParticleEffectButton from 'react-particle-effect-button'
import github from './iconmonstr-github-1.svg'
import linkedin from './linkedin.png'
import twitter from './104461_twitter_icon.svg'
import instagram from './insta.svg'
import medium from './medium+icon-1320186682844050412_0.svg'
import mail from './mail.png'

function App() {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  const [hidden1, setHidden1] = useState(0);
  const [hidden2, setHidden2] = useState(0);
  const [hidden3, setHidden3] = useState(0);
  const [hidden4, setHidden4] = useState(0);
  const [hidden5, setHidden5] = useState(0);
  const [hidden6, setHidden6] = useState(0);
  return (
    <div>
      <ParticlesBg className = "particles" type="cobweb" num={250} position={"absolute"} bg={true} />
      <MouseParticles g={1} color="#81847d" radius={5} cull="col,image-wrapper"/>
      <MouseParticles g={0.1} color="#41474a" radius={6} cull="col,image-wrapper"/>
      <div className="center-card">
        <h1> BHAVESH MANDHAN </h1>
        <ParticleEffectButton
          hidden={hidden1}
        >
          <button
            className="particle-effect-button"
            onClick={() => setHidden1(!hidden1)}
          >
          <a href="https://github.com/bhavesh0327"><img style={{height: "35px"}} src={github} /></a>
          </button>
        </ParticleEffectButton>
        <ParticleEffectButton
          hidden={hidden2}
        >
          <button
            className="particle-effect-button"
            onClick={() => setHidden2(!hidden2)}
          >
          <a href="https://Linkedin.com/in/bhavesh0327"><img style={{height: "35px"}} src={linkedin} /></a>
          </button>
        </ParticleEffectButton>
        <ParticleEffectButton
          hidden={hidden3}
        >
          <button
            className="particle-effect-button"
            onClick={() => setHidden3(!hidden3)}
          >
            <Mailto email="bhaveshmandhan3@gmail.com" subject="Let's Connect!" body="">
            <img style={{height: "35px"}} src={mail} />
            </Mailto>
          </button>
        </ParticleEffectButton>
        <ParticleEffectButton
          hidden={hidden4}
        >
          <button
            className="particle-effect-button"
            onClick={() => setHidden4(!hidden4)}
          >
          <a href="https://twitter.com/bhavesh0327"><img style={{height: "35px"}} src={twitter} /></a>
          </button>
        </ParticleEffectButton>
        <ParticleEffectButton
          hidden={hidden5}
        >
          <button
            className="particle-effect-button"
            onClick={() => setHidden5(!hidden5)}
          >
          <a href="https://mandhan.medium.com/"><img style={{height: "35px"}} src={medium} /></a>
          </button>
        </ParticleEffectButton>
        <ParticleEffectButton
          hidden={hidden6}
        >
          <button
            className="particle-effect-button"
            onClick={() => setHidden6(!hidden6)}
          >
          <a href="https://instagram.com/mandhan_03"><img style={{height: "35px"}} src={instagram} /></a>
          </button>
        </ParticleEffectButton>
      </div>
    </div>
  )

}

export default App;
