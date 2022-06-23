// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data (in data avrò l'src).

// Necessario per il corretto funzionamento di vuejs
var app = new Vue ({
    // dichiariamo un elemento "el" necessario per poter far funzionare il framework
    el:  '#root',
    // all'interno di "data", avremo i dati da far apparire nell'html 
    data: {
        messageToDisplay: 'Hello Vue',
        // la radice "img/" è necessaria per la corretta visualizzazione del file
        imageToDisplay: 'img/' + '1200px-Vue.js_Logo_2.svg.png'
    }
})