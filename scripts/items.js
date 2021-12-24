//array items
import { itemNormal } from './mock-items.js';
import { itemBuena } from './mock-items.js';
import { itemMuyBuena } from './mock-items.js';
import { itemMuuuyBuena } from './mock-items.js';
import { itemGenial } from './mock-items.js';
import { itemPerfecta } from './mock-items.js';

let randPerc = 0;
let itemCollec;

document.addEventListener("DOMContentLoaded", function () {
    getItem();
});

function getItem() {

    fetchColeccion();

    randPerc = Math.floor(Math.random() * 100) + 1;

    console.log('randperc: ' + randPerc);
    if (randPerc < 40 && randPerc > 0) {
        let num = Math.floor(Math.random() * itemNormal.length);
        agregarCollec(itemNormal[num]);
    } else if (randPerc < 70 && randPerc > 40) {
        let num = Math.floor(Math.random() * itemBuena.length);
        agregarCollec(itemBuena[num]);
    } else if (randPerc < 80 && randPerc > 70) {
        let num = Math.floor(Math.random() * itemMuyBuena.length);
        agregarCollec(itemMuyBuena[num]);
    } else if (randPerc < 90 && randPerc > 80) {
        let num = Math.floor(Math.random() * itemMuuuyBuena.length);
        agregarCollec(itemMuuuyBuena[num]);
    } else if (randPerc < 97 && randPerc > 90) {
        let num = Math.floor(Math.random() * itemGenial.length);
        agregarCollec(itemGenial[num]);
    } else if (randPerc < 100 && randPerc > 97) {
        let num = Math.floor(Math.random() * itemPerfecta.length);
        agregarCollec(itemPerfecta[num]);
    } else {
        agregarCollec(itemNormal[0]);
    }
}

function agregarCollec(item) {
    document.getElementById("nombre").innerHTML = item.nombre;
    document.getElementById("foto").setAttribute('src', item.image);

    let flag = false;
    if (itemCollec.length === 0) {
        itemCollec.push(item);
    } else {
        for (let i in itemCollec) {
            if (itemCollec[i].nombre == item.nombre) {
                flag = true;
                itemCollec[i].cantidad += 1;
            }
        }

        if (flag == false) {
            itemCollec.push(item);
        }
    }
    localStorage.setItem("colec", JSON.stringify(itemCollec));
}

function fetchColeccion() {
    let colec = localStorage.getItem("colec");

    if (colec) {
        itemCollec = JSON.parse(colec);
    } else {
        itemCollec = [];
    }
}

document.querySelector(".sparks").addEventListener("animationend", function (e) {
    party.sparkles(this);
});
