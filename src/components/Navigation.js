import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

function Navigation() {
  let navigate = useNavigate();
  const isLogin = localStorage.getItem('isLogin');
  const doLogout = async (e)=> {
    e.preventDefault();
    localStorage.setItem('isLogin', false)
    navigate('/login', {replace:true})
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Vhiweb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                <NavLink to={'/user'} className={'nav-link'}>User</NavLink>
                {
                  isLogin ==='true' ?
                  <a href='#' className={'nav-link'} onClick={doLogout}>Logout</a>
                  :
                  <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
                }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;