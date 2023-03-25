var xhr = new XMLHttpRequest();
xhr.open("GET","./text.txt");
xhr.send("");
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
       console.log(xhr);
       
       document.querySelector("#data").innerHTML = "<h1>" + xhr.responseText
    
    }else{
        console.log("error")
    }
}




