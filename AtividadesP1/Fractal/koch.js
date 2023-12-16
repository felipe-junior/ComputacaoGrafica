let p1, p2;

function setup() {
    createCanvas(800, 800);

    //Criei dois pontos centralizados usando a largura e a altura da tela
    p1 = createVector(width / 2 - 100, height / 2);
    p2 = createVector(width / 2 + 200, height / 2);
}

function draw() {
    createKoch(p1, p2, 5);
}

function createKoch(a, b, depth) {
    if (depth === 0) {
        line(a.x, a.y, b.x, b.y);
    } else {
        //Cria um vetor do tamanho do segmento repartido
        let v = createVector((b.x - a.x) / 3, (b.y - a.y) / 3);

        //Cria os pontos intermediarios
        let p3 = createVector(a.x + v.x, a.y + v.y);
        let p4 = createVector(b.x - v.x, b.y - v.y);

        let angulo = -PI / 3; //Sentido antihorário

        //Usado para criar o p5
        let novoVetorRotacionado = createVector(v.x * cos(angulo) - v.y * sin(angulo), v.x * sin(angulo) + v.y * cos(angulo));
        let p5 = createVector(p3.x + novoVetorRotacionado.x, p3.y + novoVetorRotacionado.y);

        //Recursão para criar todos os pontos relacionados
        createKoch(a, p3, depth - 1);
        createKoch(p3, p5, depth - 1);
        createKoch(p5, p4, depth - 1);
        createKoch(p4, b, depth - 1);
    }
}