import React from "react"
import Lightbox from "react-image-lightbox"
import '!style-loader!css-loader!react-image-lightbox/style.css';

const styles = {
  image : {
    maxHeight: "auto",
    maxWidth: "100%",
    padding: "10px",
  },
}

var lightbox = '';
var images = [];


export default class PicturesContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      isOpen: false,
    };
  }

  openLightbox() {
      this.setState({ isOpen: true })
  }

  closeLightbox() {
      this.setState({ isOpen: false })
  }

  setImage(state) {
    this.setState({ index: state })
  }

  render() {
    let {content} = this.props
    let contentNodes = []
    let i = 0
    content.forEach((item, index) => {
      let imgIndex = i
      let node = (
        <div className="col-sm-4 text-center" key={item.pk}>
            <img
               src={item.image_thumb} 
                onClick={(event) => {this.openLightbox(); this.setImage(imgIndex)}}
                style={styles.image} 
                />
        </div>
      )
      i++
      contentNodes.push(node)
      if (i % 3 == 0) {
        contentNodes.push(<div className="clearfix"></div>)
      }
      images.push(item.image)
    })
    if (this.state.isOpen) {
      lightbox = (
          <Lightbox 
              mainSrc={images[this.state.index]}
              onCloseRequest={this.closeLightbox.bind(this)}
          />
      )
    }
    else {
      lightbox = ''
    }



    return (
      <div>{contentNodes}{lightbox}</div>
    )
  }
}
