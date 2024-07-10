import React from 'react'
import "./card.css" ;
import { useDispatch} from 'react-redux';
import { addToCart } from '../redux/cartSlice';
function Card({id , img , title , price}) {
  const dispatch = useDispatch()
  const cartItemHandler = ()=>{
    dispatch(addToCart({id , title , img , price }))
  }
  return (
    <div key={id} className='card' >
    <img className='cardImg' src={img?img:""} alt="cart img"/>
    <p className='cardTitle'>{title?`${title.slice(0,10)}...`:"..."}</p>
    <button className='btn'onClick={cartItemHandler}>Add To Cart</button>
    </div>
  )
}

export default Card