import React from "react"
import { render } from "react-dom"
import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import * as reducers from "./reducers"
import App1Container from "./containers/App1Container"
import MenuHeadContainer from "./containers/MenuHeadContainer"
import AboutMeContainer from "./containers/AboutMeContainer"
import CreativeContainer from "./containers/CreativeContainer"


let finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
let reducer = combineReducers(reducers)
let store = finalCreateStore(reducer)

const styles = {
  main: {
    padding: "0"
  },
  mainContainer: {
    margin: "0",
    width: "100%",
    padding: "0",
  },
  mainRow: {
    width: "100%",
    margin: "0",
  },
  mainImg: {
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: "5px",
    maxWidth: "80%",
    maxHeight: "700px"
  }
}

class App1 extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		active: ""
  	};
  }

  renderAbout() {
  	return (
  		<div>
        <Provider store={store}>
          <AboutMeContainer />
        </Provider>
      </div>
  		)
  }

  getNewState(state) {
    this.setState(state)
  }

  renderSites() {
  	return (
  		<div>
  		  <Provider store={store}>
	        <App1Container />
	      </Provider>
	    </div>
  		)
  }

  renderCreative() {
    return (
      <div>
        <Provider store={store}>
        <CreativeContainer />
        </Provider>
      </div>
      )
  }

  renderHome() {
    return (
      <div className="text-center">
        <div>
        <img className="mainimg" src="http://slaponic.us/static/misc/static/pink_plane.jpg" style={styles.mainImg}/>
        </div>
      </div>
      )
  }

  render() {
    return (
      <div className="container-fluid" style={styles.mainContainer}>
      <div className="col-lg-12 col-md-12" style={styles.main} id="wrapper">
            <div className="row" style={styles.mainRow}>
        <div className="col-lg-1 hidden-md hidden-sm hidden-xs sidebar"></div>
      	<div className="col-lg-10 col-md-12 col-sm-12" style={styles.main}>
      	  <MenuHeadContainer active = {this.state.active} setParentState = {this.getNewState.bind(this)}/>
          <br />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
      	        {this.state.active === "about" ? this.renderAbout() : null}
      	        {this.state.active === "web" ? this.renderSites() : null}
                {this.state.active === "creative" ? this.renderCreative() : null}
                {this.state.active === "" ? this.renderHome() : null}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1 hidden-md hidden-sm hidden-xs sidebar"></div>
        <div className="col-lg-12 text-center foot"></div>
      </div>
      </div>
      </div>
    )
  }
}

render(<App1/>, document.getElementById('App1'))