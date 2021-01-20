import social from '../images/social.png'


const Skills = () => {

    return (
        <>
            <h2 className="sectionheading">Contact</h2>
            <section id="contact" className="contact">
                <div className="contact__desc">
                    <p className="contact__text">
                        I am actively looking for work-related <span className="contact__focustext">opportunities</span>
                    </p>
                    <p className="contact__text">
                        Get an in depth look at my work on <a href="https://github.com/jujasen" className="contact__link">github</a> and <a href="https://www.behance.net/juliajakobsen" className="contact__link">behance</a>
                    </p>
                    <p className="contact__text">
                        Send me an <a href="mailto:juljakobsen94@gmail.com" className="contact__link">email</a> or say hi on <a href="https://twitter.com/FrontendJulz" className="contact__link">twitter</a> or <a href="https://www.linkedin.com/in/juliajakobsen94/" className="contact__link">linkedin</a>
                    </p>
                </div>
                <img className="contact__img" src={social} alt="social icons" />

            </section>
        </>
    )
}

export default Skills;