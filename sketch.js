var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  Quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}
