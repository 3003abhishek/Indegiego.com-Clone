// console.log("i am here!")
 

let indiegogoUsers = JSON.parse(localStorage.getItem("indiegogoList"))||[] ;
let saveForm = (event)=>{

    event.preventDefault();
    let candidate = document.getElementById("radio_field").value;

    let country  = document.getElementById("country").value;

    let bank =  document.getElementById("bank").value;

    let formData = {candidate, country, bank};

    indiegogoUsers.push(formData);

    localStorage.setItem("indiegogoList",JSON.stringify(indiegogoUsers));

    if(!candidate){
        alert("To start a campaign fill the required feild")
    }

    if(!bank){
        alert("Please select bank option to continue");
    }else{

        alert("Welcome! You can start a campaign now..")

    }


    window.location.reload();


    

}


let btn = document.getElementById("submitBtn");

btn.addEventListener("click",saveForm)