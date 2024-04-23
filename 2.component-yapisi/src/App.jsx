import { useState } from 'react'
import Login from './Login' // Export Default
import { users } from './Login' // Users'ları dışarıya aktarmak için, sadece Export

function App() {

  console.log(users)


  return (
    <div><Login></Login></div>
  )
}

export default App
