import React from "react";

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            function:"customTextFilter",
            key:"type_line",
            value:""
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSelectChange(e, props){
        //console.log("Adding", e.target.value, "to filter", props.i);
        const funcKey = e.target.value.split("--");
        const obj = {
            function:funcKey[0],
            key:funcKey[1],
            value:this.state.value
        };
        this.setState(obj);
        props.addFilter(obj, props.i);
    }
    
    handleInputChange(e, props){
        //console.log("Adding", e.target.value, "to filter", props.i);
        const value = this.state.function.includes("number") ? parseFloat(e.target.value) : e.target.value;
        const objNixilis = {
            function:this.state.function,
            key:this.state.key,
            value:value
        };
        this.setState(objNixilis);
        props.addFilter(objNixilis, props.i);
    }

    render() {
        return <span className="filter">
            <select classname="select" onChange={(e) => this.handleSelectChange(e, this.props)}>
                <option value="customTextFilter--type_line"> Type Line contains </option>
                <option value="customTextFilter--name"> Name contains</option>
                <option value="customTextFilter--oracle_text"> Oracle Text Contains</option>
                <option value="numberLessFilter--cmc"> CMC less than </option>
                <option value="numberEqualsFilter--cmc"> CMC equals </option>
                <option value="numberMoreFilter--cmc"> CMC more than </option>
                <option value="numberLessFilter--usd"> Price less than </option>
                <option value="numberMoreFilter--usd"> Price more than </option>
            </select>
            <input classname="input" type="text" onChange={(e) => this.handleInputChange(e, this.props)}>
    
            </input>
        </span>;
    }
}

// function handleSelectChange(e, props){
//     //console.log("Adding", e.target.value, "to filter", props.i);
//     let funcKey = e.target.value.split("--");
//     let obj = {
//         function:funcKey[0],
//         key:funcKey[1],
//         value:this.state.value
//     };
//     props.addFilter(obj, props.i);
// }

// function handleInputChange(e, props){
//     //console.log("Adding", e.target.value, "to filter", props.i);
    
//     let obj = {
//         function: this.state.function,
//         key: this.state.key,
//         value:e.target.value
//     };
//     props.addFilter(obj, props.i);
// }

export default Filter;