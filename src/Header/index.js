import {GoThreeBars} from 'react-icons/go'
import {CgProfile} from 'react-icons/cg'
import './index.css'

const Header = () => (
  <nav className="navbox">
    <div className="navrow">
      <GoThreeBars />
      <p className="navlinks">IndigiLearn</p>
    </div>
    <div className="navrow">
      <p className="navlinks">Buy Courses</p>
      <p className="navlinks">Buy Books</p>
      <p className="navlinks">Programs</p>
      <p className="navlinks">Free Resources</p>
    </div>
    <div className="navrow">
      <CgProfile />
      <p className="navlinks">Login/Signup</p>
    </div>
  </nav>
)
export default Header
