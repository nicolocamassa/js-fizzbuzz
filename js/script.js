let i;
let container = document.querySelector('.container');



// Append the "li" node to the list:


/* Ciclo da 1 a 100 */
for(i = 1; i <= 100; i++){
    /* Stampa di tutti i numeri in HTML*/
    const node = document.createElement("p");
    const textnode = document.createTextNode(i);
    node.appendChild(textnode);
    container.appendChild(node);

    /* Stampa dei numeri NON multipli di 5 e 3*/
    if(i%5 != 0 && i%3 != 0){
        console.log(i)
    }else{
        /* Controllo dei numeri multipli di 5 e 3*/
        if(i%5 == 0 && i%3 == 0){
            console.log("FuzzBizz");

        /* Controllo dei numeri multipli SOLAMENTE di 5*/
        }else if(i%5 == 0){
            console.log("Buzz");
        }
        
        /* Controllo dei numeri multipli SOLAMENTE di 3*/
        else if(i%3 == 0){
            console.log("Fuzz");
        }
    }
}