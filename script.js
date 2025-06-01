//desfoque ao rolar a tela
var observer = new IntersectionObserver ((enter) => {
    enter.forEach((ent) => {
        if(ent.isIntersecting){
            ent.target.classList.add("vis")
        } else{
            ent.target.classList.remove("vis")
        }
    })
})

var elemnts = document.querySelectorAll(".Hidden")

elemnts.forEach((element) => observer.observe(element))


//após enivar a mensagem
function msg(){
    var msg = document.getElementById("msg").value.length
    msg == 0 ? alert("[ERRO] Verifique se o campo de texto foi preenchido corretamente.") : alert("Obrigado por deixar sua mensagem!")
}