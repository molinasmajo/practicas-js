function angul(){
    vuelta = 360
    var cincoVueltas = 1800
    var starty = Math.floor(Math.random()*vuelta);
    var random = (Math.floor(Math.random()*cincoVueltas)+cincoVueltas);
    var full = (starty+random)%vuelta;

    console.log("angulo inicial: ", starty);
    console.log("valor aleatoreo: ", random);
    console.log("angulo final: ", full);
}
angul();
