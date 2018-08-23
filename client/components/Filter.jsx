import React from "react";

const Filter = (props) => {
    return <span>
        <select onChange={(e) => handleChange(e, props)}>
            <option> 1 </option>
            <option> 2 </option>
            <option> 3 </option>
        </ select >    
    </ span> ;
};

function handleChange(e, props){
    console.log("Adding", e.target.value, "to filter", props.i);
    props.addFilter(e.target.value, props.i);
}

export default Filter;