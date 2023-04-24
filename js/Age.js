let AgeInput = document.getElementById("age");
let HardTruth = document.getElementById("a-hard-truth");
export function AgeWarning(){
    AgeInput.addEventListener("keyup", function() {

    if(AgeInput.value >= 18){
        HardTruth.style.visibility = ("visible");
    }
    else{
        HardTruth.style.visibility = ('hidden');
    }
});
}