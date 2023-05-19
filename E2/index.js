const arrTable = [
    [
        {
            pais: 'Argentina',
            puntaje: (Math.random() * 1000).toFixed()
        },
        {
            pais: 'Brasil',
            puntaje: (Math.random() * 1000).toFixed()
        },
        {
            pais: 'Peru',
            puntaje: (Math.random() * 1000).toFixed()
        },
        {
            pais: 'Ecuador',
            puntaje: (Math.random() * 1000).toFixed()
        },
        {
            pais: 'Colombia',
            puntaje: (Math.random() * 1000).toFixed()
        }
    ]
]

let arr;

const tbody = document.getElementById('table-body');
init();

function init() {
    const arr = arrTable[0].map( (element) =>{
        return (`
                <tr>
                    <td>${element.pais}</td>
                    <td>${element.puntaje}</td>
                </tr>
        `)
    });
    
    arr.forEach( (element) => {
        tbody.innerHTML += element;
    });
}

const btnAñadirFila = document.getElementById('añadir-fila');
btnAñadirFila.addEventListener('click', () => {
    tbody.innerHTML += `
        <tr>
            <td contenteditable></td>
            <td contenteditable></td>
        </tr>
    `
})

const btnReset = document.getElementById('reset');
btnReset.addEventListener('click', () => {
    tbody.innerHTML = '';
    init();
})

const btnGuardar = document.getElementById('guardar');
btnGuardar.addEventListener('click', () => {
    console.log(Array.from(tbody.children));
});