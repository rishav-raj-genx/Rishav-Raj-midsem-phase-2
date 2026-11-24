import { useState } from 'react'
import BikeCard from '../components/BikeCard.jsx'

function Bikes(props) {
  const [selectedType, setSelectedType] = useState('All')

  let filteredBikes = []

  if (selectedType === 'All') {
    filteredBikes = props.bikeList
  } else {
    for (let i = 0; i < props.bikeList.length; i++) {
      if (props.bikeList[i].type === selectedType) {
        filteredBikes.push(props.bikeList[i])
      }
    }
  }

  return (
    <div className="page">
      <h1>Bikes</h1>
      <label>
        Filter by type:
        <select value={selectedType} onChange={(event) => setSelectedType(event.target.value)}>
          <option value="All">All</option>
          <option value="Scooter">Scooter</option>
          <option value="Bike">Bike</option>
          <option value="Electric">Electric</option>
        </select>
      </label>
      <div className="bike-list">
        {filteredBikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} changeRentStatus={props.changeRentStatus} />
        ))}
      </div>
    </div>
  )
}

export default Bikes
