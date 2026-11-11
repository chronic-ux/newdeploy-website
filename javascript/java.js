 const kirachi = document.getElementById("kirachi")
// const mashati = document.getElementById("mashati")
// const kilamacho = document.getElementById("kilamacho")
// const kisale = document.getElementById("kisale")
// const mraokeryo = document.getElementById("mraokeryo")
// const kiraeni = document.getElementById("kiraeni")
// const olele = document.getElementById("olele")
// const maki = document.getElementById("maki")

const MyBox = document.getElementById("MyBox");
const prompts = document.getElementById("prompts");
const SuBmit = document.getElementById("submit-Btn");
const msg = document.getElementById("H1");
const maelekezo = document.getElementById("inst");

prompts.style.display = "none";

const schools = document.querySelectorAll(".schools")
for(let school of schools ){
    school.addEventListener("mouseover", event=>{
        event.target.style.color = "black";
       
    })

    school.addEventListener("mouseout", event=>{
        event.target.style.color = "white";

    school.addEventListener("click", event=>{
        maelekezo.textContent = "Ingiza taarifa zako kwa usahihi......"
        MyBox.style.display = "none";
        prompts.style.display = "block";

    })
       

    })
}

SuBmit.addEventListener("click",event=>{
        maelekezo.textContent = "Ingiza taarifa zako kwa usahihi......"
        MyBox.style.display = "block";
        prompts.style.display = "none";
        msg.textContent = "THANKS FOR YOUR SUBMITTION!"
        msg.style.color = "red";
        window.alert("Submitted");

        setTimeout(()=>{
            msg.style.color = "black";
            msg.textContent = "UTHIBITISHO WA WALIMU SHULE ZA SEKONDARI TARAFA YA MASHATI"


        },3000)




})






