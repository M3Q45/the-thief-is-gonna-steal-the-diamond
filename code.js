var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1, laser2, laser3, laser4, edges;
var treasure, thief, diamondBox; 
function setup() {

  thief = createSprite (10, 390, 30, 30);
  
  laser1 = createSprite (100, 0, 200, 5);
  laser1.shapeColor = "green" ;
  laser1.velocityY = 2;
  
  laser2 = createSprite (300, 400, 200, 5);
  laser2.shapeColor = "green";
  laser2.velocityY = -2
  
  laser3 = createSprite (400, 0, 200, 5);
  laser3.shapeColor = "green";
  laser3.velocityY = 2
  laser3.velocityX = -2 
  laser3.rotation = 45 
  
  laser4 = createSprite (0, 0, 200, 5);
  laser4.shapeColor = "green";
  laser4.velocityY = 2
  laser4.velocityX = 2 
  laser4.rotation = -45 
   
  diamondBox = createSprite(390,10,30,30);
  diamondBox.shapeColor="blue";
  
  edges = createEdgeSprites();
  
  
}
function draw() {
  background(220);
  
  if (keyIsDown (RIGHT_ARROW)) {
    thief.velocityX = 2;
    thief.velocityY = 0;
  }
  
  if (keyIsDown (LEFT_ARROW)) {
    thief.velocityX = -2;
    thief.velocityY = 0;
  }
  
  if (keyIsDown (UP_ARROW)) {
    thief.velocityX = 0;
    thief.velocityY = -2;
  }
  
  if (keyIsDown (DOWN_ARROW)) {
    thief.velocityX = 0;
    thief.velocityY = 2;
  }
  
  fill("white")
  
 if (laser1.isTouching(thief) || laser2.isTouching(thief) || laser3.isTouching(thief) || laser4.isTouching(thief)  ) {
    stroke(0)
    fill(0)
    textSize(24);
    text("En tu cara JAJAJAJAJA ", 20, 200);
    laser1.velocityY=0;
    laser2.velocityY=0;
    laser3.velocityY=0;
    laser3.velocityX=0;
    laser4.velocityY=0;
    laser4.velocityX=0;
    thief.velocityY=0;
    thief.velocityX=0;
  }
   
  
  if (diamondBox.isTouching(thief)) {
    stroke(0)
    fill(0)
    textSize(24);
    text("El ladron consiguio el diamante :( ", 20, 200);
    laser1.velocityY=0;
    laser2.velocityY=0;
    laser3.velocityY=0;
    laser3.velocityX=0;
    laser4.velocityY=0;
    laser4.velocityX=0;
    thief.velocityY=0;
    thief.velocityX=0;
  }
  
  
  
    drawSprites();
  

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
