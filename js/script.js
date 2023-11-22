let i;
let container = document.querySelector('.container');
let value;

/* Ciclo da 1 a 100 */
for (i = 1; i <= 100; i++) {

    /* Controllo dei numeri multipli di 5 e 3*/
    if (i % 5 == 0 && i % 3 == 0) {
        value = "FizzBuzz";

        /* Controllo dei numeri multipli SOLAMENTE di 5*/
    } else if (i % 5 == 0) {
        value = "Buzz";
        /* Controllo dei numeri multipli SOLAMENTE di 3*/
    } else if (i % 3 == 0) {
        value = "Fizz";
        /* Stampa dei numeri NON multipli di 5 e 3*/
    } else {
        value = i;
    }

    /* Stampa di tutti i numeri in HTML*/
    const node = document.createElement("p");
    const textnode = document.createTextNode(value);
    node.appendChild(textnode);
    container.appendChild(node);
}