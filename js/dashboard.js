import { GetDash } from "../Services/DashboardService.js";

let access_token= localStorage.getItem('access_token');
if (!access_token){
    window.location.replace('/login.html');
}
else{
    GetDash(access_token)
}
