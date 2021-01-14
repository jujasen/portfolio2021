import react from 'react';
import React from 'react';
import {useEffect} from 'react';

const Project = (props) => {

    const { name, image, description, link } = props;
    console.log(props);

    const handleHover = (visual, text, img) => {


        visual.classList.add("project__visual--hidden");
        text.classList.remove("project__title");
        text.classList.add("project__title--hidden");
        img.classList.remove("project__img--hidden");
        img.classList.add("project__img");
    };

    React.useEffect(() => {
        const visual = document.querySelector(".project__visual");
        const visualText = document.querySelector(".project__title");
        const visualImg = document.querySelector(".project__img--hidden");

        visual.addEventListener('mouseover', function() {
            handleHover(visual, visualText, visualImg)
        });

        return () => {
            visual.removeEventListener('scroll', handleHover);
        };
    }, []);




    return (
        <>
            <div class="project">
                <div class="project__section project__visual">
                    <h3 class="project__title">{name}</h3>
                </div>
                <img class="project__img--hidden" src={image} alt={name + " screenshot"}></img>
                <div class="project__section">
                    <p class="project__desc">{description}</p>
                    <a class="project__link" href={link}>View &gt;&gt;</a>
                </div>
            </div>
        </>

        
    )
}

export default Project;