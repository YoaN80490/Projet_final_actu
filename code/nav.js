let x = 0;
let y =0;

const clair = document.getElementById("clair")

clair.addEventListener('click',function theme() {
    if(x == 0){
        var sheet = document.styleSheets[0];

        if(y==1){
            sheet.deleteRule(":root{--noir_principal:#2C2D33 !important}");
            sheet.deleteRule(":root{--noir_secondaire:#ECECEC !important}");
            sheet.deleteRule(":root{--noir:#1C1D21 !important}");
            sheet.deleteRule(":root{--blanc_principal:#FFF !important}");
            sheet.deleteRule(":root{--degrade-noir-bas:linear-gradient(0deg, rgba(44,45,51,1) 0%, rgba(35,36,42,1) 100%)}");
            sheet.deleteRule(":root{--noir-transparant:#00000063}");
        }

        sheet.insertRule(":root{--noir_principal:#FFFF !important}");
        sheet.insertRule(":root{--noir_secondaire:#ECECEC !important}");
        sheet.insertRule(":root{--noir:#D0D0D0 !important}");
        sheet.insertRule(":root{--blanc_principal:#060606 !important}");
        sheet.insertRule(":root{--degrade-noir-bas:linear-gradient(180deg, rgba(236,236,236,1) 0%, rgba(255,255,255,1) 100%) !important}");
        sheet.insertRule(":root{--noir-transparant:#ffffff63 !important}");
        clair.classList.replace("fa-moon", "fa-sun");
        x++
    }
    //on passe de clair a sombre
    //metre icon <i class="fa-solid fa-moon" id="clair"></i> a la fin
    else{
        var sheet = document.styleSheets[0];

        sheet.deleteRule(":root{--noir_principal:#FFFF !important}");
        sheet.deleteRule(":root{--noir_secondaire:#ECECEC !important}");
        sheet.deleteRule(":root{--noir:#D0D0D0 !important}");
        sheet.deleteRule(":root{--blanc_principal:#060606 !important}");
        sheet.deleteRule(":root{--degrade-noir-bas:linear-gradient(180deg, rgba(236,236,236,1) 0%, rgba(255,255,255,1) 100%)}");
        sheet.deleteRule(":root{--noir-transparant:#ffffff63}");

        sheet.insertRule(":root{--noir_principal:#2C2D33 !important}");
        sheet.insertRule(":root{--noir_secondaire:#23242A !important}");
        sheet.insertRule(":root{--noir:#1C1D21 !important}");
        sheet.insertRule(":root{--blanc_principal:#FFF !important}");
        sheet.insertRule(":root{--degrade-noir-bas:linear-gradient(0deg, rgba(44,45,51,1) 0%, rgba(35,36,42,1) 100%) !important}");
        sheet.insertRule(":root{--noir-transparant:#00000063 !important}");
        clair.classList.replace("fa-sun", "fa-moon");
        x = 0
        y=1;
    }
})

const clair2 = document.getElementById("clair2")

clair2.addEventListener('click',function theme() {
    if(x == 0){
        var sheet = document.styleSheets[0];

        if(y==1){
            sheet.deleteRule(":root{--noir_principal:#2C2D33 !important}");
            sheet.deleteRule(":root{--noir_secondaire:#ECECEC !important}");
            sheet.deleteRule(":root{--noir:#1C1D21 !important}");
            sheet.deleteRule(":root{--blanc_principal:#FFF !important}");
            sheet.deleteRule(":root{--degrade-noir-bas:linear-gradient(0deg, rgba(44,45,51,1) 0%, rgba(35,36,42,1) 100%)}");
            sheet.deleteRule(":root{--noir-transparant:#00000063}");
        }

        sheet.insertRule(":root{--noir_principal:#FFFF !important}");
        sheet.insertRule(":root{--noir_secondaire:#ECECEC !important}");
        sheet.insertRule(":root{--noir:#D0D0D0 !important}");
        sheet.insertRule(":root{--blanc_principal:#060606 !important}");
        sheet.insertRule(":root{--degrade-noir-bas:linear-gradient(180deg, rgba(236,236,236,1) 0%, rgba(255,255,255,1) 100%) !important}");
        sheet.insertRule(":root{--noir-transparant:#ffffff63 !important}");
        clair2.classList.replace("fa-moon", "fa-sun");
        x++
    }
    //on passe de clair a sombre
    //metre icon <i class="fa-solid fa-moon" id="clair"></i> a la fin
    else{
        var sheet = document.styleSheets[0];

        sheet.deleteRule(":root{--noir_principal:#FFFF !important}");
        sheet.deleteRule(":root{--noir_secondaire:#ECECEC !important}");
        sheet.deleteRule(":root{--noir:#D0D0D0 !important}");
        sheet.deleteRule(":root{--blanc_principal:#060606 !important}");
        sheet.deleteRule(":root{--degrade-noir-bas:linear-gradient(180deg, rgba(236,236,236,1) 0%, rgba(255,255,255,1) 100%)}");
        sheet.deleteRule(":root{--noir-transparant:#ffffff63}");

        sheet.insertRule(":root{--noir_principal:#2C2D33 !important}");
        sheet.insertRule(":root{--noir_secondaire:#23242A !important}");
        sheet.insertRule(":root{--noir:#1C1D21 !important}");
        sheet.insertRule(":root{--blanc_principal:#FFF !important}");
        sheet.insertRule(":root{--degrade-noir-bas:linear-gradient(0deg, rgba(44,45,51,1) 0%, rgba(35,36,42,1) 100%) !important}");
        sheet.insertRule(":root{--noir-transparant:#00000063 !important}");
        clair2.classList.replace("fa-sun", "fa-moon");
        x = 0
        y=1;
    }
})

var icon = document.getElementById('icon')
icon.addEventListener("click", () => {
    nav.classList.toggle("active")
})
