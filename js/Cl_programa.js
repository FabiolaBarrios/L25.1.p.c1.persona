export default class Cl_programa {
    constructor(){
        this.acumEdad = 0
        this.contPers = 0
    }

    procesarPersona(p){
        this.acumEdad += p.edad
        this.contPers++
    }

    promedioEdad(){
        return this.acumEdad / this.contPers
    }
}