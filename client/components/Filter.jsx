import React from "react";

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            function:"customTextFilter",
            key:"type_line",
            value:"",
            exact:false,
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
            value:this.state.value,
            exact:(false || funcKey[2])
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
            value:value,
            exact:this.state.exact
        };
        this.setState(objNixilis);
        props.addFilter(objNixilis, props.i);
    }

    render() {
        return <span className={"filter"}>
            <select className={`select ${this.props.size}`} onChange={(e) => this.handleSelectChange(e, this.props)}>
                <option value="customTextFilter--type_line"> Type Line contains </option>
                <option value="customTextFilter--name"> Name contains</option>
                <option value="customTextFilter--oracle_text"> Oracle Text Contains</option>
                <option value="customTextFilter--rarity--true"> Rarity is</option>
                <option value="numberLessFilter--cmc"> CMC less than </option>
                <option value="numberEqualsFilter--cmc"> CMC equals </option>
                <option value="numberMoreFilter--cmc"> CMC more than </option>
                <option value="numberLessFilter--usd"> Price less than </option>
                <option value="numberMoreFilter--usd"> Price more than </option>
            </select>
            <input className={`${this.props.size}`} type="text" onChange={(e) => this.handleInputChange(e, this.props)}>
    
            </input>
        </span>;
    }
}

export default Filter;