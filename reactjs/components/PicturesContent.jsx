import React from "react"
import Lightbox from "react-image-lightbox"
import '!style-loader!css-loader!react-image-lightbox/style.css';
import Masonry from 'react-masonry-component';

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
	const masonryOptions = {
		      transitionDuration: 0
	  };
	   
	const imagesLoadedOptions = { background: '.my-bg-image-el' }
    let {content} = this.props
    let contentNodes = []
    let i = 0
    content.forEach((item, index) => {
      let imgIndex = i
      let node = (
		<div className="grid-item">
            <img
               src={item.image_thumb} 
                onClick={(event) => {this.openLightbox(); this.setImage(imgIndex)}}
                style={styles.image} 
                />
        </div>
      )
      i++
      contentNodes.push(node)
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
		<Masonry
			className={'grid'} // default ''
			elementType={'div'} // default 'div'
			options={masonryOptions} // default {}
			disableImagesLoaded={false} // default false
			updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
			imagesLoadedOptions={imagesLoadedOptions} // default {}
			isFitWidth={true}
		>
        {contentNodes}{lightbox}
		</Masonry>
    )
  }
}
