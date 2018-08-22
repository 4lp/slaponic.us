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
	aboutClickHandler() {
		this.props.setParentState({active: "about"})
	}

	webClickHandler() {
		this.props.setParentState({active: "web"})
	}

	creativeClickHandler() {
		this.props.setParentState({active: "creative"})
	}

	contactClickHandler() {
		this.props.setParentState({active: "contact"})
	}

	homeClickHandler() {
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
				<button type="button" style={styles.menuButton} onClick={this.contactClickHandler.bind(this)}>contact</button>
			</div>
			</div>
			<hr />
			</div>
			)
	}
}
