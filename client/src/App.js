// main react imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MDBCardGroup, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCardFooter, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBIcon, MDBTooltip, MDBJumbotron, MDBRow, MDBCol, MDBView, MDBBadge } from 'mdbreact';
// import Facebook from './components/Facebook';

// containers
// none

// css/images
import './App.css';
import TF from "./img/davebrubeck.jpg";
import SB from "./img/sonics.jpg";
import KV from "./img/kvelertak.jpg";
import DB from "./img/ziggy.jpg";
import WT from "./img/wutang.jpg";
import OR from "./img/otis.jpg";

// backend integration
import API from "./utils/API";

// context
const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    userID: null,
    loggedIn: false,
    userInfo: null,
    albumInfo: [],
    // userCart: [],
    defaultImage: 'https://res.cloudinary.com/yowats0n/image/upload/v1527687540/default_user.png',
  }

  componentDidMount() {
    console.log('mounted')
    this.userCheck();
  }

  addToCart = a => {
    console.log(`albumAdded ${a}`)
    console.log(`userID ${this.state.userID}`)
    API
      .addToCart(this.state.userID, a)
    this.getUserInfo(this.state.userID)
    console.log('added to cart')
    this.getAlbumInfo()
  }

  logout = () => {
    this.setState({ loggedIn: false });
    API
      .logout()
  }

  getUserInfo = (a) => {
    API
      .getUserInfo(a)
      .then(res => {
        console.log(res.data)
        this.setState({ userInfo: res.data })
      })
  }

  userCheck = () => {
    const userID = window.location.href.split('?=')[1]
    if(userID){
      console.log(userID)
      this.setState({ userID: userID, loggedIn: true})
      this.getUserInfo(userID)
      setTimeout(() => {
        this.getAlbumInfo()
      }, 500);
    }
    else{
      console.log("👎🏽");
    }
  }

  getAlbumCount = () => {
    return this.state.userInfo._albums.length
  }

  getAlbumInfo = () => {
    console.log('getting album info..')
    this.setState({ albumInfo: [] })
    for (var i = 0; i < this.state.userInfo._albums.length; i++){
      API
        .getAlbumInfo(this.state.userInfo._albums[i])
        .then(res => {
          this.setState({ albumInfo: [...this.state.albumInfo, res.data] })
        })
    }
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        loggedIn: this.state.loggedIn,
        userInfo: this.state.userInfo,
        defaultImage: this.state.defaultImage,
        // userCart: this.state.userCart,
        albumInfo: this.state.albumInfo,
        
        addToCart: this.addToCart,
        userCheck: this.userCheck,
        logout: this.logout,
        getUserInfo: this.getUserInfo,
        getAlbumCount: this.getAlbumCount,
        getAlbumInfo: this.getAlbumInfo,
        
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

// NAVBAR
class Navbar extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MyContext.Consumer>
        {({ loggedIn, logout, userInfo, defaultImage, getAlbumCount, getAlbumInfo}) => (
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
                {
                  !loggedIn ?                 
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <span className="mr-2">Cart</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem>Log In to view Cart!</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>

                  :
                  <MDBNavItem>
                    <MDBNavLink to="/Cart" onClick={() => getAlbumInfo()}>
                      Cart
                      <span> 
                      {
                        userInfo != null
                        ? <MDBBadge color="danger" className="ml-2">{getAlbumCount()}</MDBBadge>
                        : <MDBBadge color="danger" className="ml-2">-</MDBBadge>
                      }
                      </span>
                    </MDBNavLink>
                    {/* <button onClick={() => getAlbumInfo()}>CLICK</button> */}
                  </MDBNavItem>
                }
              </MDBNavbarNav>
                <MDBNavbarNav right>
                { 
                  ! loggedIn 

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
                            <MDBBtn className="login-button" outline color='primary' social="fbook" href='./components/Facebook'
                        >
                              <MDBIcon fab icon="facebook-f" className="pr-1"/> Login with Facebook
                            </MDBBtn>
                            {/* <Facebook/> */}

                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  
                  :
                  <MDBNavItem>
                    <MDBNavLink to="/" onClick={logout} className="mr-5">
                    {
                      userInfo 
                      ? <img className="nav-image" src={userInfo.thumbnail} alt='thumbnail'/>
                      : <img className="nav-image" src={defaultImage} alt='thumbnail'/>
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
        )}
      </MyContext.Consumer>
    )
  }
}

