var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

//cooper s - a state called _items
var _teachers = [];
var _students = [];
var _quizzes = [];

var _teacherVisible = false, _studentVisible = false, _quizVisible=false;

// Method to load product data from mock API
function loadTeachers(data) {
  _teachers = data;
  console.log("AppStore.loadTeachers: ", _teachers );
}

// Method to load product data from mock API
function loadStudents(data) {
	_students = data;
	console.log("AppStore.loadStudents: ", _students );
}

// Pull personal query data
function loadQuizzes(data) {
	_quizzes = data;
	console.log("AppStore.loadQuizzes ", _quizzes );
}

// Set visibility functions for each component
function setTeacherVisible(visible){
	_teacherVisible=visible;
	_studentVisible=false;
	_quizVisible=false;
}

function setStudentVisible(visible) {
	_teacherVisible=false;
	_studentVisible= visible;
	_quizVisible=false;
}

function setQuizVisible(visible) {
	_teacherVisible=false;
	_studentVisible=false;
	_quizVisible=visible;
}

// The AppStore, like the name implies manages the data and its updates on screen
var AppStore = assign({}, EventEmitter.prototype, {

// The Store is driven by Getters and Setters
	getTeachers: function () {
	    return _teachers;
	},
	getStudents: function () {
	    return _students;
	},
	getQuizzes: function () {
	    return _quizzes;
	},
	getTeacherVisible: function () {
		//console.log('AppStore.getTeacherVisible: ' + _teacherVisible );
		return _teacherVisible;
	},
	  // Return cart visibility state
	getStudentVisible: function () {
		//console.log('AppStore.getStudentVisible: ' + _studentVisible );
		return _studentVisible;
	},
	getQuizVisible: function () {
		//console.log('AppStore.getQuizVisible: ' + _quizVisible );
		return _quizVisible;
	},

	/* 
		The main Controller is based on the BroadCast model. Changes
		are broadcast to all components to deal with as they wish 
	*/

	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	console.log("AppDispatcher: ", action.actionType );
	switch(action.actionType){

		// Respond to RECEIVE_DATA action
	    case 'RECEIVE_TEACHERS':
			console.log("AppStore - Receiving Data: ", action.data );	    
	      	loadTeachers(action.data);
		break;
	    case 'RECEIVE_STUDENTS':
			console.log("AppStore - Receiving Data: ", action.data );	    
			loadStudents(action.data);
		break;
		case 'RECEIVE_QUIZZES':
			console.log("AppStore - Loading Quiz Data: ", action.data );	    
		  	loadQuizzes(action.data);
	  	break;
// SHOWS
		case 'SHOW_TEACHER':
	  	  console.log("OK we have my own personal event. About now I should be changing some state: ", payload );
	      _visible=true;
	      setTeacherVisible(_visible);
	 	break;
	 	case 'SHOW_STUDENT':
	  	  console.log("Show student page: ", payload );
	      _visible=true;
	      setStudentVisible(_visible);
	 	break;
	 	case 'SHOW_QUIZ':
	  	  console.log("Show Quiz: ", payload );
	      _visible=true;
	      setQuizVisible(_visible);
		break;
	}//end switch

	AppStore.emitChange();
	return true;
});

module.exports = AppStore;