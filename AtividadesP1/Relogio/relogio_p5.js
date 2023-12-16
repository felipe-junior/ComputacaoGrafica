function setup() {
    createCanvas(800, 800);
}

function draw() {
    translate(width / 2, height / 2);
    // Desenha o círculo do relógio
    ellipse(0, 0, 300, 300);

    //Desenha ponteiros
    transformAndPreserveStack(desenhaPonteiroHora)
    transformAndPreserveStack(desenhaPonteiroMinuto)
    transformAndPreserveStack(desenhaPonteiroSegundo)
}

function transformAndPreserveStack(callback) {
    push();
    callback()
    pop();
}

function desenhaPonteiroHora() {
    let h = hour() % 12; // Normaliza o valor da hora para de 0 até 1. Divide (resto) por 12 pois o relógio tem 12 posições de hora. O p5 vai de 0 - 23 então também funciona  para hora 13 até a hora 23
    rotate(map(h, 0, 12, 0, 2 * PI) - PI / 2);
    line(0, 0, 50, 0);
}

function desenhaPonteiroMinuto() {
    let m = minute();
    rotate(map(m, 0, 60, 0, 2 * PI) - PI / 2);
    line(0, 0, 80, 0);
}

function desenhaPonteiroSegundo() {
    let s = second();
    rotate(map(s, 0, 60, 0, 2 * PI) - PI / 2);
    line(0, 0, 100, 0);
}
