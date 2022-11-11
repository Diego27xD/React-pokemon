import { useEffect, useState } from 'react'
import { get } from './services/service'
import MenuTypes from './components/menu'
import './App.css'
import { Container } from '@mui/material'
import CardPokemon from './components/cardPokemon'
import "./App.css"
function App() {
  
  const [types, setTypes] = useState([])
  const [type, setType] = useState("https://pokeapi.co/api/v2/type/1/")
  const [pokemons, setPokemons] = useState([])

  const getTypes = async () => {
    const result = await get(`type`)
    setTypes(result.results)
    console.log(result.results)
    await getPokemons(type)
  }

  const getPokemons = async (url) => {
    const id = url.split('/')[6]
    //console.log(id)
    const result = await get(`type/${id}`)
    //console.log(result.pokemon)
    setPokemons(result.pokemon)
  }

  const handleChange = (event) => {
    setType(event.target.value);
    getPokemons(event.target.value);
  };

  useEffect(() => {
    getTypes()
  },[])


  return (
    <div className="App">
      <Container>
        <MenuTypes types={types} handleChange={handleChange} type={type}></MenuTypes>
        <CardPokemon pokemon={pokemons}></CardPokemon>
      </Container>
    </div>
  )
}

export default App
