//Init
let orders = JSON.parse(localStorage.getItem('orders'));
const myTable = document.getElementById("result");

//config
for (let order of orders) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = order.product.name;
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.textContent = new Date(order.created_at).toDateString();
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    td3.textContent = Math.round(order.total/order.product.quantity);
    tr.appendChild(td3);
    let td4 = document.createElement('td');
    td4.textContent = order.status;
    tr.appendChild(td4); 

    //render  
    if (td4.textContent==='delivered'){
        td4.classList.add('green')
    }
    if (td4.textContent==='processing'){
        td4.classList.add('red')
    }
    if (td4.textContent==='shipped'){
        td4.classList.add('normal')
    }
    myTable.appendChild(tr); 
}


