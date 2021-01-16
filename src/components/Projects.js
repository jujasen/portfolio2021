import react from 'react';
import Project from './elements/Project'
import venomlips from '../images/projectimg/venomlips.png'
import dartmoor from '../images/projectimg/dartmoor.png'
import bergentekniske from '../images/projectimg/bergentekniske.png'
import mars from '../images/projectimg/mars.png'
import flower from '../images/projectimg/flower.png'
import nicecream from '../images/projectimg/nicecream.png'




const Projects = () => {

    return (
        <>
            <section className="projects">
                <h2 className="sectionheading">Projects</h2>


                <Project id="1" name="Venom Lips" image={venomlips} description="An e-commerce store for a fictional brand. Created with HTML, CSS, JS and Strapi API" link="https://venomlips.julz.no/" />
                <Project id="2" name="Dartmoor" image={dartmoor} description="A redesign of informational page for Dartmoor. Made in Figma." link="https://www.figma.com/proto/D2XEQSTbAHBmAMct9V62SO/Untitled?node-id=1%3A10&viewport=-803%2C25%2C0.5462504029273987&scaling=scale-down-width" />
                <Project id="3" name="BT Museum" image={bergentekniske} description="A redesign of the webpage for Bergen Technical Museum" link="https://www.figma.com/proto/o9ojcemXyg5RNzYl0WuzNc/Untitled?node-id=1%3A2&viewport=789%2C862%2C0.21653564274311066&scaling=scale-down-width" />
                <Project id="4" name="Flower Power" image={flower} description="An e-commerce store created with Wordpress." link="https://flowerpower.julz.no/" />
                <Project id="5" name="Explore Mars" image={mars} description="A landingpage for weather data and NASA's work with Mars." link="https://mars.julz.no/" />
                <Project id="6" name="Nicecream" image={nicecream} description="A simple webpage that displays icecreams." link="https://assignments.julz.no/nicecream/index.html" />



            </section>
        </>
    )
}

export default Projects;