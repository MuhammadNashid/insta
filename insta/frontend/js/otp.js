let email=localStorage.getItem('email')
console.log(email);

document.getElementById('form').addEventListener('submit',async function (e) {
    e.preventDefault();
    otp1=document.getElementById('otp1').value
    otp2=document.getElementById('otp2').value
    otp3=document.getElementById('otp3').value
    otp4=document.getElementById('otp4').value
    // console.log(otp1,otp2,otp3,otp4);
    otp=otp1+otp2+otp3+otp4
    console.log(otp);
    
    const res=await fetch('http://localhost:3000/api/checkOTP',{
        method:"POST",
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify({otp,email})
    })
    console.log(res);
    
    
    const data=await res.json()
    if(res.status==200){
        alert(data.msg)
        window.location.href="../pages/edpass.html"
    }
    else{
        alert(data.msg)
    }
 })
