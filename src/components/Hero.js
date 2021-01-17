import illustration from '../images/illustration.svg'



const Hero = () => {

    return (
        <>
            <section className="hero">
                <div className="hero__section">
                    <img className="hero__illustration" src={illustration} alt="illustration of me"></img>
                </div>
                <div className="hero__section">
                    <h1 className="hero__heading">I'm <span className="hero__heading--dark">Julia</span>,</h1>
                    <p className="hero__subheading">(Julz for short)</p>
                    <p className="hero__location">Living in Bergen, Norway</p>
                    <p className="hero__description">i code & design stuff</p>
                    <p id="projects" className="hero__support">keep scrolling to see said stuff</p>
                    <p className="hero__arrow">&#8964;</p>
                </div>
            </section>
        </>
    )
}

export default Hero;