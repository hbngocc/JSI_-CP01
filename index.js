import { auth, dangky, dangnhap } from "./firebaseConfig.js"; 

const btnLogin = document.querySelector("#loginBtn");

btnLogin.addEventListener("click", async function(){
let email = document.querySelector("#form3Example3");
let pass = document.querySelector("#form3Example4");
const { isSuccess, info } = await dangky(auth, email.ariaValueMax, pass.value);
if(isSuccess){
    alert("Dang nhap thanh cong");
} else {
    if(info == "auth/missing-password") {
        pass.classList.add("errorPass");
    }
}
});