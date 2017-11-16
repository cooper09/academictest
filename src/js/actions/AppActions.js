var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
// Receive inital product data
  loadTeachers: function (data) {
	console.log("AppActions.loadTeachers: ", data );
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_TEACHERS,
      data: data
    	})
    },
    loadStudents: function (data) {
      console.log("AppActions.loadStudents: ", data );
        AppDispatcher.handleViewAction({
          actionType: AppConstants.RECEIVE_STUDENTS,
          data: data
          })
        },
    loadQuizzes: function (data) {
    console.log("AppActions.loadQuizzes: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.RECEIVE_QUIZZES,
        data: data
      })
    },

  // Show individual screens
  showTeacher: function (data) {
    console.log("AppActions.showTeacher: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.SHOW_TEACHER,
        data: data
      })
    },
  showStudent: function (data) {
    console.log("AppActions.showStudent: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.SHOW_STUDENT,
        data: data
      })
    },
  showQuiz: function (data) {
    console.log("AppActions.showQuiz: ", data );
      AppDispatcher.handleViewAction({
        actionType: AppConstants.SHOW_QUIZ,
        data: data
      })
    }    

}//end AppActions
module.exports = AppActions;