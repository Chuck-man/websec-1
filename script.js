function calculation() 
{
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let resultOld = document.querySelector(".calc-result-old");
    let resultNew = document.querySelector(".calc-result-new");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Ошибка! Введите корректные числа.");
        return;
    }

    let result;
    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": 
            if (Math.abs(num2) < Number.EPSILON) {
                alert("Ошибка: Деление на ноль!");
                return;
            }
            result = num1 / num2;
        break;
    }

    resultOld.classList.add("gray-text");
    resultOld.textContent = resultNew.textContent;
    resultNew.textContent = `${num1} ${operator} ${num2} = ${result}`;
}