const inputItem = document.getElementById("input-item");

const ListaDeCompras = document.getElementById("lista-de-compras");

const botaoAdicionar = document.getElementById("adicionar-item");

let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    if (inputItem.value === ""){
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);

    ListaDeCompras.appendChild(itemDaLista);


})
