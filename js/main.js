
// 1 chiedere all’utente il suo nome

var nome = prompt('Qual è il tuo nome?')
console.log(nome);



// 2 chiedere il cognome

var cognome = prompt('Qual è il tuo cognome?')
console.log(cognome);




// 3 chiedere il colore preferito

var colore = prompt('Qual è il tuo colore preferito?')
console.log(colore);





// 4 scrivere nella pagina le informazioni ottenuti dall’utente, nel formato: nomecognomecolorepreferito20
var password = nome + cognome + colore + '20';
console.log(password);
document.getElementById('password').innerHTML = password;



document.getElementById('thanks').innerHTML = 'Grazie per aver utilizzato il nostro sistema, ' + nome + ' ' + cognome + '.'
