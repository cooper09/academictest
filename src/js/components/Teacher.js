var React = require('react');

var Teacher = React.createClass({

	doSomething: function (){
		console.log("Do Something!!!");
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("Teacher is off");
          return false; 
	} 

	console.log("Teachers = current data: ", this.props.data );
		
		return (
			<div>
				<h1>Teacher Component</h1>
				<input type = "text" value = {this.state} 
               onChange = {this.doSomething} />
			</div>
			);
	}//end render
});//end Teacher

module.exports = Teacher;