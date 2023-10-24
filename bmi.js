const form = document.querySelector('form');

function calcBmi(height, weight) {
    height = height / 100;
    let result = weight / (height * height);
    return result.toFixed(2)
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelector('#result').innerHTML = '';
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    if (height.trim() === '' || weight.trim() === '') {
        alert('مقادیر را وارد نمایید')
        return false;
    }

    height = parseInt(height);
    weight = parseInt(weight);
    if (isNaN(height) || isNaN(weight)) {
        alert("قد و وزن باید عددی باشد");
        return;
    }
    if (height < 0 || weight < 0) {
        alert('اعداد باید بزرگتر از صفر باشد')
        return;
    }


    document.querySelector('#result').innerHTML = calcBmi(height, weight)
})
