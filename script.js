
let main= document.createElement("h1");
main.innerText="10";
document.body.append(main);

setTimeout(()=>{main.innerHTML="9"},1000);
setTimeout(()=>{main.innerHTML="8"},2000);
setTimeout(()=>{main.innerHTML="7"},3000);
setTimeout(()=>{main.innerHTML="6"},4000);
setTimeout(()=>{main.innerHTML="5"},5000);
setTimeout(()=>{main.innerHTML="4"},6000);
setTimeout(()=>{main.innerHTML="3"},7000);

setTimeout(()=>{main.innerHTML="2"},8000);
setTimeout(()=>{main.innerHTML="1"},9000);
setTimeout(()=>{var value =main.innerHTML="Happy Independance Day"},10000);

