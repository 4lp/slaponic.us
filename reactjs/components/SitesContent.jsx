import React from "react"


export default class SitesContent extends React.Component {
  render() {
    let {content} = this.props
    let contentNodes = []
	  content.forEach((item, index) => {

		const styles = {
		  siteImage : {
			width: "100%",
		  },
		  panel: {
			marginLeft:"10%",
			marginRight:"10%",
		  },
		  front: {
			border: "1px solid",
			  backgroundImage: "linear-gradient(rgba(255, 150, 150, 0.45), rgba(0, 0, 0, 0.45)),url("+item.image+")",
		  },
		  back: {
			border: "1px solid",
			backgroundColor: "#eee",
		  }
		}

		let node = (
			 <div className="col-md-4 text-center center-block">
				<div className="flip-container" key={item.pk} ontouchstart="this.classList.toggle('hover');">
					<div className="flipper">
					  <div className="front" style={styles.front}>
						<a href={item.link} target="_blank"><h3>{item.name}</h3></a>
					  </div>
					  <div className="back" style={styles.back}>
						<img src={item.image} style={styles.siteImage}/>
						<br />
						<br />
						<a href={item.link} target="_blank">{item.link}</a>
						<br />
						<br />
						<p>{item.description}</p>
						<br />
					  </div>
				  </div>
			</div>
		</div>
      )
      contentNodes.push(node)
    })

    return (
      <div className="row">{contentNodes}</div>
    )
  }
}
