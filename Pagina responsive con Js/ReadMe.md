Explicación funciones Javascript


El icono blanco y negro tiene una función onclick para cambiar el tema de oscuro a claro y viceversa.

Fuera de la función recibe el valor del tema con un valor por defecto, cuando le das a la imagen cambia el color del body y coge los nodos de la página y lo cambia dependiendo del valor.

Hay una función para la página principal y otra para el resto de páginas ya que tienen una estructura distinta.

Todas las páginas también tienen una función onload en el body para validar el color del tema, es decir si en la principal cambias el tema se te cambia en el resto de las páginas, y si la cambias en otra página también se te guarda si la cambias en otra página.

En la página principal salen la mitad de hoteles, la otra mitad salen cuando le das click al texto de ver más. Este coge todos los artículos, que es donde se encuentran las tarjetas de los hoteles, y muestra las están ocultas y se oculta el texto.

Las tarjetas de los hoteles tienen una función onmouseover que hace un carrusel mientras este el mouse encima, este envía como parámetro en qué artículo se tiene que hacer el carrusel mediante el this. La función va cambiando la opacidad de las imágenes según el índice actual con un intervalo de 1,5 segundos con la función de setInterval.

En el formulario de contacto tengo un validador de correo electrónico con una expresión regular y en el propio formulario tengo que la longitud mínima del nombre sea de 3 y la máxima de 20.

Para agregar un comentario hay una función onclick que coje el nombre, el comentario y el div donde se agregan los comentarios. Con localStorage agrego el nombre y el comentario al div y sale un alert dando las gracias por el comentario.
