var React = require('react');

//cooper s - add subcomponents here

var ComponentOne = require('./ComponentOne.js');

function getAppState(){
	console.log("App.getAppState: ");
	return {
	/*	//app: AppStore.getState(),
		pages: AppStore.getPages(),
		oneVisible: AppStore.getOneVisible(),
		twoVisible: AppStore.getTwoVisible() */
	}
}

var App = React.createClass({

	getInitialState: function(){
		return getAppState();

	},

	componentDidMount: function(){
	//	AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
	//	AppStore.removeChangeListener(this._onChange);
	},
	render: function(){

		//var dsps = this.state.pages.map()

		return(
			<div>
				<ComponentOne />
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		console.log("A change has occured....")
		//this.setState(getAppState());
	}
});

module.exports = App;