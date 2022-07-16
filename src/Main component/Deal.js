import React from 'react'
import '../styles.css'

const Foodcard = (prop) => {
  return (
        <div className='md:w-3/5 w-1/2 text-sm md:text-md mx-auto '>
          <img src={prop.img} alt='' className='w-full' />
          <h1 className='mb-2 text-gray-400 '>{prop.name}</h1>
          <p className='text-green-500 text-xl font-medium'>{prop.price}</p>
        </div>
  )
}

const Deal = () => {
  const foodmenu = [
    {
      img: './image/food-1.png',
      name: 'Green Salad',
      price: '$ 8.40'
    },
    {
      img: './image/food-2.png',
      name: 'Burger',
      price: '$ 12.40'
    },
    {
      img: './image/food-3.png',
      name: 'Omelette',
      price: '$ 4.40'
    },
    {
      img: './image/food-4.png',
      name: 'Pancake',
      price: '$ 9.40'
    },
  ]

  const foods = foodmenu.map(food => {
    return(
      <Foodcard
        {...food}
      />
    )
  })

  return (
    <div className='relative bg-black text-white p-12 text-center border border-black z-20'>
      <h3 className='font-medium mt-8 text-2xl'>HURRY UP!</h3>
      <h1 className='font-bold xl:text-6xl text-5xl mt-8'>DEAL OF THE WEEK</h1>
      <p className='mb-96 text-sm font-light mt-8 lg:mb-72'>SUNT AUTEM VEL EUM IEURE REPREHENDERIT, QUI RATIONE</p>
      <div className=' bg-white  mx-auto pt-24 pb-16 w-5/6 md:w-11/12 absolute -bottom-1/2 -translate-y-1/4 md:-translate-y-1/2 lg:-translate-y-1/3 border-t-8 rounded-lg border-green-500 shadow-xl'>
        <div className='relative'>
          <div className='hidden md:block md:-translate-y-2/3 lg:-translate-y-1/2 gap-y-8 md:grid grid-cols-2 md:grid-cols-4 text-sm md:text-md md:grid-cols-4 bg-green-500 p-4 px-8 md:px-12 absolute -top-1/2 left-1/2 -translate-y-1/4 -translate-x-1/2 xl:-translate-y-1/4 rounded-full text-white w-max mx-auto'>
            <p className='px-12 border-r-2'><span className='text-xl font-bold'>206</span> <br/> <span className='text-sm font-light'>Days</span></p>
            <p className='px-12 border-r-2'><span className='text-xl font-bold'>04 </span><br/> <span className='text-sm font-light'>Hours</span></p>
            <p className='px-12 border-r-2'><span className='text-xl font-bold'>38 </span><br/><span className='text-sm font-light'> Min</span></p>
            <p className='px-12'><span className='text-xl font-bold'>52</span> <br/><span className='text-sm font-light'> Sec</span></p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 mx-auto'>
            {foods}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deal