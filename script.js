// les variables dont ont a besoin 
var sp , btn_start , btn_stop , t , ms , s , mn , h;
// fonctions pour initialiser les variables quand la page se charge 
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById("Start");
    btn_stop = document.getElementById("Stop");
    t;
    ms = 0 , s = 0 , min = 0 , h = 0 ;
}
// mettre en place le compteur

function update_chrono(){// incrementer les millisecondes
    ms+=1;
    if (ms == 10){
        ms=1;
        s += 1;
    }
    if (s == 60){
        s = 0;
        min +=1;
    }
    if ( min == 60){
        min = 0;
        h +=1;
    }
    // insertions des valeurs dans le span 
    //[0] permet de selectionner le premier span
    // [1] permet de selectionner le deuxieme span
    
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}
    // mettre en place la fonctions du bouton start
function start(){
    t = setInterval(update_chrono,100);//execute la fomction update_chrono toute les 100ms
    btn_start.disabled = true;
}
    // mettre en place la fonctions du bouton stop
function stop(){
    clearInterval(t);// arreter l'execution de la fonction update_chrono
    btn_start.disabled = false;// activer le bouton start
}     
// mettre en place la fonctions du bouton reset
function reset(){
    clearInterval(t);// arreter l'execution de la fonction update_chrono
    h = 0;
    min = 0;
    s = 0;
    ms = 0;
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}