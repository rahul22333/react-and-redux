import React from 'react'
import { CiShoppingCart } from "react-icons/ci"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const cartItem = useSelector((state)=>state.cart.cartItems)
  const navigate = useNavigate()
  const handleCart = () =>{
    console.log(navigate)
    navigate('/cart')
  }
  return (
    <div className='header'>
        <p className='logo'> R & R  </p>
        <div className='cart' onClick={handleCart}>
             {cartItem.length?<span className='cartnotify'> {cartItem.reduce((acc , item)=> (acc + item.quantity),0)} </span>:null}
             <CiShoppingCart className='cartIcon'/>
             </div>
    </div>
  )
}

export default Header