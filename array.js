const suma = (...numbers)=>numbers.reduce((acum,number)=>acum+=number,0);

const dobles = (...numbers)=>numbers.map(number=>number*2);

const pares=(...numbers)=>numbers.filter(numero=> numero%2==0);

function suma1 (...numbers){
    return numbers.reduce(function (acum,number) {
        return acum += number;
    },0);
}

function dobles1 (...numbers){
    return numbers.map(function (number){
        return number * 2;
    });
}

function pares1(...numbers){
    return numbers.filter(function (numero){
        console.log(numero);
        return numero % 2 == 0;
    });
}

console.log(suma(5,33));
console.log(suma1(20,40));
console.log(suma());
console.log(suma1());

console.log(dobles1(40,20));

console.log(pares1(0,1,2,3,4,5,6));


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 3);

console.log(result);