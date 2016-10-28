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
        <p>
        Here are some websites I've coded and possibly designed and hosted as well! The website you're looking at now is one of them - built using Django, 
        ReactJS, Bootstrap, HTML and CSS.
        </p>
        <div>
          {sites.content !== undefined &&
          <SitesContent content={sites.content} />
          }
        </div>
      </div>
    )
  }
}