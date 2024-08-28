// Declaración de variables
const textArea = document.querySelector('.contenido__izquierda__texto');
const encriptarBoton = document.querySelector('.contenido__izquierda__boton__encriptar');
const desencriptarBoton = document.querySelector('.contenido__izquierda__boton__desencriptar');
const resultadoDiv = document.querySelector('.contenido__derecha__resultado');
const copiarBoton = document.querySelector('.contenido__derecha__boton__copiar');
const img = document.querySelector('.contenido__derecha__muñeco');
const subtitulo = document.querySelector('.contenido__derecha__subtitulo');
const parrafo = document.querySelector('.contenido__derecha p');

// Event Listener para encriptar
encriptarBoton.addEventListener('click', function() {
    let text = textArea.value;

    if (text) {
        const textoEncriptado = encriptarTexto(text);
        mostrarResultado(textoEncriptado);
    }
});

// Event Listener para desencriptar
desencriptarBoton.addEventListener('click', function() {
    let text = textArea.value;

    if (text) {
        const textoDesencriptado= desencriptarTexto(text);
        mostrarResultado(textoDesencriptado);
    }
});

// Event Listener para copiar el texto
copiarBoton.addEventListener('click', function() {
    const copiarTexto = resultadoDiv.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

// Función para encriptar texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para mostrar el resultado en la sección de la derecha
function mostrarResultado(texto) {
    img.style.display = 'none';
    subtitulo.style.display = 'none';
    parrafo.style.display = 'none';
    resultadoDiv.style.display = 'block';
    copiarBoton.style.display = 'block'; // Mostrar botón de copiar
    resultadoDiv.textContent = texto;
}
