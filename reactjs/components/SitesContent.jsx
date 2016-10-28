import React from "react"

const styles = {
  siteImage : {
    maxHeight: "auto",
    maxWidth: "100%",
  },
  panel: {
    marginLeft:"10%",
    marginRight:"10%",
  }
}

export default class SitesContent extends React.Component {
  render() {
    let {content} = this.props
    let contentNodes = []
    content.forEach((item, index) => {
      let node = (
        <div className="panel panel-default text-center" key={item.pk} style={styles.panel}>
          <div className="panel heading">
            <a href={item.link} target="_blank"><h3>{item.name}</h3></a>
          </div>
          <div className="panel body">
            <img src={item.image} style={styles.siteImage} />
            <br />
            <br />
            <a href={item.link} target="_blank">{item.link}</a>
            <br />
            <br />
            <p>{item.description}</p>
            <br />
          </div>
        </div>
      )
      contentNodes.push(node)
    })

    return (
      <div>{contentNodes}</div>
    )
  }
}