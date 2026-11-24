import { Link } from 'react-router'

function Navbar(props) {
  return (
    <nav className="navbar">
      <h2>Bike Rental</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/bikes">Bikes</Link>
        <Link to="/rented">Rented ({props.rentedCount})</Link>
      </div>
    </nav>
  )
}

export default Navbar
