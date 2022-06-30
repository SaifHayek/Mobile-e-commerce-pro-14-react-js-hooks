import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers'
import React, { Fragment, useContext, useState } from 'react'
import { MobileContext, SetMobileContext } from '../../App'
import ProductCard from '../ProductCard/ProductCard'
import './Cart.css'

function Cart() {
  const mobiles = useContext(MobileContext)
  const setMobiles = useContext(SetMobileContext)
  const filteredMobiles = mobiles.filter(ele => ele.count > 0) 
  const subTotal = filteredMobiles.reduce((acc,ele) => acc + ele.price*ele.count ,0)
  const taxes = filteredMobiles.reduce((acc,ele) => acc + ele.price*ele.count*0.1 ,0)
  const [isBought,setIsBought] = useState(false)

  const removeAll = (e) => {
    if(e.target.id == 'buy-btn' && filteredMobiles.length){
        setIsBought(true)
    }
    setMobiles(mobiles.map(ele => {
      return {...ele,count : 0 }
    }))
  } 


  
  const normalCart = () => {
    return(
       <Fragment>
            <h2 className="cart-title">
                  Your cart 
            </h2>
            <div className="cards">
                  {filteredMobiles.map(ele => <ProductCard  phoneName = {ele.phone_name} 
                                                            imgSrc = {ele.image} 
                                                            key={ele.id} 
                                                            price = {ele.price} 
                                                            id = {ele.id} 
                                                            count = {ele.count}
                                                            mobiles = {mobiles}
                                                            setMobiles = {setMobiles}
                                                            />)}
            </div>
            
            <div className="bill">
               <div className="sub-total">
                    <span>sub Total</span> : $ {subTotal.toFixed(2)} 
               </div>
               <div className="sub-taxes">
                    <span>sub Tax</span> : $ {taxes.toFixed(2)}
               </div>
               <div className="total">
                    <span>Total</span> : $ {(subTotal + taxes).toFixed(2)}
               </div>
               <button className='buy-btn btn' onClick={removeAll} id='buy-btn'>
                      Buy Now
               </button>
               <button className="remove-btn btn" onClick={removeAll} id='remove-btn'>
                      Remove All
                </button>
            </div>
       </Fragment>
    )
  }
  const emptyCart = () => {
    return (
      <>
          <h2 className="cart-title">{isBought ?'Buying Done successfully':'Your cart is Empty'}</h2>
          <hr className='line'/>
      </>
    )
  }
  
  return (
    <section className='cart'>
        {filteredMobiles.length ? normalCart() : emptyCart()}
    </section>
  )
}

export default Cart
