

valider.addEventListener('click', quiz)

let manche = 1;
stage.innerHTML = 'Manche ' + manche

function quiz() {
let input = document.getElementById('reponse').value

if(manche == 1){
if(input == 'Brésil'){
    manche ++;
    stage.innerHTML = 'Manche ' + manche
    question.innerHTML = 'Quel est la capital de la France ?'
}
else{
     document.getElementById('reponse').value =''
}
}
if(manche == 2){
    if(input == 'Paris'){
        manche ++;
        stage.innerHTML = 'Manche ' + manche
        question.innerHTML = 'De quel couleur est le cheval blanc d\'Henri IV'
    }
    else{
        document.getElementById('reponse').value =''
   }
    
    }
    if(manche == 3){
    if(input == 'Blanc'){
        manche ++;
        stage.innerHTML = 'Manche ' + manche
        question.innerHTML = 'Comment appelle-t-on un homme sans bras?'
    }
    else{
        document.getElementById('reponse').value =''
   }
    
    }
    if(manche == 4){
        if(input == 'Manchot'){
            manche ++;
            stage.innerHTML = 'Manche ' + manche
            question.innerHTML = 'Quel est le formateur le plus sexy de France?'
        }
        else{
            document.getElementById('reponse').value =''
       }
        
        }

        if(manche == 5){
            if(input == 'Thomas'){
                manche ++;
                stage.innerHTML = 'Manche ' + manche
            }
            else{
                document.getElementById('reponse').value =''
           }
            
            }
        if(manche == 6){
                stage.innerHTML = ''
                question.innerHTML ='Victoire'
                document.getElementById('reponse').value =''
         }
            
}
