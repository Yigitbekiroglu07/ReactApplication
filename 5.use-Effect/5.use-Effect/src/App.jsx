import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  useEffect(() => { // Callback function
    console.log("Her zaman çalışır.")
  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır.")
  }, []) // Veritabanından ürünleri getir ve listele.

  useEffect(() => {
    console.log("İlk render edildiğinde ve FIRSTNAME state değeri değiştiğinde çalışır..")
  }, [firstName])

  useEffect(() => {
    console.log("İlk render edildiğinde ve LASTNAME state değeri değiştiğinde çalışır..")
  }, [lastName])


  return (
    <div>
      <div><button onClick={() => setfirstName("Enes")}>Adı Değiştir</button></div>
      <div><button onClick={() => setlastName("Bayram")}>SoyAdı Değiştir</button></div>
    </div>
  )
}

export default App
