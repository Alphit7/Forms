export function FirstNameInput(){
    let firstInput = document.getElementById("firstname");
    let firstnameField = document.getElementById("display-firstname");
    firstInput.addEventListener("keyup", function() {
    firstnameField.textContent = firstInput.value;
});
}