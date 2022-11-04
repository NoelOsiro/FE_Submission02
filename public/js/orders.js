import {GetOrders} from '../../Services/OrderService.js';
// Get the input field
let input = document.getElementById("myInput");
let access_token= localStorage.getItem('access_token');
if (!access_token){
    window.location.replace('/public/login.html');
}
else{
    input.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          event.preventDefault();
          const data ={
              'q':input.value
          }
          GetOrders(access_token,1,input.value)
        }
      });
}
