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

var laser1, laser2, edges;
var diamondBox, thief;

function setup() {
  
 thief = createSprite(10,390,30,30);
 thief.shapeColor = ("black");
 
 
 laser1 = createSprite(100,0,200,5);
 laser1.shapeColor = ("red");
 laser1.velocityY = 2;
 
 laser2 = createSprite(300,400,200,5);
 laser2.shapeColor = ("red");
 laser2.velocityY = -2 ;
 
  diamondBox = createSprite(390,10,30,30)
  diamondBox.shapeColor="blue";
  
  edges = createEdgeSprites();
}

function draw() {
  
  background("GRAY");
  
  
   
 laser1.bounceOff(edges);
laser2.bounceOff(edges);
 
   if(laser1.isTouching(thief) || laser2.isTouching(thief)){
stroke("white");
fill("blue");
textSize(24);
text("Atrapa al ladrón",120,200);
laser1.velocityY=0;
laser2.velocityY=0;
thief.velocityY=0;
thief.velocityX=0;
}

if(keyDown(RIGHT_ARROW)){
thief.velocityX = 2;
thief.velocityY = 0;
}

if(keyDown(LEFT_ARROW)){
thief.velocityX = -2;
thief.velocityY = 0;
}

if(keyDown(UP_ARROW)){
thief.velocityX = 0;
thief.velocityY = -2;
}

if(keyDown(DOWN_ARROW)){
thief.velocityX = 0;
thief.velocityY = 2;
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
