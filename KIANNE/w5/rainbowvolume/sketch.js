var sketch = function( p ) {
let img;
  
  //maps a value in range [0,1] to HSL color
p.HUEtoRGB = function(H) {
    let R = Math.abs(H * 6.0 - 3.0) - 1.0;
    let G = 2.0 - Math.abs(H * 6.0 - 2.0);
    let B = 2.0 - Math.abs(H * 6.0 - 4.0);
    return [Math.max(0, Math.min(255, R*255)),
            Math.max(0, Math.min(255, G*255)),
            Math.max(0, Math.min(255, B*255))];
}

  //
p.SmoothStep = function(edge0, edge1, x) {
    t = Math.max(0.0, Math.min(1.0, (x - edge0) / (edge1 - edge0)));
    return t * t * (3.0 - 2.0 * t);
}

p.setup = function() {
    let sketchCanvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    
    p.updateCamera();

    img = p.createImage(100, 100);
    img.loadPixels();
    for (let i = 0; i < img.width; i++) {
        for (let j = 0; j < img.height; j++) {
            let pi = 4*(j*img.width + i);
            
            // color dependent on u (column)
            let col = p.HUEtoRGB(1.0-i/img.width);

            // alpha dependent on the distance to the border
            let fx = p.SmoothStep(0, img.width/5, Math.min(i, img.width-i))
            let fy = p.SmoothStep(0, img.height/20, Math.min(j, img.height-j))
            let alpha = Math.max(0, Math.min(255, fx*fy*200))

            img.pixels[pi]     = col[0];
            img.pixels[pi + 1] = col[1];
            img.pixels[pi + 2] = col[2];
            img.pixels[pi + 3] = alpha;
        }
    }
    img.updatePixels();
}

p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.updateCamera();
}

p.updateCamera = function() {
    p.perspective(p.PI / 3.0, p.width / p.height, 0.1, 15000);
}

p.draw = function() {
  
    p.background(255, 255, 255, 0);

    p.push();
    p.translate(0, 0, -5); 
    p.texture(img)
    p.beginShape(p.TRIANGLE_STRIP)
    let no = 20;
    for (let i = 0; i <= no; ++ i ) {
        let ps = p.createVector(p.height/2.2-50, 0);
        let pc = p.createVector(p.height/2.2-50-10000, 0);
        let dir = p.createVector(-0.5, -1).normalize();
        let pd = p5.Vector.add(ps, p5.Vector.mult(dir, 10000*i/no));
        let p2 = p5.Vector.add(pc, p5.Vector.sub(pd, pc).normalize().mult(10000));
        p.vertex(-p.width/2,  p2.x, p2.y, 0, 100*i/no);
        p.vertex( p.width/2,  p2.x, p2.y, 100, 100*i/no);
    }
    p.endShape();
    p.pop();
}


}

var rainbow_3d = new p5(sketch);