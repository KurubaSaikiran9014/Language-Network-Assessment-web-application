import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header">
    <img
      src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680011761/TLN_logo_1_o2tupe.png"
      alt="Language Networks logo"
      className="logo"
    />
    <>
      <Link to="/">
        <h1>HOME</h1>
      </Link>
      <Link to="/about">
        <h1>ABOUT</h1>
      </Link>
    </>
  </nav>
)

export default Header
