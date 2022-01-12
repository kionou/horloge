var heur = document.querySelector('.heures');
var dt = document.querySelector('.date');



function afficherhorloge() {
    var today ,annee, listeMois,mois,listeJours,jourNumero,jourNom,heures,minutes,secondes,deuxchiffres;

    today = new Date();
    console.log(today);
    annee = today.getFullYear();
    console.log(annee);

    listeMois = ["Janvier" ,"Février" ,"Mars" ,"Avril" ,"Mai" ,"Juin" ,"Juillet" ,"Aout" ,"Septembre" ,"Octobre" ,"Novembre" ,"Décembre"];
    mois = listeMois[today.getMonth()];
    console.log(mois);

    jourNumero = today.getDate();
    console.log(jourNumero);
    listeJours=["Dimanche" ,"Lnndi" ,"Mardi" ,"Mercredi" ,"Jeudi" ,"Vendredi" ,"Samedi"];
    jourNom = listeJours[today.getDay()];
    console.log(jourNom);

    function deuxchiffres(element) {
        if (element < 10) {
            return element = "0" + element;
            
        } else{
            return element;
        }
    }
    heures =deuxchiffres(today.getHours()) ;
    console.log(heures);
    
    minutes = deuxchiffres(today.getMinutes());
    console.log(minutes);

    secondes = deuxchiffres(today.getSeconds());
    console.log(secondes);

    heur.innerHTML = heures + ": " + minutes + ": " + secondes;
    dt.innerHTML = jourNom + ", " + jourNumero + " " + mois + " " + annee;
    
    setTimeout(afficherhorloge, 1000)
}

afficherhorloge();