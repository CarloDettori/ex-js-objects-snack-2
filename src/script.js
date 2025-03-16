//SNACK1_______________________________________________
// 1 Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// 2 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 1 console.log(hamburger.name) -> Double Cheese Burger; console.log(secondBurger.name) -> Double Cheese Burger (in realtà non viene stampato nulla)
// 2 1






//SNACK2_______________________________________________
//P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
// 1 Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// 2 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 1 console.log(hamburger.ingredients[0]) -> ["Cheese", "Meat", "Bread", "Tomato"]; console.log(secondBurger.ingredients[0]) -> array
// 2 2




//SNACK3_______________________________________________
// 1 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 1 2




//SNACK4_______________________________________________
// 1 Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// 2 Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

// 1 spread, perche copia le funzioni
// 2 structuredClone(), perche copia oggetti annidati anche quando sono complessi




//SNACK5_______________________________________________
// 1 Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// 2 Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 1 console.log(hamburger.maker.name) -> Anonymous Chef;
//   console.log(secondBurger.maker.name) -> Chef Hyur;
//   console.log(hamburger.maker.restaurant.name) -> Hyur's Burgers;
//   console.log(secondBurger.maker.restaurant.name) -> Hyur's II;
// 2 2






//SNACK6_______________________________________________
// 1 Qual è il metodo migliore per clonare l’oggetto chef, e perché?

// 1 un mix tra spread e structured clone perche chef è un oggetto complesso con vari gradi di profondità ma presenta anche una funzione annidata





//SNACK7_______________________________________________
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.
// Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
