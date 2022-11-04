let best_sellers = JSON.parse(localStorage.getItem('dashboard')).bestsellers;

    let table = "";

    for (var i in best_sellers) {
        table += "<tr>";
        table += "<td>"
            + best_sellers[i].product.name + "</td>"
            + "<td>" + (best_sellers[i].revenue/best_sellers[i].units) + "</td>"
            + "<td>" + best_sellers[i].units + "</td>"
            + "<td>" + best_sellers[i].revenue + "</td>";
        table += "</tr>";
    }

    document.getElementById("result").innerHTML = table;

