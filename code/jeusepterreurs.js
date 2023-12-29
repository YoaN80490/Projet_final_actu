let nombreErreur = 0
erreur1.addEventListener("click", () => {
    erreur1.classList.toggle("point")
    if(nombreErreur == 6){
        nombreErreur = "Gagner"
        score.innerHTML = nombreErreur
    }
    else{
    nombreErreur++
    score.innerHTML = nombreErreur}
})
erreur2.addEventListener("click", () => {
    erreur2.classList.toggle("point")
    if(nombreErreur == 6){
        nombreErreur = "Gagner"
        score.innerHTML = nombreErreur
    }
    else{
    nombreErreur++
    score.innerHTML = nombreErreur}
})
erreur7.addEventListener("click", () => {
    erreur7.classList.toggle("point")
    if(nombreErreur == 6){
        nombreErreur = "Gagner"
        score.innerHTML = nombreErreur
    }
    else{
    nombreErreur++
    score.innerHTML = nombreErreur}
})
erreur3.addEventListener("click", () => {
    erreur3.classList.toggle("point")
    if(nombreErreur == 6){
        nombreErreur = "Gagner"
        score.innerHTML = nombreErreur
    }
    else{
    nombreErreur++
    score.innerHTML = nombreErreur}
})
erreur4.addEventListener("click", () => {
    erreur4.classList.toggle("point")
    if(nombreErreur == 6){
        nombreErreur = "Gagner"
        score.innerHTML = nombreErreur
    }
    else{
    nombreErreur++
    score.innerHTML = nombreErreur}
})
erreur5.addEventListener("click", () => {
    erreur5.classList.toggle("point")
    if(nombreErreur == 6){
        nombreErreur = "Gagner"
        score.innerHTML = nombreErreur
    }
    else{
    nombreErreur++
    score.innerHTML = nombreErreur}
})
erreur6.addEventListener("click", () => {
    erreur6.classList.toggle("point")
    if(nombreErreur == 6){
        nombreErreur = " Gagner"
        score.innerHTML = nombreErreur
    }
    else{
    nombreErreur++
    score.innerHTML = nombreErreur}
})

score.innerHTML = nombreErreur
