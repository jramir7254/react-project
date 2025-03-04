// Home.jsx
import React, { useState } from "react";
import ServinPP from "../assets/ServinPP.png";
import acmLogo from "../assets/ACM_Logo.png";
import myVideo from "../assets/vid.mp4";
import epccLogo from "../assets/EPCC_Logo.png";
import ieeeLogo from "../assets/IEEE_Logo.jpg";
import msLogo from "../assets/MS_Logo.png";
import nsfLogo from "../assets/NSF_Logo.png";
import Card from "../Components/Card.jsx"
// import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import { useEffect } from "react";
import * as XLSX from 'xlsx';

export default function Home() {
    return (
        <section className="home">
            <div className="hero">
                <video autoPlay loop muted playsInline className="bg-video">
                    <source src={myVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content">
                    <h1>Hack</h1>
                    <hr/>
                    <h1>The Border;</h1>
                        <h3>Binational Adversarial Series for the Border Good</h3>
                </div>
            </div>
            <div className="about-section">
                <div className="about-info">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Deleniti inventore quod reprehenderit, non, minus expedita 
                    aperiam sapiente ab illum vel ea natus adipisci tempore vitae. 
                    Incidunt nulla illo natus doloribus.</p>
                </div>
                <div className="event">
                    <img src={ServinPP} width={500} height={500} alt="Servin Profile" />
                </div>
            </div>
            {/* <EventSection></EventSection> */}
            <div className="cont">

            
            <Test >
            {[...new Array(CARDS)].map(() => (
                <Card/>
            ))}
            </Test>
            </div>
            <Sponsors></Sponsors>
        </section>
    );
}



function EventSection() {
    let cards = [
        <Card key="1" name="Workshop" />,
        <Card key="2" name="2025 Datathpon" />,
        <Card key="3" name="2025 Hackathon" />
    ];

    const [cardIndex, setCardIndex] = useState(0)
    const [animating, setAnimating] = useState(false);

    function right() {
        setAnimating(true);
        // Duration should match your CSS animation duration
        setTimeout(() => {
            setCardIndex(prevIndex =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
            );
            setAnimating(false);
        }, 1000);

    }

    function left() {
        const newIndex = cardIndex === 0 ? cards.length - 1 : cardIndex - 1;
        setCardIndex(newIndex)
    }


    return (
        <section className="info">
            <h1>Upcoming events</h1>
            
            <div className="event-container">
                <div className={`card-hidden-left ${animating ? 'trans' : ''}`}>
                    {cards[cardIndex === 0 ? cards.length - 1 : cardIndex - 1]}
                </div>

                <button onClick={left} class="arrow-btn left" aria-label="Previous">&#8592;</button>

                <div className={`card-holder ${animating ? 'trans' : ''}`}>
                    {cards[cardIndex]}
                </div>

                <button  onClick={right} class="arrow-btn right" aria-label="Next">&#8594;</button>

                <div className={`card-hidden-right ${animating ? 'trans' : ''}`}>
                    {cards[cardIndex === cards.length - 1 ? 0 : cardIndex + 1]}
                </div>
            </div>
           
        </section>
    );
}


const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card2 = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);




const Test = ({children}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    
    return (
        <section>
            <div className='carousel'>
                {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}>left</button>}
                {React.Children.map(children, (child, i) => (
                    <div className='card-container' style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        'pointer-events': active === i ? 'auto' : 'none',
                        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                        }}>
                        {child}
                    </div>
                ))}
                {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}>right</button>}
            </div>
        </section>

    );
  }



function Sponsors() {
    return (
        <section className="sponsors-section">
            <img src={epccLogo}></img>
            <img src={acmLogo}></img>
            <img src={ieeeLogo}></img>
            <img src={msLogo}></img>
            <img src={nsfLogo}></img>
        </section>
    )
}
