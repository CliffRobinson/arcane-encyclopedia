import React from "react";
import Cards from "./Cards";
import ManaSelector from "./ManaSelector";
import SearchSelector from "./SearchSelector";
import FilterBar from "./FilterBar";


const App = () => {
    return (
        <div className="App" >
            <div className="topTwo">
                    <SearchSelector />
                    <FilterBar />                
            </ div>

            <ManaSelector />
            <div className="container">
                <Cards />
            </ div>
        </ div>
    );
};

export default App;

