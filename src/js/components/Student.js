var React = require('react');

var Student = React.createClass({

	doSomething: function (){
		console.log("Do Something!!!");
	},
	render: function() {
		 if (!this.props.visible) {
		 	console.log("Student is off");
          return false; 
	} 
	
		return (
			<div className='center option animated fadeIn'>
				<h1>Student Component</h1>
				<input type = "text" value = {this.state} 
               onChange = {this.doSomething} />
			</div>
			);
	}//end render
});//end Student Component

module.exports = Student;