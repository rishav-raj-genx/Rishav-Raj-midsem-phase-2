import { Link } from 'react-router'

function Rented(props) {
  const rentedBikes = []
  let totalPrice = 0

  for (let i = 0; i < props.bikeList.length; i++) {
    if (props.bikeList[i].isRented === true) {
      rentedBikes.push(props.bikeList[i])
      totalPrice = totalPrice + props.bikeList[i].pricePerHour
    }
  }

  return (
    <div className="page">
      <h1>Rented Bikes</h1>
      {rentedBikes.length === 0 ? (
        <p>No bikes rented</p>
      ) : (
        <>
          <h3>Total Price Per Hour: ₹{totalPrice}</h3>
          <div className="bike-list">
            {rentedBikes.map((bike) => (
              <div className="bike-card" key={bike.id}>
                <h3>{bike.name}</h3>
                <p>Brand: {bike.brand}</p>
                <p>Type: {bike.type}</p>
                <p>Price: ₹{bike.pricePerHour}/hr</p>
                <p>Location: {bike.location}</p>
                <Link to={`/bikes/${bike.id}`} className="details-link">View Details</Link>
                <button onClick={() => props.changeRentStatus(bike.id)}>Return</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Rented
