# encriptador-de-textos
# Encriptador de Texto

Este proyecto es un encriptador de texto que transforma las letras de un texto ingresado en su equivalente encriptado según las siguientes reglas:

- La letra "e" es convertida en "enter".
- La letra "i" es convertida en "imes".
- La letra "a" es convertida en "ai".
- La letra "o" es convertida en "ober".
- La letra "u" es convertida en "ufat".

Además, es posible desencriptar un texto encriptado utilizando las mismas reglas. Fue realizado durante el programa ONE casado en un modelo creativo de Figma.

## Especificaciones

- Funciona solo con letras minúsculas.
- No se deben utilizar letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra para su versión encriptada y también devolver una palabra encriptada a su versión original.

## Funcionalidades

- **Encriptar Texto:** Al ingresar texto en el área de texto y presionar el botón "encriptar", el texto se transformará según las reglas mencionadas y se mostrará en la sección de resultados.
- **Desencriptar Texto:** De igual manera, al ingresar un texto encriptado y presionar el botón "desencriptar", se devolverá el texto original.
- **Copiar Texto:** Hay un botón para copiar el texto encriptado o desencriptado.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- **HTML:** Contiene la estructura básica de la página, con áreas designadas para la entrada de texto, botones de acción, y la visualización del resultado.
- **CSS:** El diseño es responsivo y utiliza unidades `rem` para garantizar una correcta visualización en diferentes dispositivos como laptops, tabletas o celulares contando cada dispositivo con un diseño diferente de la página. Se aplicaron estilos para asegurar que el resultado del texto no se salga de su contenedor. 
- **JavaScript:** Contiene la lógica para encriptar, desencriptar y mostrar/ocultar elementos en función de las acciones del usuario.

## Programas Utilizados

- HTML
- CSS
- JS

## Responsividad

El diseño del proyecto es completamente responsivo. Se utilizaron unidades `rem` para garantizar flexibilidad en diferentes tamaños de pantalla. Además, el contenido en la sección de resultados se adapta para no salir del contenedor.

## Autor

Este proyecto fue realizado por **Cecilia Angeles**.
