var React = require('react');
// App controll code
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

//cooper s - add subcomponents here

var Teacher = require('./Teacher.js');

function getAppState(){
	console.log("App.getAppState: ");
	return {
		//app: AppStore.getState(),
		teachers: AppStore.getTeachers(),
		students: AppStore.getStudents(),
		quizzes: AppStore.getQuizzes(),
		teacherVisible: AppStore.getTeacherVisible(),
		studentVisible: AppStore.getStudentVisible(),
		quizVisible: AppStore.getQuizVisible()
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

		var teachers = this.state.teachers;

		console.log("App loaded teachers: ", teachers );

		return(
			<div>
				<Teacher visible={this.state.teacherVisible} data={teachers}/>
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function(){
		console.log("A change has occured....")
		this.setState(getAppState());
	}
});

module.exports = App;