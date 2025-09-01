
var name = "krish"; 
var des = "FullStack developer";
var email = "koratkrish1@gmail.com";
var btn = "follow me";

var p_img = document.querySelector('.p-img');
var pname = document.querySelector('.name');            
var desi = document.querySelector('.des');
var pemail = document.querySelector('.mail');
var pbtn = document.querySelector('.btn');

p_img.innerHTML='<img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPJ9cm0-r5p50py0yUzvM5ZtEB-xWoJRPRA&s" alt=""></img>';
pname.innerHTML='<h2>'+name + '</h2>';   
desi.innerHTML = '<p>'+ des +'</p>';
pemail.innerHTML = '<p>'+ email+'</p>';
pbtn.innerHTML = '<button>'+ btn + '</button>';