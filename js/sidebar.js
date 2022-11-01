const sideBar= document.querySelector('#mySidebar');
fetch('/Components/Sidebar/sidebar.html')
.then(res=>res.text())
.then(data=>{
    sideBar.innerHTML=data
})