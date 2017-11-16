//var AppActions = require('../actions/AppActions');
var axios = require('axios');

module.exports = {

	 // Load mock product data from localStorage into ProductStore via Action
  getData: function () {

  	// Performing a GET request
	//axios.get('http://digitest-authorize.rhcloud.com/mega-data')
	//axios.get('http://hkex01.mpointx.com/D_worker_request/rtb24/mpointrtb')
	//axios.get('http://digitest-authorize.rhcloud.com/ad')
	/*	axios.get('http://hkex01.mpointx.com/D_worker_request/rtb24/smartyads')
	  .then(function(response){
	    console.log("appAPI.getPageData: " ,response.data[0]); // ex.: { user: 'Your User'}
	    console.log(response.status); // ex.: 200

			//Lets taka good look at our data:

			console.log("appAPI - our id: ", response.data );

			for (i=0 ; i < response.data.map.length ; i++ ) {
				console.log("appAPI - our DSP map: ", response.data[i].DSPID ); 
			}

			const numbers = response.data;

			console.log("Numbers: ", numbers );

	    var data = response.data;
    	AppActions.loadPages(data);
	  });
*/
		var data = JSON.parse(localStorage.getItem('teachers'));
		
		console.log("appAPI.getPageData: ", data);


    //AppActions.loadPages(data); */
  }

}; //end exports