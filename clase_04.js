//Números hasta el 100
let numero_al_100 = 1;

while (numero_al_100 < 100){
    console.log(numero_al_100);
    numero_al_100 = numero_al_100+1;
}

//Número de 1000 a 500
let numero_al_500 = 1000;

while (numero_al_500 >500){
    console.log(numero_al_500);
    numero_al_500 = numero_al_500-2;
}

//Promedio de notas
let n1 = 6;
let n2 = 8;
let n3 = 9;
let n4 = 2;
let n5 = 5;
let n6 = 10;
//Función que suma las notas
const suma_notas = (n1,n2,n3,n4,n5,n6) => {
    let total_notas = n1+n2+n3+n4+n5+n6;
    return total_notas;
    
}

suma_notas(n1,n2,n3,n4,n5,n6)

//Función que saca el promedio
const promedio_final = () => {
    let notas_sumadas = suma_notas(n1,n2,n3,n4,n5,n6)
    return parseFloat((notas_sumadas/6).toFixed(2));
}

promedio_final();