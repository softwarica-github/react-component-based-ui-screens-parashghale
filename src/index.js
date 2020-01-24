import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import{
  BrowserRouter as Router,
  Switch,
  Link,
  Route

} from 'react-router-dom'
import{
  Nav,Container,Row,Col,Card,Navbar,Form,Button,FormControl

} from 'react-bootstrap'


import Login from './components/Login/Login' 
import Registration from './components/Registration/Registration' 
import ContactUs from './components/ContactUs/ContactUs' 
import Carousel from 'react-bootstrap/Carousel'






class Index extends React.Component{
  constructor(){
        super()
  }

        /*Footer = () => {
         return (
                    <Row>
                      <Col sm={4}>
                      About Hotel
                      Location:
                      Phone:

                      </Col>
                      <Col sm={4}>
                      Copyright
                    </Col>
                      <Col sm={4}>
                      Map
                    </Col>
            </Row>
                )

    }*/

  render(){
    return(
      <Router>
          <div style={{
            padding:"15px",

          }}>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                 {/* <img
                    alt="logo"
                    src="logoo.jpeg"
                    width="30"
                    height="30"
                  />{' '}*/}
                  Peace Boys Hostel
                </Navbar.Brand>
                <Nav variant="pills">
              <Nav.Item>
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
              </Nav.Item> 
               <Nav.Item>
                <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
              </Nav.Item>
               <Nav.Item>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav.Item>
               <Nav.Item>
                <Nav.Link as={Link} to="/contactUs">ContactUs</Nav.Link>
              </Nav.Item>
             
              
              </Nav>
        
             </Navbar>

             


          </div>
        

          <Switch>

            <Route exact path="/login">
              < Login/>
            </Route>

            <Route path="/login" component={Login}/>
          </Switch>



          <Switch>

            <Route exact path="/registration">

              < Registration/>

            </Route>
            <Route path="/registration" component={Registration}/>

          </Switch>
          <Switch>

            <Route exact path="/contactUs">

              < ContactUs/>

            </Route>
            <Route path="/contactUs" component={ContactUs}/>

          </Switch>
      </Router>




    )
  
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'))





