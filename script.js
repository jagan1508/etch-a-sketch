function create(num){
    let ch=container.firstElementChild;
    while(ch){
        container.removeChild(ch);
        ch=container.firstElementChild;
    }
    for(let i=0;i<num*num;i++){
        const ele=document.createElement("div");
        ele.classList.add("item");
        ele.style["height"]=String(600/num)+"px";
        ele.style["width"]=String(600/num)+"px";
        container.appendChild(ele);
        ele.addEventListener("mouseover",()=>{
            ele.style['background-color']='red';
        })
    }
}
const container=document.querySelector(".container");
const btn=document.querySelector("button");
create(16);
btn.addEventListener("click",()=>{
    let num=prompt("Enter number of grids ?","16");
    num=+num;
    if(num<=100 && num>=0){
        create(num);}
    else{
        prompt("Invalid input enter with (0-100)range ");
    }
    
})

