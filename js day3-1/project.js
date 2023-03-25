function submit() {
  var inp = document.querySelector(".inp").value;
  var div1 = document.querySelector(".empty1"); 
  var creatdiv = document.createElement("div");
  creatdiv.style.display = "inline-table"
  creatdiv.style.backgroundColor = "white"
  var creatbu = document.createElement("button")
  creatbu.innerText = "Delete"
  creatdiv.innerText = inp;
  creatdiv.setAttribute("class","elemstyle");
  creatbu.setAttribute("onclick","Delete()");
  creatbu.setAttribute("class","D");

  div1.appendChild(creatdiv);
  div1.appendChild(creatbu)
  
}




function Delete() {
var mo1 = document.querySelector(".elemstyle")
var mo2 = document.querySelector(".D")
mo1.remove()
mo2.remove()
}














  







