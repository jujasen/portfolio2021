import react from 'react';
import Project from './elements/Project'
import venomlips from '../images/projectimg/venomlips.png'




const Projects = () => {

    return (
        <>
            <section class="projects">
                <h2 class="sectionheading">Projects</h2>
                <Project name="Venom Lips" image={venomlips} description="An e-commerce store for a fictional brand. Created with HTML, CSS, JS and Strapi API" link="https://venomlips.julz.no/" />
            </section>
        </>
    )
}

export default Projects;