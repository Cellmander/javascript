var animal = {
    tipo: "Felino"
};

var gato = Object.create(animal);
gato.raça = "siamese";

console.log(gato.tipo); // Saída: Felino
