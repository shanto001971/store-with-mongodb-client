import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handelInput = (event) => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email }
    console.log(user)
    fetch('http://localhost:5000/user', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify(user)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }

  return (
    <>
      <h1>Simpule cloud</h1>
      <form onSubmit={handelInput}>
        <input type="text" name="name" placeholder='Your Name' id="" />
        <br />
        <input type="text" name="email" placeholder='Your Email' id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
