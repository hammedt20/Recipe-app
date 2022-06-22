import React from 'react'
import '../styles.css'

const Foodcard = (prop) => {
  return (
        <div className='w-3/5 mx-auto '>
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
      <h1 className='font-bold text-6xl mt-8'>DEAL OF THE WEEK</h1>
      <p className='text-sm font-light mt-8 mb-72'>SUNT AUTEM VEL EUM IEURE REPREHENDERIT, QUI RATIONE</p>
      <div className=' bg-white  mx-auto pt-24 pb-16 w-11/12 absolute -bottom-1/2 -translate-y-1/3 border-t-8 rounded-lg border-green-500 shadow-xl'>
        <div className='relative'>
          <div className='flex bg-green-500 p-4 px-12 absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 rounded-full text-white w-max mx-auto'>
            <p className='px-12 border-r-2'><span className='text-xl font-bold'>206</span> <br/> <span className='text-sm font-light'>Days</span></p>
            <p className='px-12 border-r-2'><span className='text-xl font-bold'>04 </span><br/> <span className='text-sm font-light'>Hours</span></p>
            <p className='px-12 border-r-2'><span className='text-xl font-bold'>38 </span><br/><span className='text-sm font-light'> Min</span></p>
            <p className='px-12'><span className='text-xl font-bold'>52</span> <br/><span className='text-sm font-light'> Sec</span></p>
          </div>
          <div className='grid grid-cols-4 mx-auto'>
            {foods}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deal