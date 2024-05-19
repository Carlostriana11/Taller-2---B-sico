function operation( operator, firstValue, secondValue ) {
    
    switch(operator){
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = secondValue - firstValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            if(secondValue !== 0){
                result = firstValue / secondValue;
            }else{
                'no se puede dividir por cero'
            }
            break;

        default:
            result = 'operador no valido';
            
    }
    return result;
}
let operaciones1 = operation('+', 3, 6)
let operaciones2 = operation('-', 7, 3)
let operaciones3 = operation('*', 9, 9)
let operaciones4 = operation('/', 15, 3)
console.log(operaciones1);
console.log(operaciones2);
console.log(operaciones3);
console.log(operaciones4);

