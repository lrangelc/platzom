//OPCION A
//------------------------------->
let base = 5;
let height = 7;

const triangleArea = (base,height) => base * height / 2;

console.log(`El area de un triangulo con base ${base} y altura ${height} es de: ${triangleArea(base,height)}`);
//OPCION A
//-------------------------------<



//OPCION B
//------------------------------->
let base = 5;
let height = 7;

const triangleArea = (base,height) => {
    return base * height / 2;
};

console.log(`El area de un triangulo con base ${base} y altura ${height} es de: ${triangleArea(base,height)}`);
//OPCION B
//-------------------------------<




//Área Circulo
let radio = prompt(`Ingrese el Radio del Ciculo`);
const circleArea = (radio) => Math.PI * Math.pow(radio, 2);
console.log(`El area del circulo con radio de ${radio} es: ${circleArea(radio)}`);

//Área Cuadrado
let lado = prompt(`Ingrese el Lado del Cuadrado`);
const squareArea = (lado) => Math.pow(lado, 2);
console.log(`El area del cuadrado con lado de ${lado} es: ${squareArea(lado)}`);


//Área Rectangulo
let base = prompt(`Ingrese la Base del Rectangulo`);
let lado = prompt(`Ingrese el Lado del Rectangulo`);
const rectangleArea = (lado,base) => lado * base;
console.log(`El area del Rectangulo con lado de ${lado} y base de ${base}
es: ${rectangleArea(lado,base)}`);


var persona1 = {
	'name': 'Juan',
	'age':50,
	'doc': 11222333
};

alert(persona1.name);


var persona2 = {
	name: 'Juan',
	age:50,
	doc: 11222333
}

alert(persona2.name);


class Pelicula {
    constructor(nombre, pg) {
      this.nombre = nombre;
      this.pg = pg;
    }
}

class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
}

var SW = new Pelicula("Star Wars 7",13);

var Rodrigo = new Persona("Rodrigo",1);
var Luis = new Persona("Luis",37);

const canWatchMovie = (pelicula,persona,acompanante) => {
    let canWatch = false;
    let mensaje = '';

    if (persona.edad >= pelicula.pg)
    {
        canWatch = true;
        mensaje = `${persona.nombre} puede ver la pelicula ${pelicula.nombre}.`;
    }
    else
    {
        if (acompanante)
        {
            if (acompanante.edad >= 18)
            {
                canWatch = true;
                mensaje = `${persona.nombre} puede ver la pelicula ${pelicula.nombre} porque esta acompañado por un adulto (${acompanante.nombre}).`;
            }
        }
    }

    if (canWatch)
    {
        alert(mensaje);
    }
    else
    {
        alert(`${persona.nombre} no puede ver la pelicula ${pelicula.nombre} porque tiene ${persona.edad} años 
        y la pelicula solo puede ser vista por personas que al menos tengan ${pelicula.pg} años de edad.`);
    }
};

canWatchMovie(SW,Rodrigo);
canWatchMovie(SW,Rodrigo,Luis);