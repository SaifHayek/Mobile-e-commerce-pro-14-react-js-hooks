import React, { createContext ,useState,useEffect } from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Cart from './Component/Cart/Cart'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Product from './Component/Product/Product'
import Slider from './Component/Slider/Slider'
export const MobileContext = createContext()
export const SetMobileContext = createContext()

function App() {
  const [mobiles,setMobiles] = useState([])
  
  useEffect(() => {
    fetch('https://api-mobilespecs.azharimm.site/v2/latest')
    .then((res) => res.json())
    .then((data) =>  {
      let realData = data.data.phones.map((ele,i) => {return {...ele,id:i,price:(i+1)*70-2*6,count:0}}) 
      setMobiles(realData)
    })
    .catch((err) => console.log('error'))
  },[])
  return (
     <MobileContext.Provider value={mobiles}>
        <SetMobileContext.Provider value={setMobiles}>

            <BrowserRouter>
                  <div className='app'>
                      <Header/>
                      <Routes>
                          <Route path='/' element={<Product/>}/>
                          <Route path='/cart' element={<Cart/>}/>
                      </Routes>
                      <Footer/>
                  </div>
            </BrowserRouter>

        </SetMobileContext.Provider>
     </MobileContext.Provider>

  )
}

export default App
 