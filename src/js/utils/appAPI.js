
var axios = require('axios');

var AppActions = require('../actions/AppActions');

module.exports = {

	// Load mock product data from localStorage into ProductStore via Action
	
	getTeachers: function () {

		var teachers = JSON.parse(localStorage.getItem('teachers'));
		console.log("appAPI.getTeachers: ", teachers);

    AppActions.loadTeachers(teachers); 
  },// end getTeachers

		
	getStudents: function () {
		
				var students = JSON.parse(localStorage.getItem('students'));
				console.log("appAPI.getStudents: ", students);

				//AppActions.loadPages(data); */
			},// end getStudents

				
	getQuizzes: function () {
		
				var quizzes = JSON.parse(localStorage.getItem('quizzes'));
				console.log("appAPI.getQuizzes: ", quizzes);
		
				//AppActions.loadPages(data); */
			}// end getTeachers
		
}; //end exports