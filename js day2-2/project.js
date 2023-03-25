var prompt1 = prompt("Enter First numbers");
var prompt2 = prompt("Enter Secound numbers");
var prompt3 = prompt("Enter Third numbers");
var prompt4 = prompt("Enter Fourth numbers");
var prompt5 = prompt("Enter Fifth numbers");

document.write("Entered values :" + prompt1 + "," + prompt2 + "," + prompt3 + "," + prompt4 + "," + prompt5)

var arr = [prompt1,prompt2,prompt3,prompt4,prompt5]
document.write("<br>  values after descending :" + arr.sort(function(a,b){return b-a}));

var arr2 = [prompt1,prompt2,prompt3,prompt4,prompt5]
document.write("<br>  values after ascending :" +  arr2.sort(function(a,b){return a-b}));



