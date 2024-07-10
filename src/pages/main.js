import React, { useEffect } from 'react'
import {useDispatch , useSelector} from "react-redux"
import Card from '../component/Card'
import './main.css'
import Header from '../component/header'
import { fetchedItem } from '../redux/productSlice'

function Main() {
    const dispatch = useDispatch()
    const productItem = useSelector((state)=>state.product.productItem)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(result=>{
              dispatch(fetchedItem(result))
            })
    },[])
  return (
    <>
   <Header/>
    <div className='container'>
        {productItem.length?productItem.map((item  )=>{
            return (
              < div key= {item.id}>
            <Card 
            title={item.title} 
            id={item.id} 
            img={item.image}
            price={item.price}
            />
            </div>)
        }):null} 
    </div>
    </>
  )
}

export default Main