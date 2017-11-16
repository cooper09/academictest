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
    }

}//end AppActions
module.exports = AppActions;