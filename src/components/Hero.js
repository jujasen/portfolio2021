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

                </div>
            </section>
        </>
    )
}

export default Hero;