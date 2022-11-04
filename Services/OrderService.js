let order_api = 'https://freddy.codesubmit.io/orders'
const StoreOrder = (data) => {
    localStorage.setItem('orders',JSON.stringify(data.orders));
}

export const GetOrders = (access_token,page,q) => {
    let url = order_api + '?page=' + page + '&q='+q;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Authorization':'Bearer ' + access_token
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data)=>{
            StoreOrder(data)
            window.location.reload()
        })
        .catch((error) => {
            console.error(error)
        });

}