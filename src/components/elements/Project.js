import React from 'react';


const Project = (props) => {

    const { id, name, image, description, link } = props;

    return (
        <>
            <div className="project">
                <div id={id} className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="project__visual">
                                <a href={link}><h3 className="project__title d-block w-100">{name}</h3></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href={link}>
                            <img src={image} className="project__img d-block w-100" alt={name + " screenshot"} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project__section project__text">
                    <p className="project__desc">{description}</p>
                    <a className="project__link" href={link}>View &gt;&gt;</a>
                </div>
            </div>
        </>  
    )
}

export default Project;

