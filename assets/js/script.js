// Esercizio email

const bottone = document.querySelector(".bottone_invio")

 const risultato = document.querySelector(".risultato_email");

 const email_che_accedono = ["pallo@gmail.com", "pinco@gmail.com", "pippo@gmail.com"];

bottone.addEventListener('click',
    function(){
        const richiedo_email = document.querySelector(".email_inserita").value;
        for (let i = 0; i < email_che_accedono.length; i++) {
            let email = email_che_accedono[i];

             if(email == richiedo_email){
                 risultato.innerHTML = "Accesso effettuato!"
                 risultato.style.color = "green";
                 break
             }else{
                 risultato.innerHTML = "Login errato riprova" 
                 risultato.style.color = "red";
             }    
        }
    }
)
 
//Esercizio dadi

 const risultato_dadi = document.querySelector(".risultato_dadi")

 const giocatore = Math.floor(Math.random() * 6 + 1);

 document.querySelector(".valore_dado_giocatore").innerHTML +=  giocatore;

 const computer = Math.floor(Math.random() * 6 + 1);

 document.querySelector(".valore_dado_computer").innerHTML +=  computer;

 if(giocatore > computer){
     risultato_dadi.innerHTML= "HAI VINTO 😍!"
     risultato_dadi.style.color = "green";
 }else if(giocatore == computer){
     console.log("pareggio");
     risultato_dadi.innerHTML= "Hai pareggiato..."
 }else{
     risultato_dadi.innerHTML= "Hai perso 😭!"
     risultato_dadi.style.color = "red";
 }


 const aggiorna = document.querySelector('.aggiorna');
        aggiorna.addEventListener('click', function() {
            window.location.reload(true);
        });


        
