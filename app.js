let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

// Magically load the PNG asynchronously
let sprite = PIXI.Sprite.from('sample.png');
let leftArrow = PIXI.Sprite.from('/img/left-arrow.png');
let rightArrow = PIXI.Sprite.from('/img/right-arrow.png');
app.stage.addChild(sprite);

// Add a variable to count up the seconds our demo has been running
let elapsed = 0.0;
// Tell our application's ticker to run a new callback every frame, passing
// in the amount of time that has passed since the last tick
app.ticker.add((delta) => {
    // Add the time to our total elapsed time
    elapsed += delta;
    // Update the sprite's X position based on the cosine of our elapsed time.  We divide
    // by 50 to slow the animation down a bit...
    sprite.x += 1
    if (sprite.x > 640) {
        sprite.x = 0
    }
});


sprite.on('pointerdown', (event) => { alert('clicked!'); });

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;