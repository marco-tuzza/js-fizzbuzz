//  Creiamo prima di tutto una lista di numeri da 1 a 100
for (var i=1; i <= 100; i++);
{
    // Individuiamo i multipli di 3 dividendo per 3 i singoli elementi, e verificando se il resto di questa operazione è uguale a 0.

    if (i % 3 == 0)

    // Sostituiamo con la parola 'Fizz'

console.log("Fizz");

    // Individuiamo i multipli di 5 dividendo per 5 i singoli elementi, e verificando se il resto di questa operazione è uguale a 0.

    else if (i % 5 == 0)

    // Sostituiamo con la parola 'Buzz'

console.log("Buzz");

    // Per individuare i multipli sia di 5 che di 3 ci serve individuare il minimo comune multiplo tra questi due numeri. Una volta individuato, basterà ripetere quello che abbiamo fatto con le altre due condizioni. Se un numero diviso per 15 da come resto 0, possiamo essere sicuri che anche diviso per 3 e per 5 il resto della divisione sarà sempre 0.

    else if (i % 15 == 0)

    // Sostituiamo con la parola 'FizzBuzz'

console.log("FizzBuzz");

    // Ovviamente per tutti i numeri che non rispettano nessuna delle condizioni precedenti, basterà lasciare tutto invariato.

    else

    // Stampiamo l'elemento invariato

console.log(i);
}
