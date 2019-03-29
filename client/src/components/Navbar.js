import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBIcon
} from "mdbreact";


class Navbar extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      loggedIn: false,
      userInfo: null,
      defaultImage: 'https://res.cloudinary.com/yowats0n/image/upload/v1527687540/default_user.png',
      brubeck: '5c9b9ba2348c093988199509',
      sonic: '5c9b9bd0348c09398819950a',
      kv: '5c9b9b5f348c093988199508',
      bowie: '5c9b9c1e348c09398819950b',
      wutang: '5c9b9c49348c09398819950d',
      otis: '5c9b9c39348c09398819950c',
    }
  }

  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">R-W Music Shoppe</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/Main">Main</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/NewArrivals">New Arrivals</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/OnSale">On Sale</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Cart</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {/* POPULATE WITH CART ITEMS */}
                  {/* ENTIRE CART WILL EVENTUALL BE A LINK TO CART */}
                  <MDBDropdownItem href="#!">View Entire Cart</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
            <MDBNavbarNav right>
            { 
              !this.state.loggedIn 
              ?
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav>
                    <span className="mr-5">Login</span>
                  </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <MDBBtn className="login-button" outline color='danger' social="gplus" href='http://localhost:3001/auth/google'>
                          <MDBIcon fab icon="google-plus-g" className="pr-1"/> Login with Google
                        </MDBBtn>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBBtn className="login-button" outline color='primary' social="fbook">
                          <MDBIcon fab icon="facebook-f" className="pr-1"/> Login with Facebook
                        </MDBBtn>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              :
              <MDBNavItem>
                <MDBNavLink to="/" onClick={this.logout} className="mr-5">
                {
                  this.state.userInfo 
                  ? <img className="nav-image" src={this.state.userInfo.thumbnail} alt='thumbnail'/>
                  : <img className="nav-image" src={this.state.defaultImage} alt='thumbnail'/>
                }
                  Logout
                </MDBNavLink>
              </MDBNavItem>
            }
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>

            </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}


export default Navbar;