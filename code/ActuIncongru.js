icon.addEventListener("click", () => {
    nav.classList.toggle("active")
})

croix.addEventListener("click", () => {
    popup.classList.toggle("fermer")
})


const change = (int) => {
    if ($('#infosup'+int).is(':visible')) {
        $('#infosup'+int).hide();
        document.getElementById('arrow'+int).style.WebkitTransitionDuration='0.75s';
        document.getElementById('arrow'+int).style.rotate ='0deg';
    }
    else {
        $('#infosup'+int).show();
        document.getElementById('arrow'+int).style.WebkitTransitionDuration='0.75s';
        document.getElementById('arrow'+int).style.rotate ='180deg';
        
    }
}
valider.addEventListener('click', quiz)
function quiz() {
var input = document.getElementById('input').value
let manche = 1;
if(input == 'bresil'){
    manche + 1;
    stage.innerHTML += manche
}
}