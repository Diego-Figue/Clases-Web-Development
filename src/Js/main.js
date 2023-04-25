//imports de data y nodos
import { contenedor } from "./nodes.js";
import { dataProducts } from "../utils/data.js";

const mappingData = (data) => {
  return data.map(
    (item) =>
      `
    <div class="card">

        <figure class="content__image">
            <img class="image" src="${item.imageProduct}" alt="">
        </figure>
        <h2 class="title__product">${item.title}</h2>
        <p class="description">${item.description}</p>

        <p class="price">$${item.price} USD</p>

        <p class="points">${item.points}</p>

        <a href="" class="buy">Comprar Ahora</a>

    </div>
    `
  );
};

const insertDOM = () =>{
    const template = mappingData(dataProducts);
    console.log(template);

    return contenedor.innerHTML = template.join(' ');
};

insertDOM();
