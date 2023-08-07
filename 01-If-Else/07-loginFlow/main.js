let username = prompt("Input your Username")
let password = prompt("Input your password")
    if(username.trim() === '' || password.trim() === '' ){
        alert("Username is Required")
    }
    else if((username == "admin" && password == "1234") || (username == "john" && password =="qwety"))
    {
        alert("Hello")
    }