document.addEventListener("DOMContentLoaded", function () {
    getCollection();
});

let colec;
let itemCollec;


function getCollection() {
    let target = document.getElementById("table");

    colec = localStorage.getItem("colec");

    if (colec) {
        itemCollec = JSON.parse(colec);
    }

    for (let i=0; i<itemCollec.length; i++) {
        target.innerHTML += "<tr class='table-tr'><td><img class='table-image' src='" + itemCollec[i].image + "'></img></td><div><td class='items-info'><div>" + itemCollec[i].nombre + "</div><div>" + itemCollec[i].descripcion + "</div></td><td class='cantidad'>" + itemCollec[i].cantidad + "</td></tr>";
    }
}