let contenido = document.querySelectorAll(".container-perfiles")

for(let i=0; i < contenido.length;i++){
    contenido[i].addEventListener("mouseover",() => {
        contenido[i].children[0].children[1].children[0].children[0].children[0].style.opacity=0
        contenido[i].children[0].children[1].children[0].children[0].children[1].style.opacity=0

        contenido[i].children[0].children[1].children[0].children[1].style.opacity=1
    })
}   

for(let i=0; i < contenido.length;i++){
    contenido[i].addEventListener("mouseout",() => {
        contenido[i].children[0].children[1].children[0].children[0].children[0].style.opacity=1
        contenido[i].children[0].children[1].children[0].children[0].children[1].style.opacity=1

        contenido[i].children[0].children[1].children[0].children[1].style.opacity=0
    })
} 

contenido[i].children[0].children[1].children[0].children