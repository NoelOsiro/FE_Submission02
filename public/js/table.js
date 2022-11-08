//init

let best_sellers = JSON.parse(localStorage.getItem('dashboard')).bestsellers;
let table = "";

//config

best_sellers.sort(function (a, b) {
    return b.units - a.units
})

for (var i in best_sellers.slice(0, 3)) {
    table += "<tr>";
    table += "<td>"
        + best_sellers[i].product.name + "</td>"
        + "<td>" + (best_sellers[i].revenue / best_sellers[i].units) + "</td>"
        + "<td>" + best_sellers[i].units + "</td>"
        + "<td>" + best_sellers[i].revenue + "</td>";
    table += "</tr>";
}

//render
document.getElementById("result").innerHTML = table;

