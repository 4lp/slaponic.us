import React from "react"

export default class CreativeContainer extends React.Component {
	render() {
		return (
			<div className="col-lg-8 col-lg-offset-2 text-center">
				<h1>📨</h1>
				<p>Feel free to contact me if you'd like to chat or have a question about my services.
				<br/>
				I will try and get back to you as soon as possible!
				</p>
                <form action="https://formspree.io/mike.r.menegay@gmail.com" method="POST">
					<div className="form-group">
					<label for="emailname">Your Name</label>
					<input className="form-control" name="emailname" id="emailname" type="text"/>
					</div>
					<div className="form-group">
					<label for="emailreply">Your Email Address</label>
					<input className="form-control"name="emailreply" id="emailreply" type="email"/>
					</div>
					<div className="form-group">
					<label for="emailmessage">Your Message</label>
					<textarea className="form-control"name="emailmessage" id="emailmessage"></textarea>
					</div>
					<br/>
					<button className="btn btn-primary" type="submit" value="Send">Submit</button>
			</form>
			</div>
			)
	}
}
