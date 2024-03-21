var valor = 'negro'
function cambiarTema(){
    var seccion = document.getElementById("principal")
    var cantidad = seccion.getElementsByTagName("article")
    if(valor=="blanco"){
        document.body.style.backgroundColor = '#1E1E1E'
        for(var i=0; i<cantidad.length; i++){
            var titulo = cantidad[i].getElementsByTagName("h1")
            var desc = cantidad[i].getElementsByTagName("p")
            titulo[0].style.color = 'white'
            desc[0].style.color = 'white'
            desc[1].style.color = 'white'
        }
        valor ='negro'
    }else if(valor=="negro"){
       document.body.style.backgroundColor = 'white' 
       for(var i=0; i<cantidad.length; i++){
        var titulo = cantidad[i].getElementsByTagName("h1")
        var desc = cantidad[i].getElementsByTagName("p")
        titulo[0].style.color = 'black'
        desc[0].style.color = 'black'
        desc[1].style.color = 'black'
        }
       valor ='blanco'
    }
    localStorage.setItem('tema', valor);
}

function validarTema(){
    var temaGuardado = localStorage.getItem('tema')
    var seccion = document.getElementById("principal")
    var cantidad = seccion.getElementsByTagName("article")
    if(temaGuardado=="negro"){
        document.body.style.backgroundColor = '#1E1E1E'
        for(var i=0; i<cantidad.length; i++){
            var titulo = cantidad[i].getElementsByTagName("h1")
            var desc = cantidad[i].getElementsByTagName("p")
            titulo[0].style.color = 'white'
            desc[0].style.color = 'white'
            desc[1].style.color = 'white'
        }
    }else if(temaGuardado=="blanco"){
       document.body.style.backgroundColor = 'white' 
       for(var i=0; i<cantidad.length; i++){
        var titulo = cantidad[i].getElementsByTagName("h1")
        var desc = cantidad[i].getElementsByTagName("p")
        titulo[0].style.color = 'black'
        desc[0].style.color = 'black'
        desc[1].style.color = 'black'
        }
    }
}

function cambiarTema2(){
    var but = document.getElementsByClassName("tema")
    var titulo = document.getElementsByTagName("h1")
    var t1 = document.getElementsByTagName("h1")
    var t2 = document.getElementsByTagName("h2")
    var parrafo = document.getElementsByTagName("p")
    if(valor=="blanco"){
        document.body.style.backgroundColor = '#1E1E1E'
        valor="negro"
        t1[0].style.color = 'white'
        t2[1].style.color = 'white'
        parrafo[0].style.color = 'white'
        titulo[0].style.color = 'white' 
        valor="negro"
    }else if(valor=="negro"){
        document.body.style.backgroundColor = 'white'
        t1[0].style.color = 'black'
        t2[1].style.color = 'black'
        parrafo[0].style.color = 'black'
        titulo[0].style.color = 'black'
        valor="blanco"
    }
    localStorage.setItem('tema', valor);
}

function validarTema2(){
    var temaGuardado = localStorage.getItem('tema')
    var titulo = document.getElementsByTagName("h1")
    var t1 = document.getElementsByTagName("h1")
    var t2 = document.getElementsByTagName("h2")
    var parrafo = document.getElementsByTagName("p")
    if(temaGuardado=="negro"){
        document.body.style.backgroundColor = '#1E1E1E'
        t1[0].style.color = 'white'
        t2[1].style.color = 'white'
        parrafo[0].style.color = 'white'
        titulo[0].style.color = 'white' 
    }else if(temaGuardado=="blanco"){
        document.body.style.backgroundColor = 'white'
        t1[0].style.color = 'black'
        t2[1].style.color = 'black'
        parrafo[0].style.color = 'black'
        titulo[0].style.color = 'black'
    }
}

function enseñarTodo(){
    var contenedor = document.getElementsByTagName("article")
    for(var i=5; i<contenedor.length; i++){
        document.getElementById("ense").style.display = 'none'
        contenedor[i].style.display = 'block'
    }
}

function carrusel(element) {
    const images = element.getElementsByTagName('img');
    let currentIndex = images.length-1;
    images[currentIndex].style.opacity = 1;
  
    interval = setInterval(() => {
      images[currentIndex].style.opacity = 0;
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.opacity = 1;
    }, 1500); // Cambiar imagen cada 2 segundos
  
    element.addEventListener('mouseleave', () => {
      clearInterval(interval);
    });
}

function stopCarousel() {
    clearInterval(interval);
}

function formulario(){
    var email = document.getElementById('email');
    if ("^[A-Za-z0-9.-_]+@[a-zA-Z0-9.-_]+\.[A-Za-z]".test(email)) {
        alert("Se ha enviado el correo correctamente");
    }else{
        alert("El email no es correcto")
    }
}

function AgregarComentarios(){
    var contenedor = document.getElementById('comment-section')
    var nombre = document.getElementById('nombre2').value
    var comentario = document.getElementById('comentario').value
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('comentario', comentario)
    var nuevoComentario = document.createElement('div');
    nuevoComentario.textContent = nombre + ': ' + comentario; 
    contenedor.appendChild(nuevoComentario);
    alert("Gracias por tu comentario!")
}