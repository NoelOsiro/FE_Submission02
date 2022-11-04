let orders = JSON.parse(localStorage.getItem('orders'));


let table = "";

for (var i in orders) {
    table += "<tr>";
    table += "<td>"
        + orders[i].product.name + "</td>"
        + "<td>" + orders[i].created_at+ "</td>"
        + "<td>" + (orders[i].total/orders[i].product.quantity) + "</td>"
        + "<td>" + orders[i].status + "</td>";
    table += "</tr>";
}

document.getElementById("Orderresult").innerHTML = table;

