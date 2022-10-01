let text = [
    "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664295391/tx8bsjtd4rtk3rwx9uiw.jpg",
    "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664295495/wxv8xstvbju5gkjjplbs.jpg",
    "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1664298780/rik4figygisjo2nzoqq3.jpg",
    "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1663866576/rcmaygmarbmseoccwmt1.jpg"
];


let id;
let i=0;
let sider = ()=>{

    let container = document.getElementById('top_slider');

    id = setInterval(()=>{   
        if(i===text.length){
            i=0;
        }    
        let image = document.createElement('img');
        image.src = text[i];
        container.innerHTML = "";
        container.append(image);
        i++;
    },3000)
};

sider();


let previous = ()=>{
    let container = document.getElementById('top_slider');    
    if(i===0){
        i=text.length-1;
    }    
    let image = document.createElement('img');
    image.src = text[i];
    container.innerHTML = "";
    container.append(image);
    i--;
}

let next = ()=>{
    let container = document.getElementById('top_slider');    
    if(i===text.length){
        i=0;
    }    
    let image = document.createElement('img');
    image.src = text[i];
    container.innerHTML = "";
    container.append(image);
    i++;
}


let url = "https://daily-wound-486.herokuapp.com/api/popular_projects";
let page = 1;

let getData = async()=>{
    let res = await fetch(`${url}?_page=${page}&_limit=4`);
    let data = await res.json();    
    append(data);
}

getData();

let append = (data)=>{
    document.getElementById('populer_project_container').innerHTML = "";
    data.forEach(({image,funding,title,descriptoin,price,purpose})=>{
        let div = document.createElement('div');        
        let img = document.createElement('img');
        img.src = image;
        let Title = document.createElement('h3');
        Title.innerText =title
        let Funding = document.createElement('p');
        Funding.innerText = funding
        let Descriptoin = document.createElement('p');
        Descriptoin.innerText = descriptoin
        let Price = document.createElement('h4');
        Price.innerText = `$${price} usd raised`;
        let Purpose = document.createElement('p');
        Purpose.innerText = purpose;
        div.append(img,Funding,Title,Descriptoin,Purpose,Price);
        document.getElementById('populer_project_container').append(div);
    })
}

let before = ()=>{
    if(page===1){
        return;
    }
    page--;
    getData();
}

let after = ()=>{
    if(page===3){
        return;
    }
    page++;
    getData();
}