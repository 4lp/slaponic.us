import React from "react"
import Lightbox from "react-image-lightbox"
import { connect } from "react-redux"
import * as resumeActions from "../actions/resumeActions"

@connect(state => ({
  resume: state.resume
}))


export default class AboutMeContainer extends React.Component {
	constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    let {dispatch, resume} = this.props
    if (!resume.isLoadingResume && resume.content === undefined) {
      dispatch(resumeActions.fetchResume())
    }
  }

  renderLoading() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            Loading...
          </div>
        </div>
      </div>
    )
  }

render() {
	let {resume} = this.props
    if (resume.isLoadingResume || resume.content === undefined) {
      return this.renderLoading()
    }
	return (
			<div className="text-center">
			<h1>👨‍💻</h1>
			<p>
			Hi! I'm Mike and I like to make pretty things on the computer, like websites and music and strange visuals to go along with them. 
			</p>
			<p>
			I was born in 1990 in Austin, TX and graduated from the University of Texas at Austin in 2012 with a BA in Philosophy (as far as philosophers go, I ❤️ Wittgenstein). 
			</p>
			<p>
			My interests include music, art, literature, comics, soccer, learning weird things about world, heavily spiced cuisine, running, pinball, fermentation/culturing, the Mother series of video games,
			modular synthesis, and cute things 💖
			</p>
			<p>
			Feel free to send me an <a href="mailto:mike.r.menegay@gmail.com">email</a> or <a href="#" onClick={()=>this.props.setParentState({active: "contact"})}> contact </a> me!
			I'd love to help you make music or a website for your project or collaborate or even just chat. 
			If you're interested here is my <a href={this.props.resume.content[0].resume} target="_blank">resume</a> (click to download a .png).
			</p>
			<p>
			I spend a lot of time keeping up with social media accounts for my music projects, <a href="https://www.facebook.com/alptrax/" target="_blank">alptrack </a>
			and <a href="https://hifrequenci.es" target="_blank">PHF</a>, so I don't really keep many for myself. I do however have a
			<a href="https://github.com/slaponicus" target="_blank"> github </a> account, an
			<a href="mailto:mike.r.menegay@gmail.com" target="_blank"> email </a> account, and a
			<a href="https://www.linkedin.com/in/michael-menegay-396513107" target="_blank"> linkedin </a> account you can look at.
			</p>
			</div>
		)
}
}
