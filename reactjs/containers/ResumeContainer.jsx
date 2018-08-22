import React from "react"

export default class ResumeContainer extends React.Component {
	render () {
		return (
			<a href={this.props.content[0].resume} target="_blank">
				resume
			</a>
		)
	}
}