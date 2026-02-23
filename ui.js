const tools=document.querySelectorAll(".tool");
const content=document.getElementById("contentArea");

tools.forEach(btn=>{
btn.onclick=()=>{
content.innerHTML="<h1>🚀 This Project Coming Soon</h1>";
};
});
