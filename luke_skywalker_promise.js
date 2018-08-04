function get(URL, callback) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            const DONE = 4;
            const OK = 200;
        
            console.log('readyState',this.readyState);
            console.log('status',this.status);
            if (this.readyState === DONE) {
                if (this.status === OK) {
                    //Todo OK
                    resolve(JSON.parse(this.responseText));
                }
                else {
                    //Hubo un error
                    reject(new Error(`Se produjo un error al realizar el request ${this.status}`));
                }
            }
            //else {
            //    reject(new Error(`Se produjo un error al realizar el request readyState ${this.readyState}`));      
            //}
        }

        xhr.open('GET', URL);
        xhr.send(null);
    });
}

/* Funcion para tratar el error */
function handleError(err) {
	console.log(`Request failed: ${err}`);
}


/*llamada al metodo */
console.log('yeap');

let luke;

get('https://www.swapi.co/api/people/1/')
    .then((res) => {
        luke = res;
        return get(luke.homeworld);
    })
    .then((homeworld) => {
        luke.homeworld = homeworld;
        console.log(`${luke.name} nació en ${luke.homeworld.name}`);
        console.log(`Request succeded`);
        console.log('luke', luke);    
    })
    .catch(err => handleError(err));

console.log('hola');