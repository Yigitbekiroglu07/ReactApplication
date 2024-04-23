import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'


function App() {

  const [firstName, setFirstname] = useState('Yiğit');
  const [LastName, setLastname] = useState('Bekiroğlu');
  return (
    <>
      {<div>
        <Product productName="Ayakkabı" price={3200} />
      </div>}


    </>

  )
}

export default App
