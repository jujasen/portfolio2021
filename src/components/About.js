import me from '../images/me.png'

const About = () => {

    return (
        <>
            <h2 className="sectionheading">About</h2>
            <section id="about" className="about">
                <div className="about__desc">
                <p className="about__text">
                    My name is <span className="about__focustext">Julia Jakobsen</span> and i am currently at the end of my <span className="about__focustext">frontend-development</span> studies at Noroff Bergen
                </p>
                <p className="about__text">
                    Creating <span className="about__focustext">modern</span> and <span className="about__focustext">clean</span> web-solutions with <span className="about__focustext">easy-to-use</span> UI is my focus
                </p>
                </div>
                <img className="about__img" src={me} alt="myself in black and white"/>

            </section>
        </>
    )
}

export default About;