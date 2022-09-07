/*const valor = () => 666

try {
    const num = valor()
    if (num === 666) throw new Error("Apartate demonio")
} catch (error) {
    console.error(error.name, error.message)
}

console.log("Continuamos con la ejecucion") */

const gato = { nombre: "Guizmo", raza: "negra" };

function comprobarGato(){
    try {
        if (!gato.raza) throw new SyntaxError("propiedad raza necesaria")
    } catch (error) {
        if(error instanceof SyntaxError){
            console.error("Infomracion incompleta ", error)
        }else{
            throw error //rethrow
        }
    }

}

comprobarGato()

