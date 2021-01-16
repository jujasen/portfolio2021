import react from 'react';
import React from 'react';
import {useState} from 'react';

const Project = (props) => {

    const { name, image, description, link } = props;

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <>
            <div className="project">
                <div id="carouselExampleIndicators" className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="project__visual">
                                <h3 className="project__title">{name}</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={image} className="project__img d-block w-100" alt={name + " screenshot"} />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span className="project__nav carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span className="project__nav carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
                <div className="project__section">
                    <p className="project__desc">{description}</p>
                    <a className="project__link" href={link}>View &gt;&gt;</a>
                </div>
            </div>
        </>  
    )
}

export default Project;

