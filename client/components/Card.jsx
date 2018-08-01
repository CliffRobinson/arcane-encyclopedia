import React from 'react'

const Card = (props) => {
    let cardSize = 'small'
    if (props.card.card_faces) {
        return <img src={props.card.card_faces[0].image_uris[cardSize]}></img>
    } else {
        return <img src={props.card.image_uris[cardSize]}></img>
    }
}

export default Card