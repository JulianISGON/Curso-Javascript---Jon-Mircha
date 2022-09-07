let respuesta = '{ "nombre":"Juan", "profesion": "dev", "herramientas": ["Javascript","Vue"]}'

function comprobrarRespuesta() {
    const inicio = Date.now()
    try {
        //Check JSON
        respuesta = JSON.parse(respuesta)

        // Errores personalizados
        if (!respuesta.nombre || !respuesta.profesion)
            throw new SyntaxError("Necesitamos las propiedades")

        if (!respuesta.herramientas.includes("Vue"))
            throw new RangeError("Necesitas usar Vue")

        return true

    } catch (error) {
        console.error(error)
        return false
    //Funciona para cronometrar mi manejo de errores
    } finally {
        console.info(Date.now() - inicio + " milisegundos")
    }
}

const check = comprobrarRespuesta()
console.log(check)