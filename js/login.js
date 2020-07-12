function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    if(username == ""){
        alert("請輸入使用者名稱");
        console.log(1);
    }else if (password == ""){
        alert("請輸入使用者密碼");
    }else if (username == "admin" && password == "admin"){
        setCookie();
        // window.location.href="../index.html";
    }else{
        alert("請輸入正確的使用者名稱和密碼！");
    }
    
}

function setCookie(){
    document.cookie = 'username=admin;path=/';
    document.cookie = "user=管理者;path=/";

}

function autoGuest(){
    document.getElementById("username").value = "admin";
    document.getElementById("password").value = "admin";
}