// CART
const Cart = () => {
  return (
    <MyContext.Consumer>
      {({ loggedIn, albumInfo }) => (
        <div className="cart-div">
          {
            !loggedIn

            ? <div className="empty-cart"><h1>Log In to see Cart!</h1></div>
              
            : <div className="valid-cart">

              {
                albumInfo.length <= 0

                ? <div className="empty-cart"><h1>Cart Empty!</h1></div>

                : 
                albumInfo.map(item => (
                  <div className='valid-inner-cart' key={albumInfo.indexOf(item)}>
                    <MDBCard>
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="3">
                            <MDBView hover rounded className="z-depth-1-half mb-4">
                              <img
                                className="img-fluid album-art"
                                src={item.art}
                                alt={item.artist}
                              />
                            </MDBView>
                          </MDBCol>
                          <MDBCol md="9" className="cart-inner-text">
                            <h2 className="font-weight-bold dark-grey-text"> {item.artist} - {item.title} </h2>
                            <p>{item.price}</p>
                            <MDBBadge className="pill-text" pill color="secondary">Remove</MDBBadge>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                ))
              }
            </div>
          }
        </div>
        )}
    </MyContext.Consumer>
  )
}

// RECORD COMPONENT
const Record = props => {
  return (
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
      <MDBCardImage cascade top src={props.image} waves />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle>
          <a href="#!"><strong>{props.title}</strong></a>
        </MDBCardTitle>
        <MDBCardTitle tag="h5">
          <strong>{props.artist}</strong>
        </MDBCardTitle>
        <MDBCardText>
          {props.text}
        </MDBCardText>
        <MDBCardFooter>
          <div className="mdb-footer">
            <span className="float-left">${props.price}</span>
            <span className="float-right">
              <MyContext.Consumer>
                {({ addToCart, loggedIn }) => (
                  <div>
                    {
                      loggedIn

                      ? <button className="cart-button" onClick={() => addToCart(props.id)}><i class="fas fa-cart-arrow-down"></i></button>

                      : <button className="cart-button"><i class="fas fa-cart-arrow-down"></i></button>

                    }
                  </div>
                )}
              </MyContext.Consumer>
            </span>
          </div>
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  )
}


// ONSALE PAGE
const OnSale = () => {
  return (
    // <MDBContainer>
      <MDBCardGroup deck>
        <Record title='Ziggy Stardust' artist='David Bowie' text='A must own! On sale Now!' image={DB} price='19' id='5c9b9c1e348c09398819950b' />
        <Record title='36 Chambers' artist='Wu-Tang CLan' text='A must own! On sale Now!' image={WT} price='19' id='5c9b9c49348c09398819950d' />
        <Record title='Otis Redding' artist='Otis Redding' text='A must own! On sale Now!' image={OR} price='19'  id='5c9b9c39348c09398819950c' />
      </MDBCardGroup>
    // </MDBContainer>
  )
}

// NEW ARRIVALS PAGE
const NewArrivals = () => {
  return (
    // <MDBContainer>
      <MDBCardGroup deck>
        <Record title='Kvelertak' artist='Kvelertak' text='The eponymous debut album by the Norwegian band Kvelertak' image={KV} price='25' id='5c9b9b5f348c093988199508' />
        <Record title='Boom!' artist='The Sonics' text='The second studio album by the American garage rock band' image={SB} price='25' id='5c9b9bd0348c09398819950a' />
        <Record title='Take Five' artist='The Dave Brubeck Quartet' text='The piece has been a staple of jazz and pop music since it was first released.' image={TF} price='25' id='5c9b9ba2348c093988199509' />
      </MDBCardGroup>
    // </MDBContainer>
  )
}

// MAIN PAGE
const Main = () => {
  return (
    // <MDBJumbotron>
      // <MDBContainer>
        <div className="inner-container">
          <div className="bg-container">
            <div className="inner-main-content">
              <h1 className="text-center"><strong>Welcome to R & W Music Shoppe</strong></h1>
              <h2 className="text-center">Definitely better than Amazon</h2>
              <MDBBtn className="btn-center" href="/NewArrivals"> Our New Arrivals!</MDBBtn>
            </div>
          </div>
        </div>
      // </MDBContainer>
    // </MDBJumbotron>
  )
}

// APP
class App extends Component{
  render() {
    return (
      <MyProvider>
        <Router>
          <div className="main-container">
            <Navbar /> 
            <div className="content">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/Main" component={Main} />
                <Route exact path="/OnSale" component={OnSale} />
                <Route exact path="/NewArrivals" component={NewArrivals} />
                <Route exact path="/Cart" component={Cart} />
                <Route component={Main} />
              </Switch>
            </div>
          </div>
        </Router>
      </MyProvider>
    )  
  }
} 

export default App;