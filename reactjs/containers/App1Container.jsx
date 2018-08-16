import React from "react"
import * as siteActions from '../actions/siteActions'
import SitesContent from '../components/SitesContent'
import { connect } from "react-redux"

@connect(state => ({
  sites: state.sites
}))

export default class App1Container extends React.Component {
  componentDidMount() {
    let {dispatch, sites} = this.props
    if (!sites.isLoadingSites && sites.content === undefined) {
      dispatch(siteActions.fetchSites())
    }
  }

  renderLoading() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-xs-12">
            Loading...
          </div>
        </div>
      </div>
    )
  }

  render() {
    let {sites} = this.props
    if (sites.isLoadingSites || sites.content === undefined) {
      return this.renderLoading()
    }
    return (
      <div className="text-center">
		<h1>🖥️</h1>
		<br/>
        <p>
        Here are some websites I&apos;ve coded and possibly designed and hosted as well! The website you&apos;re looking at now is one of them - built using Django, 
        ReactJS, Bootstrap, HTML and CSS. In addition to these sites, I have also done web development for the Red Cross, USO, Best Friends Animal Society, the National Charity League, and other volunteer organizations.
        </p>
		<br/>
		<p>
		Feel free to send me an <a href="mailto:mike.r.menegay@gmail.com" target="_blank"> email </a> if you're interested in learning more!
		</p>
		<br/>
        <div>
          {sites.content !== undefined &&
          <SitesContent content={sites.content} />
          }
        </div>
      </div>
    )
  }
}
