import react from 'react';

const Project = (props) => {

    const { name, image, description, link } = props;
    console.log(props);




    return (
        <>
            <div class="project">
                <div class="project__section">
                    <h3 class="project__title">{name}</h3>
                    <img class="project__img" src={image} alt={name + " screenshot"}></img>
                </div>
                <div class="project__section">
                    <p class="project__desc">{description}</p>
                    <a href={link}></a>
                </div>
            </div>
        </>
    )
}

export default Project;