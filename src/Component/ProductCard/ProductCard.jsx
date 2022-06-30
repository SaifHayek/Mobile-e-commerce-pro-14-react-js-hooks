import React, { useEffect, useState } from 'react'
import './ProductCard.css'
function ProductCard(props) {
  
  const changeMobiles = (e) => {

      let index = props.mobiles.findIndex(ele => ele.id == props.id) 
      let newMobiles = [...props.mobiles]
      if([e.target.id] == 'plus'){
          newMobiles[index].count = newMobiles[index].count + 1
      }else if(e.target.id == 'minus'){
          newMobiles[index].count = newMobiles[index].count == 0 ? 0 :newMobiles[index].count - 1 
      }
      props.setMobiles(newMobiles)
  }

  return (
    <div className='product-card'>
        <img src={props.imgSrc} alt="" className='card-img'/>
        <h3 className='phone-name'>{props.phoneName}</h3>
        <div className='price-container'>
              <span>Price : ${props.price}</span>
              <div className='mobiles-count'>
                <button onClick = {changeMobiles} id='plus'> + </button>
                <span className='count'> {props.count} </span>
                <button onClick = {changeMobiles} id='minus'> - </button>
              </div>
        </div>
        <button className='add-btn'>{props.count ?'In Cart':'Add to cart'}</button>
    </div>
  )
}

export default ProductCard
