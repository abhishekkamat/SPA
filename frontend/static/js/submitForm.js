function createUser(){
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    confPass=document.getElementById("password2").value;
    if(password===confPass){
        let SignUpData={};
    SignUpData.name=username;
    SignUpData.email=email;
    SignUpData.password=password;
    let hostname=location.hostname;
    window.location.href="http://"+hostname+":3000/SuccLogIn";
    console.log(SignUpData);
    }
    else{
        window.alert("Passwords dont match!");
    }
    
}