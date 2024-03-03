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