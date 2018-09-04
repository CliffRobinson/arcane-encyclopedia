import React from "react";
import { Tooltip } from "react-tippy";

const Card = (props) => {
    let cardSize = "small";
    let hoverCardSize = "normal";

    switch (props.card.layout) {
    case "normal":
    case "saga":
    case "split":
        return (
            <React.Fragment> 
                <Tooltip
                    trigger='mouseenter'
                    html={<img src={props.card.image_uris[hoverCardSize]}></img>}
                >   
                    
                    <img src={props.card.image_uris[cardSize]}></img>
                    <button onClick={()=> console.log(props.card)}> Log this card </button>
                </Tooltip>
            </React.Fragment>
        );

    case "transform":
        return props.card.card_faces.map((face, i) => {
            return (
                <React.Fragment>
                    <Tooltip
                        trigger='mousenter'
                        html = {<img src={face.image_uris[hoverCardSize]}></img>}
                    >
                        
                        <img src={face.image_uris[cardSize]}></img>
                    </Tooltip>
                    <button onClick={()=> console.log(props.card)}> Log this card </button>
                </React.Fragment>
            );            
        });
    default:
        return (
            <div style={{maxWidth:"146 px", border:"1px solid black"}}>
                
                The card {props.card.name} has a weird format and we can't display it. 
                <button onClick={()=> console.log(props.card)}> Log this card </button>
            </div>
        );
        
    }
};

export default Card;