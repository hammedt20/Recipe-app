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

  console.log(props)

  return(
    <div className='w-11/12 mx-auto text-black p-4 border border-bliss rounded-lg'>
      <img src={props.recipe.image} alt='' className='rounded-lg w-full' />
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
    // const URL = `https://imdb-api.com/en/API/SearchSeries/k_51zm1qt5/${search.food}`
    // async function getApi (){
    //   var res = await fetch(URL)
    //   var data = await res.json()

    //   console.log(data)

    //   setSearch(prevSearch => {
    //     const dataHits = data.hits
    //     return (
    //       {
    //         ...prevSearch,
    //         dataHits
    //       }
    //     )
    //   })
    // }

    // getApi()
    fetch(URL)
    .then(res => res.json())
    .then(data => setSearch(prevSearch => {
      // const dataHits = data.hits
      return(
        {
          ...prevSearch,
          dataHits: data.hits
        }
      )
    }))
  }, [search.food])

  console.log(search)

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
      <p className='text-center text-gray-400 mt-8'>In quo ignorare vos arbitrer, sed ipsius honestatis decore laudandis</p>
      <div className='flex items-center w-1/3 mx-auto my-24 p-4 border border-black rounded-full'>
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
      <div className='grid grid-cols-3 mx-12 gap-y-8'>
        {recipeApi}
      </div>
    </div>
  )
}

export default Foodgallery