var React = require('react');

var ComponentOne = React.createClass({

	doSomething: function (){
		console.log("Do Something!!!");
	},
	render: function() {
	/*	 if (!this.props.visible) {
		 	console.log("componentOne is off");
          return false; 
	} */

		
		return (
			<div>
				<h1> Simple functional Component</h1>
				<input type = "text" value = {this.state} 
               onChange = {this.doSomething} />
			</div>
			);
	}//end render
});//end ComponentOne

module.exports = ComponentOne;