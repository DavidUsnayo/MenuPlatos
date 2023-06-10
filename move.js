let circle = document.querySelector(".circle")
let o = document.querySelector(".o")
let h1 = document.querySelector(".h1")
let h3 = document.querySelector(".h3")
let p = document.querySelector(".p")
let dos = document.querySelector(".dos_1")              //QUIZA TODO LA INFO DEBERIA DESAPARECER Y LUEGO APARECER 

//llamando a la discripcion de los productos 
let disc = document.querySelector(".discripcion")
let title = document.querySelector(".title")
let subtitle = document.querySelector(".subtitle")
let texto = document.querySelector(".texto")
let num = document.querySelector(".num")
let pun = document.querySelector(".punto_1")

//son objetos y contiene la informacion de los productos 
let info_1 = {titulo:"Salteado Carnes", 
              subtitulo:"carnes que combina lo mejor",
              parrafo:"Una combinación perfecta de cortes de carne tiernos y jugosos, como trozos de filete de res y pechuga de pollo, cuidadosamente salteados."}
let info_2 = {titulo:"Caprese", 
              subtitulo:"Ensaladas vibrantes",
              parrafo:"Nuestros platos de pasta te deleitarán con una combinación de tomates frescos, hierbas aromáticas y vegetales salteados."}
let info_3 = {titulo:"Browl Pollo",
              subtitulo:"Equilibrada de Sabores", 
              parrafo:"Sumérgete en la deliciosa frescura de un bowl de pollo. Este plato te ofrece una combinación perfecta de sabores que deleitarán tus sentidos."}
let info_4 = {titulo:"Filete de Res",
              subtitulo:"Un corte de carne tierno y jugoso",
              parrafo:"Descubre el deleite de un filete de res perfectamente cocinado. Este exquisito corte de carne ofrece una explosión de sabores."}

let uno = document.querySelector(".one")
uno.addEventListener("click",function(){
    circle.style.transform="rotate(0deg)"
    pun.style.background="#fad928"
    num.textContent = "4.9"
    h3.textContent = "SALTEADO"
    h1.textContent = "CARNES"
    title.textContent = info_1.titulo
    subtitle.textContent = info_1.subtitulo
    texto.textContent = info_1.parrafo
})
let two = document.querySelector(".two")
two.addEventListener("click",function(){
    circle.style.transform="rotate(90deg)"
    pun.style.background="#32c2b9"
    num.textContent = "4.1"
    h3.textContent = "ENZALADA"
    h1.textContent = "CAPRESE"
    title.textContent = info_2.titulo
    subtitle.textContent = info_2.subtitulo
    texto.textContent = info_2.parrafo
})
let three = document.querySelector(".three")
three.addEventListener("click",function(){
    circle.style.transform="rotate(180deg)"
    pun.style.background="#ff9915"
    num.textContent = "4.3"
    h3.textContent = "BOWL"
    h1.textContent = "POLLOS"
    title.textContent = info_3.titulo
    subtitle.textContent = info_3.subtitulo
    texto.textContent = info_3.parrafo
})

let four = document.querySelector(".four")
four.addEventListener("click",function(){
    circle.style.transform="rotate(270deg)"
    pun.style.background="pink"
    num.textContent = "3.7"
    h3.textContent = "RES"
    h1.textContent = "FILETE"
    title.textContent = info_4.titulo
    subtitle.textContent = info_4.subtitulo
    texto.textContent = info_4.parrafo
})

//es para animar el LIKE
let si = document.querySelector(".si")
si.addEventListener("click",function(){
    si.classList.toggle("animate__bounce")
})

//son los cuadros de abajo de los platillos 
let mov = document.querySelectorAll(".mov")
mov.forEach(function(e){
e.addEventListener("click",function(){
    e.classList.toggle("animate__pulse")
    o.classList.toggle("ni")
    p.classList.toggle("ni")
    h3.classList.toggle("ni")
    disc.classList.toggle("a")
})
})