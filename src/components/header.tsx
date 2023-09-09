import { Link } from "react-router-dom"
import '../styles/App.css'

const Header = () => {
  return (
    <h2 className="App-header">
      <div className="Name-header">
      <Link to="/">Don Romaniello</Link>
      </div>
    </h2>
  )
}

export default Header

