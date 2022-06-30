import React, { useState } from 'react'
import './Slider.css'
import {GrNext,GrPrevious} from 'react-icons/gr'

function Slider() {
   const imag1 = 'https://images.unsplash.com/photo-1610664921890-ebad05086414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
   const imag2 = 'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80'
   const imag3 = 'https://images.unsplash.com/photo-1606293459209-958d5c67c84b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80'
   const [images,setImages] = useState([imag1,imag2,imag3])

   let [count,setCount] = useState(0)

   const increaseCount = () => {
        setCount(count + 1)
        if(count == images.length - 1){
            setCount(0)
        }
   }
   const decreaseCount = () => {
        setCount(count - 1)
        if(count == 0){
            setCount(images.length - 1)
        }
   }

  return (
    <div className='slider'>
        <GrPrevious className='slider-icon prev-icon' onClick={decreaseCount}/>
       <img src={images[count]} alt="" className='slider-img'/> 
       <GrNext className='slider-icon next-icon' onClick={increaseCount}/>
    </div>
  )
}

export default Slider
