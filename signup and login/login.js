let user=JSON.parse(localStorage.getItem("users"))||[];

class User{
    constructor(e,p){
        this.email=e;
        this.password=p
    }


    login(email,password){
        let res=false,count=0;
        user.forEach(element => {

            if(email==element.email && password==element.password){
                res=true;
                count++;
            }
            
        });
        if(res==true && count>0){
            alert("Login successful!")
            // location.href="./index.html"
        }else{
            // alert("Wrong credentials")
            document.getElementById("warn").innerText="Your password or email is incorrect"
        }
    }
}

let data;


let login=()=>{
    // event.preventDefault();
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    data=new User(email,password);
    data.login(email,password);

}

document.getElementById("loginbtn").addEventListener("click", login)