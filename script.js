const button = document.getElementById("button");

button.addEventListener('click', () => {
    let symble = document.querySelector('#symble').value;
    let first = document.querySelector('#first').value;
    let secound = document.querySelector('#secound').value;
    let showValue = document.getElementById('showValue');

    switch (symble) {
        case '+':
            result = parseFloat(first) + parseFloat(secound);
            showValue.innerText = "Result = "+ result;
            break;
        case '-':
            result = parseFloat(first) - parseFloat(secound);
            console.log(result)
            showValue.innerText = "Result = "+ result;
            break;
        case '*':
            result = parseFloat(first) * parseFloat(secound);
            console.log(result)
            showValue.innerText = "Result = "+ result;
            break;
        case '/':
            result = parseFloat(first) / parseFloat(secound);
            console.log(result)
            showValue.innerText = "Result = "+ result;
            break;
        default:
            console.log("Invalid Value");
    }

});