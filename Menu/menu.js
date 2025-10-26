let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");
let f = document.getElementById("f");

function Changeimage(fimage,simage,timage,ftion,stion,ttion){
    a.src = fimage;
    b.src = simage;
    c.src = timage;
    d.innerHTML =ftion;
    e.innerHTML =stion;
    f.innerHTML =ttion;
}