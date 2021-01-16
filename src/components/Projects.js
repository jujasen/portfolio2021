import react from 'react';
import Project from './elements/Project'
import venomlips from '../images/projectimg/venomlips.png'
import main from '../scss/main.scss'



const Projects = () => {

    return (
        <>
            <section className="projects">
                <h2 className="sectionheading">Projects</h2>
                <Project name="Venom Lips" image={venomlips} description="An e-commerce store for a fictional brand. Created with HTML, CSS, JS and Strapi API" link="https://venomlips.julz.no/" />
            </section>
        </>
    )
}

export default Projects;