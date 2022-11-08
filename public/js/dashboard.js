import { GetDash } from "../Services/DashboardService.js";
//init
let access_token= localStorage.getItem('access_token');

//config //render
if (!access_token){
    window.location.replace('/public/login.html');
}
else{
    GetDash(access_token)
}
