let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-nav');

menu.onclick = () => {
    navbar-nav.toggle('active');
}


function test(){
    var uid = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;

    var user = localStorage.setItem("uid",uid);
    var pass = localStorage.setItem("pwd", pwd);

    var us = localStorage.getItem("uid", uid);
    var pw = localStorage.getItem("pwd",pwd);



    if(a==user && b==pass) {
        alert("Login successful")
    }
 
}


