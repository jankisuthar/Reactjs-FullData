//login
loginData = document.querySelector('#btn-login');
loginstorage = localStorage.getItem('userid');
console.log(loginstorage);

if(loginData != null)
{
    loginData.addEventListener('click',function(){
        let uname = document.getElementById('uname').value;
        let pwd = document.getElementById('pwd').value;
        fetch('http://localhost/api/login_get_method?username='+uname+'&password='+pwd)
        .then(res=>res.json()).then((Response)=>{
            if(Response.Code == 1)
            {
                // localStorage.setItem('userid',Response.Data.id);
                window.location.href='dashboard.html';
                console.log("Login done");
            }
            else{
                alert("Invalid Data!");
            }
           
        })
    })
}
//rgistration
function regapi()
{
    let uname = document.getElementById('uname').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let mobile = document.getElementById('mobile').value;

    const data = {username:uname,email:email,password:pwd,mobile:mobile}
    console.log(data);
    fetch('http://localhost/api/registration_api',
    {method:'POST',headers:{
        'Content-Type':'application/json',
       
    },body:JSON.stringify({allData:data})}).then(res=>res.json())
    .then(Response=>{
        console.log(Response);
        // if(Response.Code == 1)
        // {
            localStorage.setItem('userid',Response.Data);
        // }
        // else{
        //     console.log("something went wrong");
        // }
    })
}