// const url = window.location.href;
// const urlParams = new URLSearchParams(url.split("?")[1]);
// const id=urlParams.get("id");
// console.log(id);
let id
const token=localStorage.getItem('token')

async function getUserDetails() {
    const res=await fetch(`http://localhost:3000/api/getUserDetails/`,{
        headers: { authorization: `Bearer ${token}` },
      }
    )
    const user=await res.json();
    id=user.usr._id
    // console.log(user);
    document.getElementById('main').innerHTML=`
    <div><img src="${user.usr.profile}" alt="" height="50" width="50"></div>
            <div>Username: ${user.usr.name}</div>
            <div>Email: ${user.usr.email}</div>
            <div>Phone: ${user.usr.phone}</div>
            <button class="lo" onclick="logoutacc()">Logout account</button>
            <button class="de" onclick="deletedata()">Delete</button>
    `
    let str=[]
    user.post.map(()=>{
        str+=`
        <a href="../pages/post.html?id=${data._id}">
        <div><img src="${data.pic[0]}" alt="" height="50" width="50"></div></a> `
    })
    document.getElementById("postpage").innerHTML=str
    let check=user.post
    if(check.length==0){
        document.getElementById("postpage").innerHTML=`<h4>No Post Uploaded</h4>`
    }

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

// function postpage(){
//     window.location.href=`../pages/add.html?id=${id}`
// }

function postpage(id){
    console.log(id);
    
    window.location.href=`../pages/post.html?id=${id}`
  }
  
  function addpost(){
    window.location.href=`../pages/add.html`
  }
  

function logoutacc() {
    localStorage.removeItem("token")
    alert("Logout Successfully")
    window.location.href="../index.html"
  }