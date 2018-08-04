class Peleador {
    constructor(nombre) {
      this.nombre = nombre;
      this.nivelVida = 100;
    }

    get sigueVivo() {
        return (this.nivelVida > 0);
    }

    golpear(){
        const MIN_POWER = 5;
        const MAX_POWER = 12;
        return Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER); 
    }
}

const ambosSiguienVivos = () => peleador1.sigueVivo && peleador2.sigueVivo;

var peleador1 = new Peleador('Goku');
var peleador2 = new Peleador('Super Man');
var round = 0;

while (ambosSiguienVivos())
{
    round++;
    console.log(`Round: ${round}`);

    const GOLPE_PELEADOR1 = peleador1.golpear();
    const GOLPE_PELEADOR2 = peleador2.golpear();

    if (GOLPE_PELEADOR1 != GOLPE_PELEADOR2)
    {
        if (GOLPE_PELEADOR1 > GOLPE_PELEADOR2)
        {
            console.log(`${peleador1.nombre} ataca a ${peleador2.nombre} con un golpe de ${GOLPE_PELEADOR1}`);
            peleador2.nivelVida -= GOLPE_PELEADOR1;
            console.log(`${peleador2.nombre} queda en ${peleador2.nivelVida} puntos de vida`);            
        }
        else
        {
            console.log(`${peleador2.nombre} ataca a ${peleador1.nombre} con un golpe de ${GOLPE_PELEADOR2}`);
            peleador1.nivelVida -= GOLPE_PELEADOR2;
            console.log(`${peleador1.nombre} queda en ${peleador1.nivelVida} puntos de vida`);
        }
    }
}

if(peleador1.sigueVivo)
{
    console.log(`${peleador1.nombre} gano la pelea. su vida es de: ${peleador1.nivelVida}`);
}
else
{
    console.log(`${peleador2.nombre} gano la pelea. su vida es de: ${peleador2.nivelVida}`);
}