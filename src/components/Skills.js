
const Skills = () => {

    return (
        <>
            <section className="skills">
                <h2 className="sectionheading">About</h2>

                <h3 className="skills__category-name">Top skills</h3>
                <div className="skills__category">
                    <p className="skills__skill">html</p>
                    <p className="skills__skill">css</p>
                    <p className="skills__skill">sass</p>
                    <p className="skills__skill">javascript</p>
                    <p className="skills__skill">git</p>
                    <p className="skills__skill">figma</p>
                    <p className="skills__skill">adobe xd</p>
                    <p className="skills__skill">adobe illustrator</p>
                </div>

                <h3 className="skills__category-name">Intermediate</h3>
                <div className="skills__category">
                    <p className="skills__skill">rest api</p>
                    <p className="skills__skill">strapi</p>
                    <p className="skills__skill">adobe photoshop</p>
                    <p className="skills__skill">node.js</p>
                </div>

                <h3 className="skills__category-name">Currently learning</h3>
                <div className="skills__category">
                    <p className="skills__skill">react</p>
                </div>
            </section>
        </>
    )
}

export default Skills;