let button = document.getElementById('btn');
let h1 = document.getElementById('h1s');


button.addEventListener('click' , () => {
    let input = document.getElementById('inp').value;
    if (input != '') {
        let result = ((9 * input) / 5) + 32;
        h1.textContent = result + '°F';
        document.getElementById('inp2').value = result + '°F';
    } else {
        alert ('Please fill the input');
    }

})
