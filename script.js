const botao = document.querySelector('.btn');
const resultado = document.getElementById('resultado');



botao.addEventListener('click', () => {
    

    const minInput = document.getElementById('min').value;
    const maxInput = document.getElementById('max').value;
    const min = Number(minInput);
    const max = Number(maxInput);
    if (minInput === '' || maxInput === '') {
        resultado.textContent = 'Preencha os campos';
        return;
    }

    if (min > max) {
        resultado.textContent = 'Mín > Máx';
        return;
    }

    resultado.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
});