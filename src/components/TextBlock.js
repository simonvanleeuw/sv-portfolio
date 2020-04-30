import React from 'react';

const TextBlock = (props) => {
    return(
    <section>
        <h2>{props.title}</h2>
        {props.textItems.map((textItem, index) => {
            return(
                <div key={index}>
                    <h3>{textItem.title}</h3>
                    <p>{textItem.text}</p>
                </div>
            )
        })}
    </section>
    )
}

export default TextBlock;