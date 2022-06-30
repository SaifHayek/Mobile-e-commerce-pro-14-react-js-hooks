import React, { Fragment, useContext, useEffect, useState } from 'react'
import { MobileContext, SetMobileContext } from '../../App'
import ProductCard from '../ProductCard/ProductCard'
import Slider from '../Slider/Slider'
import './Product.css'


function Product() {

  const mobiles = useContext(MobileContext)
  const setMobiles = useContext(SetMobileContext)

  return (
      <Fragment>
            <Slider/>
            <section className='products'>
                  <h2 className='products-title'>our products</h2>
                  <div className="cards">
                      {mobiles.map(ele => <ProductCard phoneName = {ele.phone_name} 
                                                      imgSrc = {ele.image} 
                                                      key={ele.id} 
                                                      price = {ele.price} 
                                                      id = {ele.id} 
                                                      count = {ele.count}
                                                      mobiles = {mobiles}
                                                      setMobiles = {setMobiles}
                                                      />)}
                  </div>
            </section>
      </Fragment>
  )
}

export default Product
