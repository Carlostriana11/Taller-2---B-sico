// En una granja remota, un grupo de ovejas se encuentra en peligro. Están encerradas en diferentes corrales, algunas sanas y salvas, pero otras enfermas o incluso enfrentando la amenaza de un lobo feroz. Tu misión, como programador experto, es crear un programa en JavaScript que te ayude a rescatar a las ovejas vivas y preparar el terreno para su futuro bienestar.

//     const corrales = [
//         [ 'oveja', 'oveja', '', 'oveja', '' ],
//         [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
//         [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
//     ]
// La siguiente lista corrales representa los corrales.

// Cada posición en la lista contiene un string que indica el estado de un animal:

// oveja: Oveja sana y salva.
// muerta: Oveja que necesita ser removida del corral.
// lobo: ¡Un peligro para las ovejas!
// '': Un espacio libre en el corral.

const corrales = [
        [ 'oveja', 'oveja', '', 'oveja', '' ],
        [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
        [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
    ]

let oveja = []
let espacioVacio = []


function obtenerSeparar(){
    for(let i = 0; i<corrales.length; i++){
        corrales[i].forEach(element => {

            if(element === 'oveja'){
                oveja.push(element)
            }else if(element === 'muerta'){
                        element = ''
                        espacioVacio.push(element)
            }else if(element === 'lobo'){
                espacioVacio.push('oveja')
                espacioVacio.push('oveja')
                element = ''
                espacioVacio.push(element)
            }else{
                espacioVacio.push(element)
            }
        });
    }
    
}
function eliminarEspacios(){
    let countOvejasConsecutivas = 0; 

    for (let i = 0; i < espacioVacio.length - 1; i++) {
        if (espacioVacio[i] === 'oveja') {
            countOvejasConsecutivas++;

            if (countOvejasConsecutivas === 2) {
                if (espacioVacio[i + 1] === '' && espacioVacio[i + 2] === '') {
                    espacioVacio.splice(i + 1, 2); 
                    break;
                }
            } else {
                if (espacioVacio[i + 1] === '') {
                    espacioVacio.splice(i + 1, 1); 
                    break; 
                }
            }
        } else {
            countOvejasConsecutivas = 0;
        }
    }
}

obtenerSeparar()
eliminarEspacios()

console.log(`las ovejas vivas son ${oveja.length}`)
console.log(`los espacios vasios son  ${espacioVacio.length}`)






