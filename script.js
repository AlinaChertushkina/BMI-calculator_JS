const button = document.querySelector('.button');

button.addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('resultingBmi');
    const heightPow = Math.pow(height, 2);

    if (height.value === "" || (height <= 0)) {
        alert("Введите правильное значение");
        return;
    }

    if (weight.value === "" || (weight <= 0)) {
        alert("Введите правильное значение");
        return;
    }

    let bmi = (weight / heightPow).toFixed(2);
    result.innerHTML = bmi;

    if (bmi < 18.5) {
        alert("Недостаточный вес");
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        alert("Нормальный вес");
    }
    if (bmi > 25.0) {
        alert("Ожирение");
    }

})

