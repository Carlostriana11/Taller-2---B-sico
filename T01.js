// Este taller es de nivel básico y pretende afianzar los conocimientos adquiridos sobre los fundamentos de JavaScript.

// Crea una función para que calcule el promedio de al menos 3 notas y que retorne el valor de la letra asociada:

// Calificación	Equivalente en letras
// Entre 4.8 <= 5.0	E = Excelente
// Entre 4.5 < 4.8	MB = Muy bueno
// Entre 4.0 < 4.4	B = Bueno
// Entre 3.5 < 4.0	A = Aprobado
// Entre 0 < 3.5	R = Reprobado

function solicitarNotas (){
    condition = '';
    const notasS = [];

    do {
        let notas = parseInt(prompt('ingrese la nota pofavor'));
        if(notas <= 5){
            notasS.push(notas);
        }
        condition = prompt('desea ingresar otra nota S/N');

    } while (condition.toLowerCase() === 's');

    return notasS;
}

function promedioNotas( notasS ){
    let suma = 0;
    promedio = 0;
    for (const nota of notasS) {
        suma += nota
        promedio = suma /notasS.length
    }
    return promedio;
}

function nLetras(promedio){
    let nota = promedio;
    if(nota > 4.8 && nota <= 5){
        return 'E';
    }else if(nota > 4.5 && nota < 4.8){
        return 'MB';
    }else if(nota > 4 && nota < 4.4){
        return 'B';
    }else if(nota > 3.5 && nota < 4){
        return 'A';
    }else if(nota > 0 && nota < 3.5){
        return 'MB';
    }else{
        return 'no tienes nota'
    }

}
nLetras()


let notasE = promedioNotas(solicitarNotas());
console.log(notasE)

let notasA = nLetras(notasE);
console.log(notasA)




