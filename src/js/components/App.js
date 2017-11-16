var React = require('react');
// App controll code
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

//cooper s - add subcomponents here

var Teacher = require('./Teacher.js');
var Student = require('./Student.js');
var Quiz = require('./Quiz.js');

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
		AppStore.addChangeListener(this._onChange);
	},
	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},
	showTeacher: function() {
		console.log("Show teacher Screen");
		AppActions.showTeacher('Show Teacher Screen');
	},
	showStudent: function() {
		console.log("Show student Screen");
		AppActions.showStudent('Show Student Screen');
	},
	render: function(){

		var teachers = this.state.teachers;
		var students = this.state.students;
		var quizzes = this.state.quizzes;

		console.log("App loaded teachers: ", teachers );

		return(
			<div>
				<div className="buttons">
					<button onClick={this.showTeacher}>Login as Teacher</button><button onClick={this.showStudent}>Login as Student</button>
				</div>
				<Teacher visible={this.state.teacherVisible} data={teachers}/>
				<Student visible={this.state.studentVisible} data={students}/>
				<Quiz visible={this.state.quizVisible} data={quizzes}/>
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