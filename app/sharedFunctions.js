/**
* Global Variable definitions
**/
var logged_in = false;
var PATHS = {
	landing_page: 'http://localhost:2000/landing_page.html',
	home_page: 'http://localhost:2000/home.html'
}

/**
*Set logged_in variable when a user is logged in
**/
function setLoggedIn(){
	logged_in = true;
}

/**
*Get logged_in variable
**/
function getLoggedIn(){
	return logged_in;
}

/**
*Check if logged_in to know where to redirect to home
**/
function redirectToHome(){
	if (logged_in){
		window.location = PATHS.home_page;
	} else{
		window.location = PATHS.landing_page;
	}
}

function notify(type, msg, time_out, functionCallback){     
    toastr.options = {
        "timeout": time_out
      }
    if (type === "success"){
        toastr.success(msg);
    }
    else if (type === "error"){
      toastr.error(msg);
    }
    else if (type === "warning"){
    	toastr.warning(msg)
    }
    if (functionCallback){
      setTimeout(function(){ functionCallback(); }, time_out);
    }
  }

function checkInputs(inputs){
	var msg = "Don't forget ";
	var changed = false

	for (var field in inputs){
		if(!field){
			changed = true;
			msg += str(field + ", ");
		}
	}

  msg = msg.slice(0,-2);
  console.log("Error msg test: " + msg);
	return msg, changed;
}

function passwordRequirementsCheck(password){
  return password;
}