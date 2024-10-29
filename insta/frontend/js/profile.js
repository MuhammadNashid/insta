const url = window.location.href;
const urlParams = new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
console.log(id);
const token=localStorage.getItem('token')

async function getUserDetails() {
    const res=await fetch(`http://localhost:3000/api/getUserdetails/${id}`,{
        headers: { authorization: `Bearer ${token}` },
      }
    )
    const data=await res.json();
    console.log(data);
    document.getElementById('main').innerHTML=`
    <div><img src="${data.profile}" alt="" height="50" width="50"></div>
            <div>Username: ${data.name}</div>
            <div>Email: ${data.email}</div>
            <div>Phone: ${data.phone}</div>
            <button class="lo" onclick="logoutacc()">Logout account</button>
            <button class="de" onclick="deletedata()">Delete</button>
    `

}
getUserDetails()

function deletedata() {
    fetch(`http://localhost:3000/api/deleteUser/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
    })
    .then((res)=>{
        console.log(res);
        if(res.status == 201) {
            alert("success");
            localStorage.removeItem("token")
            window.location.href="../index.html"
        }
        else{
            alert("error");
        }
    });
}

function postpage(){
    window.location.href=`../pages/add.html?id=${id}`
}

function logoutacc() {
    localStorage.removeItem("token")
    alert("Logout Successfully")
    window.location.href="../index.html"
  }