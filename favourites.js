let getData=async()=>{
    let res=await fetch("http://localhost:3000/api/products") ;
    let data=await res.json();
    // console.log(data);
    append(data);
}

let append=(data)=>{
    let container=document.getElementById("container");
    container.innerHTML=null;
    data.forEach(({image,funding,title,descripion,funding_raised,type})=>{

        // console.log(descripion);
        let div=document.createElement("div");
        div.className="product";
        let i=document.createElement("img");
        i.src=image;
        let f=document.createElement("h4");
        f.innerText=funding;
        let t=document.createElement("h3");
        t.innerText=title;
        let desc=document.createElement("p");
        desc.innerText=descripion;
        ty=document.createElement("h4");
        ty.innerText=type;
        let fraised=document.createElement("p");
        fraised.innerText=funding_raised;
        div.append(i,f,t,desc,ty,fraised);
        container.append(div);

    })
}


let getCategories=async()=>{
  let res=await fetch("http://localhost:3000/api/categories");
  let  data=await res.json();
  console.log(data);
  render(data);
}



let render=(data)=>{
    let container=document.getElementById("container2");
    container.innerHTML=null;
    data.forEach(({image,title,campaign})=>{
        let div=document.createElement('div');
        div.className="category"
        let i=document.createElement("img");
        i.src=image;
        i.className="cat_image";
        let t=document.createElement("h1");
        t.innerText=title;
        t.className="cat_tit";
        let c=document.createElement("h3");
        c.innerText=campaign;
        c.className="cat_cam"
        div.append(i,t,c);
        container.append(div);
    })
    
}

getCategories();




getData();