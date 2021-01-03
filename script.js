
var menu = document.getElementById('menu');
var section = document.getElementById('section');
var bar = document.getElementById('bar');
var times = document.getElementById('times');

var list = document.getElementsByTagName(li);

function show_menu(){
     menu.style.marginLeft= "0vw";
     bar.style.display ="none";
     times.style.display="block";
     section.style.marginLeft ="20vw";
}

function hide_menu(){
    menu.style.marginLeft= "-20vw";
    bar.style.display ="block";
    times.style.display="none";
    section.style.marginLeft ="0vw";
}

function add_class(){
    
    li.add_class("add_class");


}