import { Link } from 'react-router'

function BikeCard(props) {
  const bike = props.bike
  let engineText = bike.engineCC + ' cc'

  if (bike.engineCC === 0) {
    engineText = 'Electric'
  }

  return (
    <div className="bike-card">
      <h3>{bike.name}</h3>
      <p>Brand: {bike.brand}</p>
      <p>Type: {bike.type}</p>
      <p>Price: ₹{bike.pricePerHour}/hr</p>
      <p>Location: {bike.location}</p>
      <p>Engine: {engineText}</p>
      <span className={bike.isAvailable ? 'status available' : 'status maintenance'}>
        {bike.isAvailable ? 'Available' : 'Under Maintenance'}
      </span>
      <div className="card-actions">
        <Link to={`/bikes/${bike.id}`} className="details-link">View Details</Link>
        {bike.isAvailable === false ? (
          <p className="maintenance-text">Under Maintenance</p>
        ) : bike.isRented ? (
          <button onClick={() => props.changeRentStatus(bike.id)}>Return</button>
        ) : (
          <button onClick={() => props.changeRentStatus(bike.id)}>Rent</button>
        )}
      </div>
    </div>
  )
}

export default BikeCard
