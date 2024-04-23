import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a = 15;
  const firstname = "Yiğit";
  let vize1 = 60;
  let vize2 = 80;


  return (
    <div>

      {/* <p>a değişkenin değeri : {a} "</p>
      <p>Müşterinin adi: {firstname}</p> */}
      <p>Ortalama:{(vize1 + vize2) / 2}</p>



    </div>
  )
}

export default App
