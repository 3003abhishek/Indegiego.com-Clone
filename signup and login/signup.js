// // let post_url = "https://masai-api-mocker.herokuapp.com/"
// // let end_point = `/auth/register`




// let register = async () => {
//         let name = document.getElementById('name').value;
//         let email = document.getElementById('email').value;
//         let password = document.getElementById('password').value;
//         let username = document.getElementById('username').value;
//         let mobile = document.getElementById('mobile').value;
//         let description = document.getElementById('description').value;  

//     let formData = {
//        name,
//        email,
//        password,
//        username,
//        mobile,
//        description
//     }
//     console.log(formData);

    
//         let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
//             method: 'POST',
//             body : JSON.stringify(formData) ,
//             mode: "no-cors",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });

//         let data = await res.json()
//         console.log(data);

    
   
// }



// document.getElementById('password').addEventListener('click', function () {
    
//     document.getElementById('warn').innerText = 'Password must be six characters long'
// })


// let user=JSON.parse(localStorage.getItem("users"))||[];

class User{
    constructor(n,e,p,u,m,d){
        this.name=n;
        this.email=e;
        this.password=p;
        this.username=u;
        this.mobile=m;
        this.description=d
        
    //     /
    }
    signUp(){
        if(this.check()==true){
            alert("Sigup successful");
          let users= JSON.parse(localStorage.getItem("users"))||[];
           users.push(this);
           console.log(users);
           localStorage.setItem("users",JSON.stringify(users));

           location.href="./login.html"
        }
        else{
            alert("user already exist");
        }
    }

    check(){
        let users=JSON.parse(localStorage.getItem("users"))||[];
        
        for(let user1 of users){
            if(user1.email==this.email){
                return false;
            }
        }
        
        return true;
    }



 }

 let register = () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let username = document.getElementById('username').value;
        let mobile = document.getElementById('mobile').value;
        let description = document.getElementById('description').value;  

        // let user=new User(name,email,password,username,mobile,description);
        // user.signUp();

    if(password=="" || email == '' ||name == "" ){
        alert("All Details are required")
        
    }else if(password.length<6){
        document.getElementById('warn').innerText = 'Password must be six characters long'
        document.getElementById('warn').style.color="red"
    } else{
        data=new User(name,email,password,username,mobile,description);
       
       
        let user=new User(name,email,password,username,mobile,description);
        user.signUp();
    }
   

   
   
    // if(password=="" || email == '' ||name == "" ){
    //     alert("All Details are required")
        
    // }else if(password.length<6){
    //     document.getElementById('warn').innerText = 'Password must be six characters long'
    //     document.getElementById('warn').style.color="red"
    // } else{
    //     data=new User(name,email,password,username,mobile,description);
       
    //     user.push(data)
    //     localStorage.setItem("users",JSON.stringify(user));
    //     alert("Signup successfull!!")
    //     location.href="./login.html"
    // }

 }

//  document.getElementById("Signupindegogo").addEventListener("click", register)