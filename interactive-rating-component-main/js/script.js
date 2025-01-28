const botao = document.getElementById("enviar");
const numeros = document.querySelectorAll(".num");
const valortext = document.getElementById("valor")

function pagina2(){
   window.location.href = "./html/pagethankyou.html";
}

numeros.forEach(numero => {
    numero.addEventListener("click", () => {
        numeros.forEach(num => num.classList.remove('clicado'));
        numero.classList.add('clicado');

        const valortg = numero.getAttribute("data-value");
        valortext.textContent = valortg;
    });
});

botao.addEventListener("click", () => {
    pagina2()
    
    
})


