function Home(props) {
  let availableCount = 0
  let rentedCount = 0

  for (let i = 0; i < props.bikeList.length; i++) {
    if (props.bikeList[i].isAvailable === true) {
      availableCount = availableCount + 1
    }
    if (props.bikeList[i].isRented === true) {
      rentedCount = rentedCount + 1
    }
  }

  return (
    <div className="page">
      <h1>Bike Rental Portal</h1>
      <p>Choose a bike and rent it for your next trip.</p>
      <p>Check the available bikes and manage your rentals easily.</p>
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Bikes</h3>
          <p>{props.bikeList.length}</p>
        </div>
        <div className="summary-card">
          <h3>Available Bikes</h3>
          <p>{availableCount}</p>
        </div>
        <div className="summary-card">
          <h3>Rented Bikes</h3>
          <p>{rentedCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
