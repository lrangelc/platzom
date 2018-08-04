// esto es un objeto literal (literal significa que se le asigna un valor desde el principio o directamente)
/*
	EL cuerpo del objeto va entre llaves y se le asigna sus propiedades/valor, las cuales también pueden ser metodos
*/
const MiObjetoLiteral = {

	entero: 10,
	flotante: 20.5,
	cadena: "hola mundo",

	metodo: function () { // esto es una función anonima, pero que se llamará mediante la propieda del objeto, de nombre "metodo"
		alert("usastes el metodo de tú objeto literal")
	},

	metodo2: platzi // creamos un "metodo", pero realmente esto aún no existe
}

// a las propiedades del objeto literal, se accede mediante: NombreDelObjeto.propiedad (notese el ".")

console.log(MiObjetoLiteral.entero) // 10
console.log(MiObjetoLiteral.cadena) // "hola mundo"

console.log(MiObjetoLiteral.flotante) // 20.5
MiObjetoLiteral.flotante = 15.12// se le asigna un nuevo valor a la propiedad del objeto, llamado flotante
console.log(MiObjetoLiteral.flotante) // 15.12

MiObjetoLiteral.boleano = true// se pueden crear nuevas propiedades desde afuera
console.log(MiObjetoLiteral.boleano) // imprime la nueva propiedad creada en la linea anterior (true)

MiObjetoLiteral.metodo(); // aqui llamamos el metodo del objeto e imprime su alert.
MiObjetoLiteral.metodo(); // aqui llamamos el metodo del objeto e imprime su alert.

// creamos nuestra función "platzi", que estaba siendo utilizada por nuestro objeto, pero que hasta ahora no habia sido creada
function platzi() {
	console.log("siuuuuuuuuuhh")
}

MiObjetoLiteral.metodo2() // se puede acceder a la función de esta manera....
platzi() // ....o de esta manera




const p1 = {
    x: 0,
    y: 4
  }
  
  const p2 = {
    x: 3,
    y: 0
  }
  
  function distancia(p1, p2) {
    const x = p1.x - p2.x
    const y = p1.y - p2.y
  
    return Math.sqrt(x * x + y * y)
  }
  
  console.log(distancia(p1, p2))
  console.log(distancia(p1, { x: 20, y: -7 }))
  console.log(distancia(p1, { horizontal: 20, vertical: -7 })) // NaN