var userName = document.querySelector(".login-username");
var userPassword = document.querySelector(".login-paasword");
let submitBtn = document.getElementById("submit");
let form = $("#login-form");

//function pass
form.submit(function(res){
    res.preventDefault();
    const user = userName.value;
    const pwd = userPassword.value;
    var Obj = {
        userName: user,
        password: pwd,
    };
    if(user === pwd && user !== "" && pwd !==""){
        console.log("yes");
        alert("Login Successfully");
        localStorage.setItem("loginStatus",JSON.stringify(Obj));
        location.assign("./order.html");
    }
    else{
        alert("Please enter valid credentials !");
    }
})

document.getElementById("sign-out").style.display="none";