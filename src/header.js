import React from 'react'
import './styles.css'

function Navbar(){
  return (
    <nav className='flex h-28 items-center justify-between px-12'>
      <h2 className='text-3xl font-bold tracking-wider italic'>CHOPILOS</h2>
      <div>
        <ul className='flex items-center gap-x-12 text-xl font-medium'>
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Shop</li>
          <li>Blog</li>
        </ul>
      </div>
    </nav>
  )
}

const HeaderBody = () => {
  return(
    <div className='m-12 mb-16 flex gap-x-12 justify-between'>
      <div className='flex flex-col gap-y-8'>
        <p className='font-medium uppercase tracking-wide text-green-500'>Welcome to our</p>
        <h1 className='text-8xl font-bold leading-tight header-text'>
          Healthy Food <br/>
          Collection!
        </h1>
        <p className='max-w-xl text-gray-400'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>
        <button className='border border-2 text-green-500 border-green-500 rounded-full font-medium py-2 px-8 w-max tracking-wide uppercase'>Shop Now</button>
      </div>
      <img src='./image/header-pic2.png' alt='' className='w-5/12 -m-y-12' />
    </div>
  )
}

const Header = () => {
  return (
    <header>
      <Navbar />
      <HeaderBody />
    </header>
  )
}

export default Header