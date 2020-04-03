
   

    function regEx(){
    function testName(){
            let name = document.getElementById('username').value;
            let nameTest = name.search(/[a-zA-Z]/g);
            if (nameTest == -1 || name == ""){
                alert ("please enter only letters here");
            };

    }
    function testEmail(){
            let email = document.getElementById('email').value;
            let emailTest = name.search( /^\w+([\.-]?\w+)*@\w+(\.-]?w+)*(\.\w{2,3})+$/);
            if (emailTest == -1 || email == ""){
                alert ("/home/zipporah/workspace/eduLibrarians/pages/index.htmlplease enter valid email here");
            };

    }
    testEmail();
    testName();
    insetName();    
    
    }

    
function validate(){
	
	let username1 = document.getElementById("username").value;
	let password1 = document.getElementById("password").value;
 
	let name = ["cris","doe"];
    let pass = ["123","111"];
    

	for (let i = 0; i < name.length; i++) {
		
		if (username1 == name[i] && password1 == pass[i]) {
		alert ("Succefully Logged in!");
		window.location = "dashboard.html";
		return false;
	}
	else{
		
		alert ("invalid user name or password");
		document.getElementById("submit").disable = true;
	}
regEx();

}
}


    const data = new Array();
   
   
    function insert() {
      data.push(document.getElementById('username').value);
      data.push(document.getElementById('password').value);
      data.push(document.getElementById('email').value);
      data.push(document.getElementById('role').value);
      

      document.getElementById('username').value ='';
      document.getElementById('password').value ='';
      document.getElementById('email').value ='';

      
      disp();
           }
            function disp() {
                window.location = '../Pages/dash1.html';
                var str ='';
                str = 'total is ' + data.length+ '<br>';
                for (i=0; i < data.length; i++) {
                    str += i + ':' +data[i]+ "<br>";
                }
                alert ("Successfully Registered. Welcome!");    
              
                 }
                
        
            
