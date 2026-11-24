import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Bikes from './pages/Bikes.jsx'
import Details from './pages/Details.jsx'
import Rented from './pages/Rented.jsx'
import { bikesData } from './data/bikes.js'
import './App.css'

function App() {
  const [bikes, setBikes] = useState(bikesData)

  function changeRentStatus(bikeId) {
    const newBikeList = []

    for (let i = 0; i < bikes.length; i++) {
      const bike = bikes[i]

      if (bike.id === bikeId) {
        if (bike.isRented === true) {
          newBikeList.push({ ...bike, isRented: false })
        } else {
          newBikeList.push({ ...bike, isRented: true })
        }
      } else {
        newBikeList.push(bike)
      }
    }

    setBikes(newBikeList)
  }

  let rentedCount = 0
  for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].isRented === true) {
      rentedCount = rentedCount + 1
    }
  }

  return (
    <div>
      <Navbar rentedCount={rentedCount} />
      <main>
        <Routes>
          <Route path="/" element={<Home bikeList={bikes} />} />
          <Route path="/bikes" element={<Bikes bikeList={bikes} changeRentStatus={changeRentStatus} />} />
          <Route path="/bikes/:id" element={<Details bikeList={bikes} changeRentStatus={changeRentStatus} />} />
          <Route path="/rented" element={<Rented bikeList={bikes} changeRentStatus={changeRentStatus} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
