import React from "react";
import Cards from "./Cards";
import ManaSelector from "./ManaSelector";
import SearchSelector from "./SearchSelector";
import FilterBar from "./FilterBar";


const App = () => {
    return (
        <div className="App" >
            <SearchSelector />
            <FilterBar />
            <ManaSelector />
            <Cards />
        </ div> 
    );
};

export default App;

