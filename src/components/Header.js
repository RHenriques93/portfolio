import { BrowserRouter, Link, Route, Switch, NavLink } from "react-router-dom";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import ProjectPage from "../pages/ProjetcPage";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";

import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

//import SignUp from "./SignUp";

import Login from "./Login";
import Logout from "./Logout";

import LogoRafael from "../images/logo_rafael.png";

import ScrollIntoView from "./ScrollIntoView";



function Header() {

 
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar className="nav-background fixed-top" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/" className="brand">
                <img
                  className="logo"
                  src={LogoRafael}
                  alt="Logotipo Rafael Henriques"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="menu-toogle-original-icon"
            >
              <p className="menu-toogle-icon">Menu</p>
            </Navbar.Toggle>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="center-align-nav justify-content-center"
            >
              <Nav className="ml-auto">

                <NavLink to="/resume" className="item" activeClassName="active">
                  Resume
                </NavLink>

                {/*<NavLink to="/projects" className="item" activeClassName="active">
                  Portfolio
                </NavLink>*/}

                   <a href="https://www.behance.net/rafael_henriques" target="_blank" className="item" activeClassName="active">
                  Portfolio
                </a>

                <NavLink  to="/contact" className="item" activeClassName="active">
                  Contact
                </NavLink>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/*<PrivateRoute exact path="/" component={Home} /> */}
        <ScrollIntoView>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          {/*<Route path="/projects" component={Projects} />*/}
          <Route path="/contact" component={Contact} />
          <Route path="/project/:project_id" component={ProjectPage} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </ScrollIntoView>
        {/*<Route path="/signup" component={SignUp} /> */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Header;
