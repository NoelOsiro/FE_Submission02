let login_api='https://cors-anywhere.herokuapp.com/https://freddy.codesubmit.io/login/'
export const Login = async (formData)=>{
    fetch( login_api,
        {
            method: 'POST',
            headers: {'Origin': 'https://freddy.codesubmit.io/login'},
            body: JSON.stringify(formData)
        })
        .then((result) => {
            if (result.status != 200) { 
                let errElement = document.getElementById("loginError");
                let text = document.createTextNode("Bad Server Response");
                errElement.appendChild(text);
            }
            if (result.status == 403) { 
                let errElement = document.getElementById("loginError");
                let text = document.createTextNode("Forbidden");
                errElement.appendChild(text);
            }
          })
        .then((response) => {
            return response;
          })
        .catch((error) => { 
            let errElement = document.getElementById("loginError");
            let text = document.createTextNode("Good Seerver");
            errElement.appendChild(text); });
}