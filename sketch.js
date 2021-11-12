const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,monster1,rope,ground;


function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;
// cria os sprites do objetos presentes no jogo
  ground = new Ground(1500, 600, 3000, 20);

  hero = new Hero(400,380,250);
  monster = new Monster(1100,200,300);
  monster1 = new Monster(1550,200,300);

  box1 = new Box(1050,500,100,100);
  box2 = new Box(1150,500,100,100);

  box3 = new Box(1500,500,100,100);
  box4 = new Box(1600,500,100,100);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

// utiliza a função display para mostrar na tela a imagem ou o sprite de cada variavel
  hero.display();
  monster.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  monster1.display();

  
}
// está função coloca a posição de x e de y no mouse
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
  
}
