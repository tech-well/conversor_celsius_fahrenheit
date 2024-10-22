


function converter(){
    const celsius = document.querySelector('#celsius').value
    const f = celsius * 1.8 + 32
    document.querySelector('#resultado').innerHTML = `${celsius} c é igual a ${f} f`
}

