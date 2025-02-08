export default class Cl_persona {
    constructor(edad){
        this.edad = edad
    }

    set edad(e){
        this._edad = +e
    }

    get edad(){
        return this._edad
    }
}