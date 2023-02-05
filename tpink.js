import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Navbar() {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobilMenu = () => setClick(false);

const showButton = () => {
  if(window.innerWidth <= 960){
    setButton(false);
  }else{
    setButton(true);
  }
};
window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
       <div className="navbar-container">
       <Link to="/" className="navbar-logo">
        TPink <i className='fab fa-typo3' />
       </Link>
       <div className='menu-icon' onClick ={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
       </div>
       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'> 
      <Link to='/home' className='nav-links' onClick={closeMobilMenu}>
        Home 
      </Link>
      </li>
      <li className='nav-item'> 
      <Link to='/information' className='nav-links' onClick={closeMobilMenu}>
         Information
      </Link>
      </li>
      <li className='nav-item'> 
      <Link to='/donate' className='nav-links' onClick={closeMobilMenu}>
        Donate 
      </Link>
      </li>
      <li className='nav-item'> 
      <Link to='/sign-up' className='nav-links-mobil' onClick={closeMobilMenu}>
        Sign Up
      </Link>
      </li>
       </ul>
      {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
       </div>
    </nav>
    </>
  )
}

export default Navbar;
