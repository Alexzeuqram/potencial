const predictButton = document.getElementById('predictButton');
const predictionsDiv = document.getElementById('predictions');

predictButton.addEventListener('click', async () => {
    const edadActual = document.getElementById('edad_actual').value;
    const potencialActual = document.getElementById('potencial_actual').value;
    const edadFutura = document.getElementById('edad_futura').value;

    const response = await fetch('https://apipotencial-aecee55076f9.herokuapp.com/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            edad_actual: parseInt(edadActual),
            potencial_actual: parseInt(potencialActual),
            edad_futura: parseInt(edadFutura)
        })
    });

    const data = await response.json();

    predictionsDiv.innerHTML = `
        <ul>
            <li>Potencial estimado: ${data.prediccion}</li>
        </ul>
    `;
});

