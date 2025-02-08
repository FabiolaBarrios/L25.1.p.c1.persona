import Cl_persona from "./Cl_persona.js";
import Cl_programa from "./Cl_programa.js";

let persona1 = new Cl_persona(15)
let persona2 = new Cl_persona(14)
let persona3 = new Cl_persona(19)
let persona4 = new Cl_persona(20)
let persona5 = new Cl_persona(16)
let persona6 = new Cl_persona(18)

let programa = new Cl_programa()

programa.procesarPersona(persona1)
programa.procesarPersona(persona2)
programa.procesarPersona(persona3)
programa.procesarPersona(persona4)
programa.procesarPersona(persona5)
programa.procesarPersona(persona6)

alert(`La edad promedio es: ${programa.promedioEdad()}`)