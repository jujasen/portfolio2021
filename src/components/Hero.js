import react from 'react';
import illustration from '../images/illustration.svg'



const Hero = () => {

    return (
        <>
            <section class="hero">
                <div class="hero__section">
                    <img class="hero__illustration" src={illustration} alt="illustration of me"></img>
                </div>
                <div class="hero__section">
                    <h1 class="hero__heading">I'm <span class="hero__heading--dark">Julia</span>,</h1>
                    <p class="hero__subheading">(Julz for short)</p>
                    <p class="hero__location">Living in Bergen, Norway</p>
                    <p class="hero__description">i code & design stuff</p>
                    <p class="hero__support">keep scrolling to see said stuff</p>
                    <p class="hero__arrow">&#8964;</p>
                </div>
            </section>
        </>
    )
}

export default Hero;