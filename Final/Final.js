let topKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I"];
let bottomKeys = ["A", "S", "D", "F", "G", "H", "J", "K"];
let keyStates = {};

topKeys.concat(bottomKeys).forEach((k) => (keyStates[k] = false));

let clap, closedHat, crash, kick, openHat, perc, ride, snare;
let bass1, bass2, bass3, bass4, pad, synth, vocal, zones1, zones2;

let bus, loopDelay, compressor;
let timeSlider, feedbackSlider;
let holdingZ = false, toggleX = false;

let fft;

function preload() {
  clap = loadSound("Sounds/Clap.mp3");
  closedHat = loadSound("Sounds/closedHat.mp3");
  crash = loadSound("Sounds/Crash.mp3");
  kick = loadSound("Sounds/Kick.mp3");
  openHat = loadSound("Sounds/openHat.mp3");
  perc = loadSound("Sounds/Perc.mp3");
  ride = loadSound("Sounds/Ride.mp3");
  snare = loadSound("Sounds/Snare.mp3");

  bass1 = loadSound("Sounds/Bass1.mp3");
  bass2 = loadSound("Sounds/Bass2.mp3");
  bass3 = loadSound("Sounds/Bass3.mp3");
  bass4 = loadSound("Sounds/Bass4.mp3");
  pad = loadSound("Sounds/Pad.mp3");
  synth = loadSound("Sounds/Synth.mp3");
  zones1 = loadSound("Sounds/Zones1.mp3");
  zones2 = loadSound("Sounds/Zones2.mp3");
  vocal = loadSound("Sounds/Vocal.mp3");
}

function setup() {
  createCanvas(500, 400);
  textFont("courier new", 15);
  textAlign(CENTER, BASELINE);

  timeSlider = createSlider(0.01, 1, 0.5, 0.01);
  timeSlider.position(75, 200);
  feedbackSlider = createSlider(0, 1, 0.5, 0.99);

  bus = new p5.Gain();
  loopDelay = new p5.Delay();
  compressor = new p5.Compressor();
  compressor.set(0, 10, 5, 200);

  clap.disconnect();
  closedHat.disconnect();
  crash.disconnect();
  kick.disconnect();
  openHat.disconnect();
  perc.disconnect();
  ride.disconnect();
  snare.disconnect();

  bass1.disconnect();
  bass2.disconnect();
  bass3.disconnect();
  bass4.disconnect();
  pad.disconnect();
  synth.disconnect();
  zones1.disconnect();
  zones2.disconnect();
  vocal.disconnect();

  clap.connect(bus);
  closedHat.connect(bus);
  crash.connect(bus);
  kick.connect(bus);
  openHat.connect(bus);
  perc.connect(bus);
  ride.connect(bus);
  snare.connect(bus);

  bass1.connect(bus);
  bass2.connect(bus);
  bass3.connect(bus);
  bass4.connect(bus);
  pad.connect(bus);
  synth.connect(bus);
  zones1.connect(bus);
  zones2.connect(bus);
  vocal.connect(bus);
  
  // Bus loop delay to compressor 
  loopDelay.process(bus, 0.5, 0.5, 23000);
  loopDelay.connect(compressor);
  bus.connect(compressor);
  compressor.connect();

  userStartAudio();
  fft = new p5.FFT(0.8, 32);
}

function draw() {
  background(200);
  stroke(64, 95, 129);
  strokeWeight(1);
  
  //Blue Outline
  push(); 
  noFill();
  stroke(58, 71, 107);
  strokeWeight(35);
  rect(0, 0, width, height, 40);
  pop();

  // Parameter Text
  fill("black");
  text("DELAY TIME", 140, 190);
  text("ERASER", 350, 190);
  textSize(10);
  text("Z - Press/Hold", 430, 205);
  text("X - Toggle", 434, 215);
  textSize(15);
  
  // Screen Shapes
  fill(0);
  rect(100, 25, 300, 100);
  fill(106, 182, 99);
  rect(150, 50, 200, 50);
  fill(135, 173, 208);

  // Text
  push();
  textSize(19);
  fill("Black");
  text("DAK-505", 60, 80);
  fill("Red");
  textSize(11);
  text("Free Looper", 60, 90);
  
  // signature
  textSize(11);
  fill("White");
  text("Nathaniel Oviedo-Clark", 400, 399);
  pop();

  // Top row color
  for (let i = 0; i < topKeys.length; i++) {
    fill(keyStates[topKeys[i]] ? color(216, 110, 112) : color(135, 173, 208));
    rect(50 + i * 50, 250, 40, 40);
    fill(0);
    text(topKeys[i], 70 + i * 50, 275);
  }

  // Bottom row color
  for (let i = 0; i < bottomKeys.length; i++) {
    fill(keyStates[bottomKeys[i]] ? color(216, 110, 112) : color(135, 173, 208));
    rect(50 + i * 50, 310, 40, 40);
    fill(0);
    text(bottomKeys[i], 70 + i * 50, 335);
  }

  // Loop delay updated
  loopDelay.delayTime(timeSlider.value());
  let targetFeedback = holdingZ || toggleX ? 0 : feedbackSlider.value();
  loopDelay.feedback(targetFeedback);
  feedbackSlider.hide();

  // feedback indicator
  fill(targetFeedback === 0 ? "red" : "white");
  stroke(0);
  circle(width - 150, 210, 20);

  // Spectrum analyzer
  let spectrum = fft.analyze();
  noStroke();
  fill(34, 100, 50);

  let horizontalScale = 0.34; // shrink width
  let verticalScale = 0.12; // shrink height
  let xOffset = 150; // move right
  let yOffset = 300; // move down

  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width) * horizontalScale + xOffset;
    let barWidth = (width / spectrum.length) * horizontalScale;
    let h = (-height + map(spectrum[i], 0, 255, height, 0)) * verticalScale;
    rect(i + x, height - yOffset, barWidth, h);
  }
}
// Key Triggering
function keyPressed() {
  let k = key.toUpperCase();
  if (keyStates[k] !== undefined) keyStates[k] = true;

 
  if (k === "Q") kick.play();
  if (k === "W") clap.play();
  if (k === "E") closedHat.play();
  if (k === "R") openHat.play();
  if (k === "T") perc.play();
  if (k === "Y") ride.play();
  if (k === "U") snare.play();
  if (k === "I") crash.play();

  if (k === "A") pad.play();
  if (k === "S") synth.play();
  if (k === "D") zones1.play();
  if (k === "F") zones2.play();
  if (k === "G") vocal.play();
  if (k === "H") bass1.play();
  if (k === "J") bass2.play();
  if (k === "K") bass3.play();

  if (k === "Z") holdingZ = true;
  if (k === "X") toggleX = !toggleX;
}

// Z Release
function keyReleased() {
  let k = key.toUpperCase();
  if (keyStates[k] !== undefined) keyStates[k] = false;

  if (k === "Z") holdingZ = false;
}
