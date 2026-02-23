import { auth } from "./firebase-init.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

let isLogin = true;

const authBtn = document.getElementById("authBtn");
const switchMode = document.getElementById("switchMode");
const authWrapper = document.getElementById("authWrapper");
const dashboard = document.getElementById("dashboard");

switchMode.onclick = ()=>{
isLogin = !isLogin;
authBtn.innerText = isLogin ? "Login" : "Sign Up";
switchMode.innerText = isLogin ? "Create new account" : "Already have account?";
};

authBtn.onclick = ()=>{
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

if(isLogin){
signInWithEmailAndPassword(auth,email,password)
.catch(err=>alert(err.message));
}else{
createUserWithEmailAndPassword(auth,email,password)
.catch(err=>alert(err.message));
}
};

document.getElementById("logoutBtn").onclick = ()=>{
signOut(auth);
};

onAuthStateChanged(auth,(user)=>{
if(user){
authWrapper.classList.add("hidden");
dashboard.classList.remove("hidden");
}else{
authWrapper.classList.remove("hidden");
dashboard.classList.add("hidden");
}
});
