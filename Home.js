let userData=localStorage.getItem("user_email");
if(userData){
  fetch('/api/me', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({EmailAddress:userData}),
  })
    .then(response => response.json())
    .then(data => {
      if(data){
        document.getElementById("logged-in").style="display:visible;";
        document.getElementById("user").innerHTML="Logged in as "+data.fullName+" :)";
        document.getElementById("user").style="color:black; background-color:white; margin-left:20%";
        document.getElementById("logout").style="color: black;";
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const logout=()=>{
  document.getElementById("logged-in").style.display="none";
  localStorage.removeItem("user_email");
}
document.getElementById("logout").addEventListener("click",logout)