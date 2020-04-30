import React from 'react';

const Hero = (props) => {
    const heroContent = props.heroContent;

    return (
        <header>
            <h2>{heroContent.title}</h2>
            <h3>{heroContent.subTitle}</h3>
            <p>{heroContent.text}</p>
            <button className="secondary">View Projects</button>
        </header>
    );
}

export default Hero;