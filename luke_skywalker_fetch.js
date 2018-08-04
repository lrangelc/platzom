/* Funcion para tratar el error */
function handleError(err) {
	console.log(`Request failed: ${err}`);
}

/*llamada al metodo */
console.log('yeap');

let luke;

fetch('https://www.swapi.co/api/people/1/')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        luke = myJson;
        console.log(myJson);
        return fetch(luke.homeworld);
    })
    .then(response => response.json())
    .then((homeworld) => {
        luke.homeworld = homeworld;
        console.log(`${luke.name} nació en ${luke.homeworld.name}`);
        console.log(`Request succeded`);
        console.log('luke', luke);    
    })
    .catch(err => handleError(err));

console.log('hola');