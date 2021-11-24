import { Humain } from "./humain.js";
class guerrier extends Humain {
    constructor(nom,age,force) { 
        super(nom,age)
        this.force = force
    }
}

