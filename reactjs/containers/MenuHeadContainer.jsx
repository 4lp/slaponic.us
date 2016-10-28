import React from "react"

const styles = {
	menuButton: {
		margingLeft: "10px",
		marginRight: "10px",
		border: "none",
		backgroundColor: "#EDFFFA",  
	},
	menuContainer: {
		backgroundColor: "#EDFFFA",
	},
	head: {
		margin: "0",
		fontFamily: "Yatra One, cursive"
	}
}

export default class MenuHeadContainer extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	  active: this.props.active
  	};
  }

	aboutClickHandler() {
		this.setState({active: "about"})
		this.props.setParentState({active: "about"})
	}

	webClickHandler() {
		this.setState({active: "web"})
		this.props.setParentState({active: "web"})
	}

	creativeClickHandler() {
		this.setState({active: "creative"})
		this.props.setParentState({active: "creative"})
	}

	homeClickHandler() {
		this.setState({active: ""})
		this.props.setParentState({active: ""})
	}

	render (){
		return (
			<div style={styles.menuContainer}>
			<div className="text-center">
			<br />
			<h3 style={styles.head}>m i k e 🌸 m e n e g a y</h3>
			</div>
			<div className="row"> 
				<br />
			</div>
			<div className="text-center">
			<div className="btn-group" role="group">
				<button type="button" style={styles.menuButton} onClick={this.homeClickHandler.bind(this)}>home</button>
				<button type="button" style={styles.menuButton} onClick={this.webClickHandler.bind(this)}>web</button>
				<button type="button" style={styles.menuButton} onClick={this.creativeClickHandler.bind(this)}>art</button>
				<button type="button" style={styles.menuButton} onClick={this.aboutClickHandler.bind(this)}>about</button>
			</div>
			</div>
			<hr />
			</div>
			)
	}
}