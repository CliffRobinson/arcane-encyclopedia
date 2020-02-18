import React from "react";
import { Tooltip } from "react-tippy";

const Card = (props) => {
    let cardSize = "small";
    let hoverCardSize = "normal";

    switch (props.card.layout) {
    case "split":
        return (
            <React.Fragment> 
                <Tooltip
                    trigger='mouseenter'
                    position='right'
                    html={<img className = "tooltip-img tooltip-split" src={props.card.image_uris[hoverCardSize]}></img>}
                >   
                
                    <img src={props.card.image_uris[cardSize]}></img>
             
                </Tooltip>
            </React.Fragment>
        );
    case "normal":
    case "adventure":
    case "saga":
        return (
            <React.Fragment> 
                <Tooltip
                    trigger='mouseenter'
                    position='right'
                    html={<img className = "tooltip-img" src={props.card.image_uris[hoverCardSize]}></img>}
                >   
                    
                    <img src={props.card.image_uris[cardSize]}></img>
                 
                </Tooltip>
            </React.Fragment>
        );

    case "transform":
        
        return (
            <React.Fragment>
                {props.card.card_faces.map(
                    (face) => 
                        (<Tooltip
                            trigger='mouseenter'
                            position='right'
                            html = {
                                <img className = "tooltip-img" src={face.image_uris[hoverCardSize]}></img>
                            }
                        >
                            <img src={face.image_uris[cardSize]}></img>
                        </Tooltip>)
                )}
            </React.Fragment>
        );            
       
    default:
        return (
            <div style={{maxWidth:"146 px", border:"1px solid black"}}>
                The card {props.card.name} has a weird format and we can't display it.                
            </div>
        );
        
    }
};

export default Card;