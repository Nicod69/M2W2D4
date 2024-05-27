


// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const shippingCost = 25;
const discountPercentage = 0.7;
const priceToFreeShipping = 100;

let user = {
  nome: '',
  cognome: '',
  isAmbassador: false,
  cart:0
}

let userList =[];



const lodovico = {
  nome: 'Lodovico',
  cognome: 'Rossi',
  isAmbassador: false,
  cart:[10,55,88]
}

const antonio ={
  nome: 'Antonio',
  cognome: 'Lombardi',
  isAmbassador: true,
  cart:[40,75,88]

}


const vincenzo ={
  nome : 'Vincenzo',
  cognome : 'Bellini',
  isAmbassador : true,
  cart:[30,20,30]
}

const gaetano ={
  nome :'Gaetano',
  cognome :'Rossini',
  isAmbassador : false,
  cart : [12,5,10]
}


userList.push(lodovico, antonio, vincenzo, gaetano);


function getFinalPrice(username){
  let finalPrice =0;
  if (username){
    //alert(username.cart);
  
    for (let i=0; i<username.cart.length; i++){
      finalPrice += username.cart[i];
    }
    if (username.isAmbassador){
      alert("ottimo, siccome sei membro Ambassador hai diritto al 30% di sconto sul prezzo finale");
      finalPrice = finalPrice*discountPercentage;
    }

    if (finalPrice<=priceToFreeShipping){
      alert(`Per garantirti la spedizione gratuita ti basta aggiungere ${priceToFreeShipping + 0,01-finalPrice}`)
      finalPrice = finalPrice + shippingCost;
    }
    else{
       alert("Complimenti siccome hai speso "+ finalPrice + " hai diritto alla spedizione è gratuita")
    }
  }
  
}


//
getFinalPrice(userList[1]);


//******Stampa lista utenti con check isAmbassador e creo un array con questi ultimi */
let arOnlyAmbassador = [];

function printUserList(users){
  for (let i=0; i<users.length;i++){
    switch (users[i].isAmbassador){
      case true:
        arOnlyAmbassador.push(users[i]);
        console.log(`${users[i].nome} ${users[i].cognome} è un ambassador`);
        break;
      case false:
        console.log(`${users[i].nome} ${users[i].cognome} non è un ambassador`)
        break; 
      default:
        console.log(`${users[i].nome} ${users[i].cognome} non è ancora stato classificato`)    
    }
  }
}

printUserList(userList);
console.log(arOnlyAmbassador[1])
//********************************************************* */