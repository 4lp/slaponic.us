import React from "react"
import PicturesContainer from "./PicturesContainer"

const styles = {
	bandcamp: {
		border: "0", 
		width: "50%", 
		height: "auto",
		border: "0",
		textAlign: "center",
		display: "block",
		margin: "0 auto",
	}
}

export default class CreativeContainer extends React.Component {
	render() {
		return (
			<div className="col-lg-12 text-center">
				<p>
				I make footwork music with my friend Dave as PHF and play drums in a weird punk band called New China. 
				</p>
				<div>
				<iframe width="100%" height="auto" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/281164356&amp;
				auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				</div>
				<br />
				<iframe style={styles.bandcamp} src="https://bandcamp.com/EmbeddedPlayer/album=2792818770/size=medium/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless>
					<a href="http://newchina.bandcamp.com/album/bar-grill">Bar &amp; Grill by New China</a>
				</iframe>
				<br />
				<p>
				I also like to do some visual art for these projects, which you can find below.
				</p>
				<br />
				<PicturesContainer />
			</div>
			)
	}
}