
import React from 'react'
import './Button.css'
class Button extends React.Component{

constructor(){
super()
}

render(){

const buttonStyles = {

testStyle: { // camelccase .. not reglar css 
	color:'red',
	fontSize:'30px'  //font-size
}

}

	return(

		<button className="button" style={buttonStyles.testStyle} >{this.props.label}</button> // style

		)
}

}

export default Button