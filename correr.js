const nombre = 'Luis';
const dias = ['Lunes'
    ,'Martes'
    ,'Miercoles'
    ,'Jueves'
    ,'Viernes'
    ,'Sabado'
    ,'Domingo'];

const totalDias = dias.length;
var totalKms = 0;
var kms = 0;

function correr(){
    const min = 5;
    const max = 15;

    return Math.round(Math.random() * (max - min)) + min;
}

for (let i=0;i<totalDias;i++)
{
    kms = correr();
    totalKms += kms;
    console.log(`${nombre} corrio el ${dias[i]} ${kms}kms`);
}

const promedioKms = totalKms / totalDias;

console.log(`En promedio, ${nombre} corrio ${promedioKms.toFixed(2)}kms`);