let listaDestinacija=document.getElementById("lista-destinacija");
console.log(listaDestinacija);
let naslov=document.getElementsByClassName("title");
console.log(naslov);
let element=document.getElementsByTagName("li");
console.log(element);

let wrap=document.querySelector("#wrapper");
console.log(wrap);

let destinacije=document.querySelectorAll("#lista-destinacija li .naziv");
console.log(destinacije);

console.log("roditeljski cvor:",listaDestinacija.parentNode);
console.log("deca: ",listaDestinacija.children);

console.log("sibling is",listaDestinacija.nextElementSibling); 
console.log("sibling is",listaDestinacija.nextSibling);


console.log("previous element is",listaDestinacija.previousElementSibling); 
console.log("previous element is",listaDestinacija.previousSibling); 

let baner=document.querySelector("#page-banner");
console.log("page banner node name:", baner.nodeName);
console.log("page banner node type:", baner.nodeType);
console.log("page banner node value:", baner.nodeValue);
let elliste=document.querySelector("li");
console.log("value je:",elliste.nodeType);

let forma=document.querySelector("input");
console.log("value je:",forma.nodeValue);

console.log("da li ima decu:",baner.hasChildNodes());

let destinacije1=document.querySelector("#lista-destinacija li .naziv");

destinacije1.textContent="grad svetlosti";

var dugmici=document.querySelectorAll(".obrisi");
Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click",function(e){
        const li=e.target.parentNode;
        li.parentNode.removeChild(li);
    })
})

let forme=document.forms;
console.log(forme);
let forma1=document.forms["dodaj-destinaciju"];
forma1.addEventListener("submit",function(e){
    e.preventDefault();
    let vrednost=forma1.querySelector('input[type="text"]').value;
    console.log(vrednost);
})

