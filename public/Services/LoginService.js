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
            if (response.status==401){
                return response.json()
            }
        })
        .then((data)=>{
            if(data.access_token){
                StoreToken(data)
                window.location.href='/public/index.html';
            }
            else{
                let error= document.getElementById('loginError');
                error.classList.add('errorClass');
                error.textContent=data.msg
            }
            
        })
        .catch((error) => {
            console.error(error)
        });

}