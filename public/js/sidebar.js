// Get the container element
const sideBar = document.querySelector('#mySidebar');

fetch('/public/Components/Sidebar/sidebar.html')
    .then(res => res.text())
    .then(data => {
        sideBar.innerHTML = data
    })

function Logout(){
    localStorage.clear()
    window.location.replace('/public/login.html');
}