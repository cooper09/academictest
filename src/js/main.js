var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');

var AppData = require('./AppData.js');
var AppAPI = require('./utils/appAPI');

AppData.init();
AppAPI.getTeachers();
AppAPI.getStudents();
AppAPI.getQuizzes();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);