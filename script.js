let inputDate = document.getElementById('inputDate');
let inputQty = document.getElementById('inputQty');
let inputSubmit = document.getElementById('inputSubmit');

let date;
let qty;

let bibi = {};
let bibiResult = [];
let id = 0;
let tempBibi;
let tempTab = localStorage.getItem('tabBibi');
let recupTab = JSON.parse(tempTab);


window.onload = () => {
    if (recupTab == null) {
        id = 0;
        bibiResult=[];
        localStorage.setItem('tabBibi', JSON.stringify(bibiResult));
    } else {
        id = recupTab.length;
        bibiResult=recupTab;
        for (i = 0; i < bibiResult.length; i++) {
            let tbody = document.getElementById('tbody');
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');

            tbody.appendChild(tr);
            tr.appendChild(td1);
            td1.innerHTML = "<strong>Donné le: </strong>" + recupTab[i].date + " <strong>Quantité: </strong>" + recupTab[i].qty + " ml";
        }
    }
}




    function ajoutBibi() {
        date = document.getElementById('inputDate').value;
        qty = document.getElementById('inputQty').value;

        bibi = { id, date, qty };
        bibiResult[id] = bibi;
        localStorage.setItem('tabBibi', JSON.stringify(bibiResult));

    }

    inputSubmit.addEventListener('click', () => {
        console.log()
        ajoutBibi();

        let tbody = document.getElementById('tbody');
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');


        tbody.appendChild(tr);
        tr.appendChild(td1);
        td1.innerHTML = "<strong>Donné le: </strong>" + bibiResult[id].date + " <strong>Quantité: </strong>" + bibiResult[id].qty + " ml";
        id++;
    })

