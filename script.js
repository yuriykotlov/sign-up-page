let essentialTextInputs = document.getElementsByClassName("text-input-essential")
let essentialCheckboxes = document.getElementsByClassName("checkbox-bottom-essential")

function SignUp(){
    let totalChecked = 0
    let elementsPicked = []

    for(let i = 0; i < essentialCheckboxes.length; i++){
        if(essentialCheckboxes[i].checked){
            totalChecked++
        }
    }

    for (let i = 0; i < essentialTextInputs.length; i++) {
        if(essentialTextInputs[i].className.slice(0, 5) != "email"){
            if(essentialTextInputs[i].value == 0){
                console.log("ok")
                elementsPicked.push(essentialTextInputs[i])
                console.log(...elementsPicked)
            }
        }
    }

    Animation(elementsPicked)
    setTimeout(() => {
        Animation(elementsPicked)
    }, 500);

    // if(totalChecked == 2) location.reload()
}

function Animation(elementsPicked, repeatedTimes){
    elementsPicked.forEach(element => {
        element.classList.toggle("chk-btm")
        setTimeout(() => {
            element.classList.toggle("chk-btm")
        }, 1000);
    });
}