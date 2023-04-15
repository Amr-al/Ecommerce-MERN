import React, { useState } from 'react';
import logo from "../../assests/logo.png";
import men from "../../assests/men.jpg";
import women from "../../assests/women.jpg";
import access from "../../assests/accessories.jpg";
import collect from "../../assests/collections.jpg";
import {FiSearch} from 'react-icons/fi';
import {AiTwotoneHeart , AiOutlineShoppingCart} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import MenuCard from '../menu-card/MenuCard';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

import './navbar.css';



const Menu = ({changeState1,nav1,changeState2,nav2,changeState3,nav3,changeState4,nav4}) => (
    <>
      <div className="menu-hovered">
        <p><Link to="/men" className='nav-item' id='men-item'
        onMouseEnter={() => changeState1(true)} onMouseLeave={() => changeState1(false)}>Men</Link></p>
        
        {nav1 && <MenuCard imageUrl={men} idd='men' onClick={() => changeState1(false)}/> }
      </div>

      <div className="menu-hovered">
        <p><Link to="/women" className='nav-item' id='women-item'
        onMouseEnter={() => changeState2(true)} onMouseLeave={() => changeState2(false)}>Women</Link></p>
        {nav2 && <MenuCard imageUrl={women} idd='women'/> }
      </div>

      <div className="menu-hovered">
        <p><Link to="/accessories" className='nav-item' id='acces-item'
        onMouseEnter={() => changeState3(true)} onMouseLeave={() => changeState3(false)}>Accessories</Link></p>
        {nav3 && <MenuCard imageUrl={access} idd='accessesories'/> }
      </div>

      <div className="menu-hovered">
        <p><Link to="/collections" className='nav-item' id='collection-item' 
        onMouseEnter={() => changeState4(true)} onMouseLeave={() => changeState4(false)}>Collection</Link></p>
        {nav4 && <MenuCard imageUrl={collect} idd='collections'/>}
      </div>
      
    </>
  )

const NavbarC = () => {

 /*  const[nav1,setNav1] = useState(false);
  const changeState1 = (state) => {
    setNav1(state);
    console.log("aannnna")
  }

  const[nav2,setNav2] = useState(false);
  const changeState2 = (state) => {
    setNav2(state);
  }

  const[nav3,setNav3] = useState(false);
  const changeState3 = (state) => {
    setNav3(state);
  }

  const[nav4,setNav4] = useState(false);
  const changeState4 = (state) => {
    setNav4(state);
  } */

  {/* <Navbar expand="lg" variant="light" className='eee'>
            <Container>
    <div className='e-commerce-navbar section__padding container-fluid'>
        <div className="navbar-logo-conatiner">

            <form class="navbar-form" role="search">
                <input className="navbar-searchbar" type="search" placeholder="Search the store" aria-label="Search" />
                <FiSearch />
            </form>

            <Link to="/" className='navbar-logo'><img src={logo} alt="logo" /></Link>
            <div className="logos">
            <AiTwotoneHeart className="heart"/>
            <BsPerson className='person'/>
            <AiOutlineShoppingCart className='cart'/>
            </div>
        </div>

        
            <Navbar.Toggle aria-controls="responsive-navbar-nav" >
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto navbar-navitems">
                <Nav.Link className='navvv'><Link className='nav-item' to='/men'>Men</Link></Nav.Link>
                <MenuCard imageUrl={men} idd='men' id='mydiv'/>
              </Nav>
            
            </Navbar.Collapse>
            

    </div>
    </Container>
        </Navbar> */}
        const[toggleMenu,setToggleMenu] = useState(false);
        const logout = ()=>{
          localStorage.removeItem('auth')
          window.location.reload()
        }

  return (
      <div className="e-commerce_navbar section__padding ">
          <div className="navbar-logo-conatiner">

            <form className="navbar-form" role="search">
                <input className="navbar-searchbar" type="search" placeholder="Search the store" aria-label="Search" />
                <FiSearch />
            </form>
            <div className="e-commerce-navbar-menu">
            {
              toggleMenu?<RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)}/>
              :<RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)}/>
            }
            
            </div>
            
            <Link to="/" className='navbar-logo'><img src={logo} alt="logo" /></Link>
            <div className="logos">
              <AiTwotoneHeart className="heart"/>
              <Link to={localStorage.getItem('auth')? '/profile': '/register'} style={{color:'unset'}}>
                {
                  <BsPerson className='person'/>
                }
              </Link>
              
              <AiOutlineShoppingCart className='cart'/>
            </div>
          </div>
          <div className="navbar-bottom">
          <div className="navbar-navitems">
            <Menu />
          </div>
            {
                  toggleMenu && <div className='e-commerce-navbar-menu-container'>
                  <NavDropdown title={<Link to='/men'>Men</Link>} className='dropdown'>
                      <NavDropdown.Item><Link to='/men/dressy'>Dressy</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/men/casual'>Casual</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/men/pajamas'>Pajamas</Link></NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title={<Link to='/women'>Women</Link>} className='dropdown'>
                      <NavDropdown.Item><Link to='/women/dressy'>Dressy</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/women/casual'>Casual</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/women/pajamas'>Pajamas</Link></NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title={<Link to='/accessories'>Accessories</Link>} className='dropdown'>
                      <NavDropdown.Item><Link to='/accessories/dressy'>Dressy</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/accessories/casual'>Casual</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/accessories/pajamas'>Pajamas</Link></NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title={<Link to='/collection'>Collection</Link>} className='dropdown'>
                      <NavDropdown.Item><Link to='/collection/dressy'>Dressy</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/collection/casual'>Casual</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link to='/collection/pajamas'>Pajamas</Link></NavDropdown.Item>
                  </NavDropdown>
              </div>
            }
          </div>
          
          
      </div>
  )
}

export default NavbarC;
