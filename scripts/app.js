
// const btnCalculate = document.querySelector(".handle__main__btn");




// btnCalculate.addEventListener('click', () => {
    
//     const valueCalc = document.querySelector(".handle__main__input").value;

//     Number(valueCalc);
//     var a = parseFloat(valueCalc);
//     console.log(typeof(a));



//     console.log(valueCalc);

// })


// let hasValueComputed = false;

function insert(newValue, isOperator){

    // aqui abaixo não funcionou a verificacao se o operador é ( / || * || - ), parece que é bug do JS...
    // ...irei implementar uma solução alternativa, que é o parametro "isOperator", que só irei passar ele...
    // ...quando o valor for operador matematico ex: "+, -, / e * "

    if(isOperator){
        // alert('ola')
    }

    console.log(isOperator);
    console.log(typeof(newValue));

    // newValue.toString()

    const value3 = newValue;

    const barra = '/';
    const vezes = '*'

    if(isOperator){

        document.getElementById("calculator__output__previus-operand").innerHTML = "";
        
    }

    else if(isOperator === undefined){

        
        // document.getElementById("calculator__output__current-operand").innerHTML = "";

        const calculatorOutputPrevius = document.getElementById("calculator__output__previus-operand").innerHTML;


        if(calculatorOutputPrevius){
            
            document.getElementById("calculator__output__current-operand").innerHTML = "";
            document.getElementById("calculator__output__previus-operand").innerHTML = "";

        }
        // if (calculatorOutputPrevius.length > 0) {
        // // alert("CLEAR");

        //     document.getElementById("calculator__output__previus-operand").innerHTML = "";

        //     document.getElementById("calculator__output__current-operand").innerHTML = "";
        // }

    }





    const valueAlreadyComputed = document.getElementById("calculator__output__current-operand").innerHTML;

    const newValueComputed = valueAlreadyComputed + newValue;

    document.getElementById("calculator__output__current-operand").innerHTML = newValueComputed;

    // console.log(newValueComputed);
}

function clearCalculator(){

    document.getElementById("calculator__output__current-operand").innerHTML = "";
    
    document.getElementById("calculator__output__previus-operand").innerHTML ="";

}


function calculate(){

    const valueAlreadyComputed = document.getElementById("calculator__output__current-operand").innerHTML;

    // console.log(valueAlreadyComputed.length)


    // valueAlreadyComputed.length > 0;

    // hasValueComputed = true;


    document.getElementById("calculator__output__previus-operand").innerHTML = valueAlreadyComputed;

    document.getElementById("calculator__output__current-operand").innerHTML = eval(valueAlreadyComputed);

    // hasValueComputed = false;


        // document.getElementById("calculator__output__current-operand").innerHTML = eval(valueAlreadyComputed);



    if(valueAlreadyComputed.typeOf ){

        alert('asd')
        
        if (valueAlreadyComputed === undefined){
                    // document.getElementById("calculator__output__current-operand").innerHTML = 'asda'


        };

        // document.getElementById("calculator__output__current-operand").innerHTML = eval(valueAlreadyComputed);
        
    }
    else
    {
        // alert('xd')
        // document.getElementById("calculator__output__current-operand").innerHTML = "Nada...";





    }

    // console.log(valueAlreadyComputed);

}


function deleteLastDigit(){

    const valueAlreadyComputed = document.getElementById("calculator__output__current-operand").innerHTML;

    const newValueComputed = valueAlreadyComputed.substring(0, valueAlreadyComputed.length - 1);

    document.getElementById("calculator__output__current-operand").innerHTML = newValueComputed;

}
