export function Password(){
    let PasswordInput = document.getElementById('pwd');
    let PasswordConfirm = document.getElementById('pwd-confirm');
    PasswordConfirm.classList.add("pwd");
    PasswordInput.classList.add("pwd");
    let pwd = document.querySelectorAll(".pwd");
    PasswordConfirm.addEventListener('keyup', function(){
        if(PasswordInput.value != PasswordConfirm.value){
            PasswordInput.style.borderColor =("red");
            PasswordConfirm.style.borderColor =("red");
        }
        else{
            PasswordInput.style.borderColor =("black");
            PasswordConfirm.style.borderColor =("black");
        }
    })
}
