import { SearchNormal1 } from 'iconsax-react'
import {React, useEffect, useState} from 'react'


const Recipe = (props) => {
  const [showRecipe, setShowRecipe] = useState(false)

  const handleRecipe = () => {
    setShowRecipe(prevRecipe => !prevRecipe)
  }

  const ingredients = props.recipe.ingredientLines

  const searchIngredient = ingredients.map(ingredient => {
    return (
      <li>
        {ingredient}
      </li>
    )
  })

  return(
    <div className='w-11/12 mx-auto text-black p-4 border border-bliss rounded-lg'>
      <img src={props.recipe.image} alt='' className=' w-full' />
      <div className='flex justify-between items-center py-8'>
        <p className='text-lg text-bold'>{props.recipe.label}</p>
        <button className='w-max px-4 py-2 bg-green-500 text-white' onClick={handleRecipe}>{!showRecipe ? 'View Recipe' : 'Hide Recipe'}</button>
      </div>
      {showRecipe && <ul>
        {searchIngredient}
      </ul>}
    </div>
  )
}

const Foodgallery = () => {
  const [search, setSearch] = useState({
    food: '',
    dataHits: []
  })

  function collectSearch (e){
    setSearch(prevSearch => {
      return(
        {
          ...prevSearch,
          [e.target.name]: e.target.value
        }
        
      )
    })
  }

  useEffect(function(){
   const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search.food}&app_id=2177a3b7&app_key=c144aed72930385e78d1d2084ab569f2`
    
    fetch(URL)
    .then(res => res.json())
    .then(data => setSearch(prevSearch => {
      return(
        {
          ...prevSearch,
          dataHits: data.hits
        }
      )
    }))
  }, [search.food])

  const searchHits = search.dataHits

  const recipeApi = searchHits.map(hit => {
    return(
      <Recipe
        {...hit}
      />
    )
  })

  return (
    <div className='mb-16'>
      <h1 className='mt-72 text-center text-5xl header-text font-bold'>Food Gallery</h1>
      <p className='text-center mx-8 text-gray-400 mt-8'>In quo ignorare vos arbitrer, sed ipsius honestatis decore laudandis</p>
      <div className='flex items-center w-2/3 md:w-1/3 mx-auto my-24 p-4 border border-black rounded-full'>
        <input
          type= 'text'
          placeholder= 'Search for food'
          className='w-full outline-none'
          onChange={collectSearch}
          name= 'food'
          value={search.food}
        />
        <SearchNormal1 
        color='#000'
        />
      </div>
      <div className='md:grid-cols-2 grid grid-cols-1 lg:grid-cols-3 mx-12 gap-y-8'>
        {recipeApi}
      </div>
    </div>
  )
}

export default Foodgallery