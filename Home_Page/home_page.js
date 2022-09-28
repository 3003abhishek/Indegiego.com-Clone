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