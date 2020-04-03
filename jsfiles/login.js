

function validate(){
	 testNames();
	
	var username1 = document.getElementById("username").value;
	var password1 = document.getElementById("password").value;
 
	var name = ["cris","doe"];
	var pass = ["123","111"];

	for (let i = 0; i < name.length; i++) {
		
		if (username1 == name[i] && password1 == pass[i]) {
		alert ("Successfully logged in.");
		window.location = "dash1.html";
		return false;
	}
	else{
		
		alert ("invalid user name or password");
		document.getElementById("submit").disable = true;
	}


}

}

 function testNames(){
            let name = document.getElementById('username').value;
            let nameTest = name.search(/[a-zA-Z]/g);
            if (nameTest == -1 || name == ""){
                alert ("User name should not have digits");
            } }