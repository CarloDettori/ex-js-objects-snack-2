//SNACK1_______________________________________________
// 1 Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// 2 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 1 console.log(hamburger.name) -> Double Cheese Burger; console.log(secondBurger.name) -> Double Cheese Burger viene creata una referenza allo stesso oggetto per entrambe le variabili
// 2 1 perchè vien crata solo una nuova referenza, non un nuovo oggetto




//SNACK2_______________________________________________
//P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
// 1 Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// 2 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 1 console.log(hamburger.ingredients[0]) -> Salad; console.log(secondBurger.ingredients[0]) -> Salad (riferito all'originale) perche lo spreading crea una copia superficiale dell'oggetto originale ma non di altri oggetti annidati quindi "Salad" viene assegnatao all'oggetto ingredienti che vale per entrambe le copie
// 2 3 in totale perche la copia creata con spread è pur sempre una copia nonostante sia superficiale, tuttavia l'array nell primo oggetto




//SNACK3_______________________________________________
// 1 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 1 6 perche oltre alle copie bisogna tener conto anche degli oggetti annidati




//SNACK4_______________________________________________
// 1 Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// 2 Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

// 1 spread, perche non ci sono oggetti annidati e lo spread copia anche le funzioni
// 2 structuredClone(), perche copia oggetti annidati anche quando sono complessi e non ci sono funzioni annidate




//SNACK5_______________________________________________
// 1 Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// 2 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 1 console.log(hamburger.maker.name) -> Chef Hyur;
//   console.log(secondBurger.maker.name) -> Chef Hyur;
//   console.log(hamburger.maker.restaurant.name) -> Hyur's II;
//   console.log(secondBurger.maker.restaurant.name) -> Hyur's II;
// 2 5 in totale 






//SNACK6_______________________________________________
// 1 Qual è il metodo migliore per clonare l’oggetto chef, e perché?

// 1 la scelta migliore sarebbe un mix tra spread e structuredClone, structuredClone sarà necessario perche chef è un oggetto complesso con vari gradi di profondità perciò avremo bisogno di una copia profonta ma. Tuttavia presenta anche una funzione annidata, quindi sarà necessario anche uno spread perche altrimenti non possiamo copiare la funzione. la scelta definitiva sarebbe utilizzare la libreria esterna lodash che permette una copia totale dell'oggetto preso in questione





//SNACK7_______________________________________________
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
// Serve usare una funzione ricorsiva! (fai un po’ di ricerca).

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

function cloner(object) {
    if (typeof object !== 'object') {
        return object
    }
    const copia = {}
    for (const key in object) {
        const valore = object[key]
        if (typeof valore !== "object") {
            copia[key] = valore;
        } else {
            copia[key] = cloner(valore)
        }
    }
    return copia
}

const chefCopy = cloner(chef)
console.log(chefCopy)
