const botao = document.getElementById("enviar");
const numeros = document.querySelectorAll(".num");
let lastnumber = null


function pagina2(){
   window.location.href = "./html/pagethankyou.html";
}

numeros.forEach(numero => {
    numero.addEventListener("click", () => {
        numero.classList.toggle("clicado");
        lastnumber.classList.remove("clicado")
    });
});


botao.addEventListener("click", () => {
    pagina2()
    
})


