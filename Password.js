let PasswordInput = document.getElementById('pwd');
let PasswordConfirm = document.getElementById('pwd-confirm');


export function Password(){
    PasswordConfirm.addEventListener('keyup', PasswordConfirmation);
    PasswordInput.addEventListener('keyup', PasswordConfirmation);
function PasswordConfirmation(){
    if(PasswordInput.value != PasswordConfirm.value){
        PasswordInput.style.borderColor =("red");
        PasswordConfirm.style.borderColor =("red");
    }
    else{
        PasswordInput.style.borderColor =("black");
        PasswordConfirm.style.borderColor =("black");
    }
}
    PasswordConfirm.addEventListener("keyup", Validation);
    PasswordInput.addEventListener("keyup", Validation);
    function Validation(e){
    if(e.keyCode === 13){
    let pwdValue = PasswordConfirm.value;
    if(PasswordInput.value != PasswordConfirm.value){
        alert("The password doesn't match the confirmation");
        return false;
    }
    else if(pwdValue ===""){
        alert("You need a password");
        return false;
    }
    else if(pwdValue.length < 6 && pwdValue.length > 0){
        alert("Your password is too short")
        return false;    
    }
}
}
}