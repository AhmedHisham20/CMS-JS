var nm = /^[a-zA-Z]+$/;
do{
    var namee = prompt("enter your name")
}while(! namee.match(nm));


var ph = /^[0-9]{8}$/;
do{
    var phone = prompt("enter your phone")
}while(! phone.match(ph));


var mob = /^01(0|1|2|5)\d{8}$/;
do{
    var mobile = prompt("enter your mobile number")
}while(! mobile.match(mob));


var mail = /^[a-zA-Z + @]+$/;
do{
    var email = prompt("enter your email")
}while(! email.match(mail));


document.write("<br> welcome"+namee , "<br> your phone is:"+phone , "<br> your mobile is:"+mobile , "<br> your email is:"+email)





