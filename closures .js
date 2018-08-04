function saludaFamilia(apellido){
    return function saludaMiembro(nombre){
        console.log(`Hola ${nombre} ${apellido}`);
    };
}

function saludaFamilia1(apellido1,apellido2){
    return function saludaMiembro1(nombre1,nombre2 = ''){
        console.log(`Hola ${nombre1} ${nombre2} ${apellido1} ${apellido2}`);
    };
}

const saludaFamilia2 = apellido => saludaMiembro = nombre => console.log(`Hola ${nombre} ${apellido}`);

const saludaFamilia3 = apellido => {
    return function saludaMiembro(nombre){
        console.log(`Hola ${nombre} ${apellido}`);
    };
}
const saludaRangel = saludaFamilia("Rangel");
const saludaRangel1 = saludaFamilia1("Rangel","Castro");
const saludaRangel2 = saludaFamilia2("Rangel");
const saludaRangel3 = saludaFamilia3("Rangel");

saludaRangel("Luis");
saludaRangel1("Luis");
saludaRangel1("Kenneth","Zaid");
saludaRangel2("Bryan");
saludaRangel3("Astrid");

const agregaPre = prefijo => genPre = valor => prefijo + valor;

const xx = agregaPre("re");

xx("cool");