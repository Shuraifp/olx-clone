import olx_logo from '../assets/olx.png'
import lens from '../assets/lens.png'
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import Login from './Login'
import SellPage from './Sellpage'
import { useState } from 'react'


const Navbar = ({setSearch}) => {

  const [popUPLogin, setPopUPLogin] = useState(false)
  const [popupSell, setPopupSell] = useState(false)

  const toggleLogin = () => {
    setPopUPLogin(!popUPLogin)
  }

  const toggleSell = () => {
    setPopupSell(!popupSell)
  }

  return (
    <>
    <div className='flex p-4 bg-slate-100 shadow-md'>
      <img src={olx_logo} className='w-11 h-9' />
      <div className='flex border-2 border-spacing-1 w-64 p-2 ml-5 border-black bg-white'>
        <img src={lens} className='w-6 h-5 mt-1' />
        <input type="text" placeholder='location' className='ml-3 outline-none' />
        <img src={arrow} className='w-8 h-7' />
      </div>
      <div className='flex h-12 ml-4 border-2 border-black bg-white'>
        <input onChange={(event) => setSearch(event.target.value)} type="text" placeholder='Find cars, Mobile phones and more' className='ml-3 w-96 outline-none' />
        <img src={search} alt="" />
      </div>
      <div className='flex h-12 p-3 ml-10 cursor-pointer'>
        <h1 className='font-semibold'>ENGLISH</h1>
        <img src={arrow} alt="" className='w-8 h-7'/>
      </div>
      <div className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
        <h1 className='font-bold text-lg' onClick={() => setPopUPLogin(!popUPLogin)}>Login</h1>
      </div>
      <div onClick={() => setPopupSell(!popupSell)} className='flex w-28 h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500'>
        <h1 className='font-bold text-lg ml-3'>+ SELL</h1>
      </div>
    </div>
    { popUPLogin && <Login toggleLogin={toggleLogin} />}
    { popupSell && <SellPage toggleSell={toggleSell} />}
    </>
  )
}

export default Navbar
