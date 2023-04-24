let ModeSelect = document.querySelector("#toggle-darkmode")
export function DarkMode(){
ModeSelect.addEventListener('change', (event) => {
    if(event.target.value === "dark"){
        document.body.style.backgroundColor = 'black';
        document.body.style.color= 'white';
    }
    else if(event.target.value === "light"){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
})
}