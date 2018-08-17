import React from "react"
import * as pictureActions from '../actions/pictureActions'
import PicturesContent from '../components/PicturesContent'
import { connect } from "react-redux"

@connect(state => ({
  pictures: state.pictures
}))

export default class PicturesContainer extends React.Component {
  componentDidMount() {
    let {dispatch, pictures} = this.props
    if (!pictures.isLoadingPictures && pictures.content === undefined) {
      dispatch(pictureActions.fetchPictures())
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
    let {pictures} = this.props
    if (pictures.isLoadingPictures || pictures.content === undefined) {
      return this.renderLoading()
    }
    return (
      <div>
          {pictures.content !== undefined &&
          <PicturesContent content={pictures.content} />
          }
      </div>
    )
  }
}
