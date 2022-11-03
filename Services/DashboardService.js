let dashboard_api = 'https://freddy.codesubmit.io/dashboard'

const StoreDashBoard = (data) => {
    localStorage.setItem('dashboard',JSON.stringify(data.dashboard))
    
}
export const GetDash = (access_token) => {
    fetch(dashboard_api, {
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
            StoreDashBoard(data)
        })
        .catch((error) => {
            console.error(error)
        });

}