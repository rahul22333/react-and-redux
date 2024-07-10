import React from 'react'
import "./cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'
function Cart () {
  const cartItem = useSelector((state)=>state.cart.cartItems)
  const dispatch = useDispatch()
  const handleRemoveItem = (id) =>{
       dispatch(removeFromCart({id}))
  }
  return (
    <div >
      { cartItem.length ?cartItem.map((item)=>
      {
        return(<div className='cartContainer' key={item.id}>
          <div className='cartImgDetail'>
        <button className='removeBtn' onClick={()=>handleRemoveItem(item.id)}> ✕ </button>
        <img className="cartImg" src= {item.img} art="cart image" />
        </div>
        <p className='cartTitle'> {`${item.title.slice(0,20)}...`}</p>
        <div className='cartDetail'>
        <p className='cartPrice'> Price : Rs.{item.price*100}</p>
        <p className='cartQuant'> Quantity : {item.quantity}</p>
        </div>
        </div>)})
        : <div className='emptyCart'> 
          There is no any item in a cart !
          </div>
        }
       { cartItem.length ? <div className='cartTotalCont'> 
       <p className='cartTotalPrice'> Total : Rs.{cartItem.reduce((acc,item)=>{return acc + item.price*100},0)}</p>
       </div> : null
        }
    </div>
  )
}

export default Cart