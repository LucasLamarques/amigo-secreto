let listaDeAmigos = [];

function adicionar() {
    let amigo = document.querySelector('#nome-amigo');

    if (listaDeAmigos.includes(amigo.value)) {
        alert(`O nome que você colocou foi ${amigo.value}, não pode ser o mesmo.`)
        return
    }

    if (amigo.value == '') {
        alert('Informe o nome. ');
        return;
    }

    let lista = document.querySelector('#lista-amigos');
    listaDeAmigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + `, ${amigo.value}`;
    }

    amigo.value = '';
}

function sortear() {
    embaralhar(listaDeAmigos);
    let sorteio = document.querySelector('#lista-sorteio');

    if (listaDeAmigos.length <= 3) {
        alert('Número de participantes inválido.');
        return;
    }

    for (let i = 0; i < listaDeAmigos.length; i++ ) {

        if (i == listaDeAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[i] + ' --> ' + listaDeAmigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[i] + ' --> ' + listaDeAmigos[i + 1] + '<br>';
        }
        
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaDeAmigos = [];
    document.querySelector('#lista-amigos').innerHTML = '';
    document.querySelector('#lista-sorteio').innerHTML = '';
}
