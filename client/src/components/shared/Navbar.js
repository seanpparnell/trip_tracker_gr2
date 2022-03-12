import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <ul style={{ color: 'black', fontSize: '24px', display: 'flex', alignContent:'centeer'}}>
      <Link to='/' style={{textDecoration: 'none', listStyleType: 'none', padding:'20px'}}>
        <li>Home</li>
      </Link>
      <Link style={{textDecoration: 'none', listStyleType: 'none', padding:'20px'}} to='/About'>
        <li>About</li>
      </Link>
      <Link style={{textDecoration: 'none', listStyleType: 'none', padding:'20px'}} to='/Users'>
        <li>Users</li>
      </Link>
    </ul>
  </>
)

export default Navbar;