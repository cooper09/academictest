var React = require('react');
var AppActions = require('../actions/AppActions');

var Student = React.createClass({

	quizOne: function (){
		console.log("Show Quiz One");
		var questions = {
			"question1": "What has four legs and flies?"
		}
		AppActions.showQuiz(questions);
	},
	quizTwo: function (){
		console.log("Show Quiz Two");
		var questions = {
			"question1": "How many angels can dance on the head of a pin?"
		}
		AppActions.showQuiz(questions);
	},
	quizThree: function (){
		console.log("Show Quiz Three");
		var questions = {
			"question1": "When was the war of 1812?"
		}
		AppActions.showQuiz(questions);
	},	
	quizFour: function (){
		console.log("Show Quiz Four");
		var questions = {
			"question1": "Does this make sense?"
		}
		AppActions.showQuiz(questions);
	},

	closeQuiz: function () {
		alert("This Quiz is now closed!!");
	},

	render: function() {
		 if (!this.props.visible) {
		 	console.log("Student is off");
          return false; 
	} 
	
	console.log('Student.js - props data: ', this.props.data );
		return (
			<div className='mainScrn center option animated fadeIn'>
				<h1>Student One</h1>
				<b>Math</b>
				<br/><br/>
				<button className="scrnBtn" onClick={this.quizOne} num="1">Quiz One</button><br/><br/>
				<button className="scrnBtn" onClick={this.quizTwo} num="2">Quiz Two</button><br/><br/>
				<button className="scrnBtn" onClick={this.quizThree} num="3">Quiz Three</button><br/>
				<br/>
			</div>
			);
	}//end render
});//end Student Component

module.exports = Student;