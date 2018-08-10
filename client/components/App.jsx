import React from 'react'
import Cards from './Cards'
import ManaSelector from './ManaSelector';
import SearchSelector from './SearchSelector'


const App = () => {
  return (
    <div className="App" >
    <SearchSelector />
    <ManaSelector />
    <Cards />
    </ div> 
  )
}

export default App

