// let post_url = "https://masai-api-mocker.herokuapp.com/"
// let end_point = `/auth/register`




let register = async () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let username = document.getElementById('username').value;
        let mobile = document.getElementById('mobile').value;
        let description = document.getElementById('description').value;  

    let formData = {
       name,
       email,
       password,
       username,
       mobile,
       description
    }
    console.log(formData);

    
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
            method: 'POST',
            body : JSON.stringify(formData) ,
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        let data = await res.json()
        console.log(data);

    
   
}

document.getElementById("Signupindegogo").addEventListener("click", register)

document.getElementById('password').addEventListener('click', function () {
    
    document.getElementById('warn').innerText = 'Password must be six characters long'
})