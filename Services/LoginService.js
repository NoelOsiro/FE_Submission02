let login_api = 'https://freddy.codesubmit.io/login'

const StoreToken = (data) => {
    localStorage.setItem('access_token',data.access_token)
    localStorage.setItem('refresh_token',data.refresh_token)
}


export const Login = async (formData) => {
    fetch(login_api, {
        method: 'POST',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Authorization'
        },
        body: JSON.stringify(formData)
    })
        .then((response) => {
            if (response.ok) { 
                return response.json()
            }
            if (response.status>=400 && response.status<500){
                window.location.replace('/login.html')
            }
        })
        .then((data)=>{
            StoreToken(data)
            window.location.href='/index.html';
        })
        .catch((error) => {
            console.error(error)
        });

}