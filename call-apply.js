const LR = {
    nombre:'Luis',
    apellido:'Rangel'
}
function saludar(veces,uppercase){
    let str = `Hola! ${this.nombre} ${this.apellido}`;
    str = uppercase ? str.toUpperCase() : str;
    for(let i=0;i<veces;i++){
        console.log(str);
    }
}

saludar(3,true);
saludar.call(LR,3,true);
saludar.apply(LR,[3,true]);

const params = [5,true];
saludar.call(LR,...params);