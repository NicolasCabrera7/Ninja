class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log("Soy el ninja", this.nombre);
    }

    showStats() {
        console.log("Nombre:", this.nombre);
        console.log("Fuerza:", this.fuerza);
        console.log("Velocidad:", this.velocidad);
        console.log("Salud:", this.salud);
    }

    drinkSake() {
        this.salud += 10;
        console.log("¡Salud incrementada en 10!");
    }
}


class Sensei extends Ninja{
    constructor(nombre){
        super(nombre, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}