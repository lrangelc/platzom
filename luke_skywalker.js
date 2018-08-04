function get(URL, callback) {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		const DONE = 4;
		const OK = 200;
    
		console.log('readyState',this.readyState);
		console.log('status',this.status);
		if (this.readyState === DONE) {
			if (this.status === OK) {
				//Todo OK
				callback(null, JSON.parse(this.responseText));
			}
			else {
				//Hubo un error
				callback(new Error(`Se produjo un error al realizar el request ${this.status}`));
			}
		}
    	else {
			callback(new Error(`Se produjo un error al realizar el request readyState ${this.readyState}`));      
    	}
	}

	xhr.open('GET', URL);
	xhr.send(null);
}

/* Funcion para tratar el error */
function handleError(err) {
	console.log(`Request failed: ${err}`);
}


/*llamada al metodo */
console.log('yeap');

get('https://www.swapi.co/api/people/1/', function onResponse(err, luke) {
	if(err) return handleError(err);

	/* Para traer el mundo */
	get(luke.homeworld, function onHomeworldResponse(err, homeworld) {
		if(err) return handleError(err);

		luke.homeworld = homeworld;
		console.log(`${luke.name} nació en ${luke.homeworld.name}`);
	})

	console.log(`Request succeded`);
	console.log('luke', luke);
});

console.log('hola');