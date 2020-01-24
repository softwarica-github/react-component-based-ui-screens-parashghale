import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
class ContactUs extends React.Component {

constructor(){
  super()

  this.state = {

    Fullname:'',
    email:'',
    message:'',
  
    redirect:false

  }
}

usernameChangeHandler = (event) => {

if(event.target.value.length < 6){
  this.setState({validationMessage:'Username Cannot be less than 6 chars '})
}

  this.setState({username: event.target.value})



}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
}

formSubmitHandler = (e) => {
  e.preventDefault()


// use API call to post the data 
//fetch byt default JS
// Axios external package

var headers = {

'Content-Type':'application/json'
// not 'x-form-urlencded '

}

var data = {

  fullname:this.state.fullname,
  message:this.state.message

}

//mfetch method XMLHTTPREquest
  Axios.post('http://localhost:3023/registration', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 201){

    this.setState({redirect:true})

    // redirect to login page 
  }



})
.catch( (err) =>  {

})



  // console.log(this.state)
}

render(){

//what to render based in state

if(this.state.redirect){

return (
  <Redirect to='/login' />
  )

// toast message

}



  return(

// if(this.state.redirect == true){ 

//   //actual redirect work

// }

<div
style={{width:"500px",
backgroundColor: "lightgreen",
 padding: "10px",

margin:"auto"}}
 >
<div class="col-75">
<Form onSubmit={this.formSubmitHandler}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Fullname </Form.Label>
    <Form.Control type="text" placeholder="Enter Fullname"/>
    <Form.Text className="text-muted">
      {this.state.validationMessage}
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control type="text" placeholder="Enter Your Email"/>
    <Form.Text className="text-muted">
      {this.state.validationMessage}
    </Form.Text>
  </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>message</Form.Label>
    <Form.Control type="password" placeholder="Enter message" />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>
  )
}
}

export default ContactUs;