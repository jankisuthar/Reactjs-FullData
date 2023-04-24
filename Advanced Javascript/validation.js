function ValiData(e,spnid)
{
    if(e.value == "")
    {
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerHTML = "Please Enter Data!"
    }
    else{
        document.getElementById(spnid).innerHTML="";
    }
}
function onlyAlpha(e,spnid)
{
    var name = /^[a-zA-Z]+$/
    if(name.test(e.value))
    {
        document.getElementById(spnid).innerText="";
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerText="Please enter only cahracters!";
    }
}
function EmailValid(e,spnid)
{
    var email = /^([a-z0-9.-_])+@([a-z0-9-._])+\.([a-z]{2,3})+$/
    if(email.test(e.value))
    {
        document.getElementById(spnid).innerText="";
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerText="Please enter valid email!";
    }
}
function pwdCheck(e,spnid)
{
    var pwd = /^[a-zA-z0-9-_.]{3,5}$/
    if(pwd.test(e.value))
    {
        document.getElementById(spnid).innerText="";
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerText="Please enter min 3 & max 5 characters!";
    }
}
function MobileValid(e,spnid)
{
    var mobile = /^[0-9]{10}$/
    if(mobile.test(e.value))
    {
        document.getElementById(spnid).innerText="";
    }
    else{
        document.getElementById(spnid).style.color="red";
        document.getElementById(spnid).innerText="Please enter valid mobile number!";
    }
}