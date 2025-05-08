"use strict";(self.webpackChunkwonder=self.webpackChunkwonder||[]).push([[392],{66768:function(p,r,n){var h;n.r(r),n.d(r,{demos:function(){return u}});var v=n(90228),d=n.n(v),x=n(87999),m=n.n(x),o=n(75271),g=n(61384),l=n(12991),u={"src-canvas-demo-demo1":{component:o.memo(o.lazy(function(){return Promise.all([n.e(847),n.e(433)]).then(n.bind(n,98271))})),asset:{type:"BLOCK",id:"src-canvas-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(7060).Z},react:{type:"NPM",value:"18.3.1"},"./utils.ts":{type:"FILE",value:n(99586).Z}},entry:"index.tsx"},context:{"./utils.ts":l,react:h||(h=n.t(o,2)),"/Users/chenwande/test/wonder/src/canvas/Demo1/utils.ts":l},renderOpts:{compile:function(){var s=m()(d()().mark(function a(){var e,c=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(223).then(n.bind(n,61223));case 2:return t.abrupt("return",(e=t.sent).default.apply(e,c));case 3:case"end":return t.stop()}},a)}));function i(){return s.apply(this,arguments)}return i}()}},"src-canvas-demo-demo2":{component:o.memo(o.lazy(function(){return Promise.all([n.e(847),n.e(433)]).then(n.bind(n,18936))})),asset:{type:"BLOCK",id:"src-canvas-demo-demo2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(60866).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:h||(h=n.t(o,2))},renderOpts:{compile:function(){var s=m()(d()().mark(function a(){var e,c=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(223).then(n.bind(n,61223));case 2:return t.abrupt("return",(e=t.sent).default.apply(e,c));case 3:case"end":return t.stop()}},a)}));function i(){return s.apply(this,arguments)}return i}()}},"src-canvas-demo-demo3":{component:o.memo(o.lazy(function(){return Promise.all([n.e(847),n.e(433)]).then(n.bind(n,35433))})),asset:{type:"BLOCK",id:"src-canvas-demo-demo3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(46012).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:h||(h=n.t(o,2))},renderOpts:{compile:function(){var s=m()(d()().mark(function a(){var e,c=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(223).then(n.bind(n,61223));case 2:return t.abrupt("return",(e=t.sent).default.apply(e,c));case 3:case"end":return t.stop()}},a)}));function i(){return s.apply(this,arguments)}return i}()}},"src-canvas-demo-demo4":{component:o.memo(o.lazy(function(){return Promise.all([n.e(847),n.e(433)]).then(n.bind(n,15661))})),asset:{type:"BLOCK",id:"src-canvas-demo-demo4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(99052).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:h||(h=n.t(o,2))},renderOpts:{compile:function(){var s=m()(d()().mark(function a(){var e,c=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(223).then(n.bind(n,61223));case 2:return t.abrupt("return",(e=t.sent).default.apply(e,c));case 3:case"end":return t.stop()}},a)}));function i(){return s.apply(this,arguments)}return i}()}}}},12991:function(p,r,n){n.r(r),n.d(r,{Graph:function(){return g},Point:function(){return o},getRandom:function(){return m}});var h=n(25298),v=n.n(h),d=n(17069),x=n.n(d),m=function(u,s){return Math.random()*(s-u)+u},o=function(){function l(u,s){v()(this,l),this.ctx=u,this.canvas=s,this.r=4,this.x=m(0,s.width-this.r/2),this.y=m(0,s.height-this.r/2),this.xSpeed=m(-50,50),this.ySpeed=m(-50,50),this.lastDrawTime=null}return x()(l,[{key:"draw",value:function(){if(!this.lastDrawTime)this.lastDrawTime=Date.now();else{var s=Date.now(),i=(s-this.lastDrawTime)/1e3,a=this.x+this.xSpeed*i,e=this.y+this.ySpeed*i;a<0?(a=0,this.xSpeed=-this.xSpeed):a>this.canvas.width-this.r/2&&(a=this.canvas.width-this.r/2,this.xSpeed=-this.xSpeed),e<0?(e=0,this.ySpeed=-this.ySpeed):e>this.canvas.height-this.r/2&&(e=this.canvas.height-this.r/2,this.ySpeed=-this.ySpeed),this.x=a,this.y=e,this.lastDrawTime=s}this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2),this.ctx.fillStyle="rgb(200, 200, 200)",this.ctx.fill()}}]),l}(),g=function(){function l(u,s){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:40,e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:300;v()(this,l),this.canvas=s,this.ctx=u,this.points=Array(a).fill(0).map(function(){return new o(i.ctx,i.canvas)}),this.maxDistance=e,this.draw()}return x()(l,[{key:"draw",value:function(){var s=this;requestAnimationFrame(function(){s.draw()}),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var i=0;i<this.points.length;i++){var a=this.points[i];a.draw();for(var e=i+1;e<this.points.length;e++){var c=this.points[e],f=Math.sqrt(Math.pow(a.x-c.x,2)+Math.pow(a.y-c.y,2)),t=1-f/this.maxDistance;this.ctx.beginPath(),this.ctx.moveTo(a.x,a.y),this.ctx.lineTo(c.x,c.y),this.ctx.strokeStyle="rgba(200, 200, 200, ".concat(t,")"),this.ctx.stroke()}}}}]),l}()},11515:function(p,r,n){n.r(r),n.d(r,{texts:function(){return v}});var h=n(61384);const v=[]},7060:function(p,r){r.Z=`import React, { useEffect } from 'react';
import { Graph } from './utils';

const Demo = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas-demo') as HTMLCanvasElement;
    canvas.width = devicePixelRatio * canvas.clientWidth;
    canvas.height = devicePixelRatio * 500;
    const ctx = canvas.getContext('2d')!;

    new Graph(ctx, canvas);
  }, []);

  return (
    <canvas
      id="canvas-demo"
      style={{ width: '100%', height: '100%', backgroundColor: '#222' }}
    ></canvas>
  );
};

export default Demo;
`},99586:function(p,r){r.Z=`// @ts-nocheck
export const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

export class Point {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.r = 4; // \u5706\u7684\u534A\u5F84
    this.x = getRandom(0, canvas.width - this.r / 2); // \u5706\u5FC3\u7684x\u5750\u6807
    this.y = getRandom(0, canvas.height - this.r / 2); // \u5706\u5FC3\u7684y\u5750\u6807
    this.xSpeed = getRandom(-50, 50); // \u5706\u5FC3x\u8F74\u7684\u901F\u5EA6
    this.ySpeed = getRandom(-50, 50); // \u5706\u5FC3x\u8F74\u7684\u901F\u5EA6
    this.lastDrawTime = null;
  }
  draw() {
    if (!this.lastDrawTime) {
      this.lastDrawTime = Date.now();
    } else {
      const now = Date.now();
      const delta = (now - this.lastDrawTime) / 1000;
      let x = this.x + this.xSpeed * delta;
      let y = this.y + this.ySpeed * delta;
      if (x < 0) {
        x = 0;
        this.xSpeed = -this.xSpeed;
      } else if (x > this.canvas.width - this.r / 2) {
        x = this.canvas.width - this.r / 2;
        this.xSpeed = -this.xSpeed;
      }
      if (y < 0) {
        y = 0;
        this.ySpeed = -this.ySpeed;
      } else if (y > this.canvas.height - this.r / 2) {
        y = this.canvas.height - this.r / 2;
        this.ySpeed = -this.ySpeed;
      }
      this.x = x;
      this.y = y;
      this.lastDrawTime = now;
    }

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgb(200, 200, 200)';
    this.ctx.fill();
  }
}

export class Graph {
  constructor(ctx, canvas, pointNumber = 40, maxDistance = 300) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.points = Array(pointNumber)
      .fill(0)
      .map(() => new Point(this.ctx, this.canvas));
    this.maxDistance = maxDistance;
    this.draw();
  }
  draw() {
    requestAnimationFrame(() => {
      this.draw();
    });
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.points.length; i++) {
      const p1 = this.points[i];
      p1.draw();
      for (let j = i + 1; j < this.points.length; j++) {
        const p2 = this.points[j];
        const distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2),
        );
        const opacity = 1 - distance / this.maxDistance;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.strokeStyle = \`rgba(200, 200, 200, \${opacity})\`;
        this.ctx.stroke();
      }
    }
  }
}
`},60866:function(p,r){r.Z=`import React, { useEffect, useRef } from 'react';

interface CodeRainProps {
  chars?: string;
  fontSize?: number;
  color?: string;
}

const CodeRain: React.FC<CodeRainProps> = ({
  chars = '01',
  fontSize = 24,
  color = '#0f0',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // \u8BBE\u7F6Ecanvas\u4E3A\u5168\u5C4F
    canvas.width = devicePixelRatio * canvas.clientWidth;
    canvas.height = devicePixelRatio * 500;

    const columns = Math.floor(canvas.width / fontSize);

    // \u521D\u59CB\u5316\u96E8\u6EF4\u4F4D\u7F6E
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // \u7ED8\u5236\u51FD\u6570
    function draw() {
      if (!canvas) return;
      if (!ctx) return;

      // \u534A\u900F\u660E\u80CC\u666F
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // \u8BBE\u7F6E\u6587\u5B57\u6837\u5F0F
      ctx.fillStyle = color;
      ctx.font = \`\${fontSize}px monospace\`;

      // \u7ED8\u5236\u6BCF\u4E2A\u96E8\u6EF4
      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // \u91CD\u7F6E\u96E8\u6EF4\u5230\u5E95\u90E8
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    // \u5F00\u59CB\u52A8\u753B
    const interval = setInterval(draw, 33);

    // \u7A97\u53E3\u5927\u5C0F\u6539\u53D8\u65F6\u91CD\u7F6Ecanvas
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [chars, fontSize, color]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
};

export default CodeRain;
`},46012:function(p,r){r.Z=`import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
}

interface StarSkyProps {
  starCount?: number;
  starColor?: string;
  backgroundColor?: string;
}

const StarSky: React.FC<StarSkyProps> = ({
  starCount = 500,
  starColor = '#ffffff',
  backgroundColor = '#000000',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // \u8BBE\u7F6Ecanvas\u4E3A\u5168\u5C4F
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // \u521B\u5EFA\u661F\u661F\u6570\u7EC4
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        alpha: Math.random(),
      });
    }

    // \u7ED8\u5236\u51FD\u6570
    function draw() {
      if (!ctx) return;
      if (!canvas) return;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = starColor;
      for (const star of stars) {
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // \u66F4\u65B0\u661F\u661F\u4F4D\u7F6E
        star.x += star.vx;
        star.y += star.vy;

        // \u8FB9\u754C\u68C0\u67E5
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;

        // \u968F\u673A\u95EA\u70C1\u6548\u679C
        star.alpha += (Math.random() - 0.5) * 0.02;
        star.alpha = Math.max(0.1, Math.min(1, star.alpha));
      }

      requestAnimationFrame(draw);
    }

    // \u5F00\u59CB\u52A8\u753B
    const animationId = requestAnimationFrame(draw);

    // \u7A97\u53E3\u5927\u5C0F\u6539\u53D8\u65F6\u91CD\u7F6Ecanvas
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount, starColor, backgroundColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
};

export default StarSky;
`},99052:function(p,r){r.Z=`import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number; // \u589E\u5927\u82B1\u74E3\u5C3A\u5BF8\u8303\u56F4
  speed: number;
  angle: number;
  rotation: number;
  rotateSpeed: number;
  alpha: number;
}

interface SakuraFallProps {
  petalCount?: number; // \u9ED8\u8BA4\u82B1\u74E3\u6570\u91CF\u8C03\u6574\u4E3A\u66F4\u5927\u503C
  petalColor?: string;
  windStrength?: number;
  treeColor?: string;
  bloomColor?: string;
}

const SakuraFall: React.FC<SakuraFallProps> = ({
  petalCount = 300, // \u589E\u52A0\u82B1\u74E3\u6570\u91CF\u5360\u6EE1\u5168\u5C4F
  petalColor = '#FFB7C5',
  windStrength = 1.2, // \u589E\u5927\u98CE\u529B\u4F7F\u5206\u5E03\u66F4\u5206\u6563
  treeColor = '#8B4513',
  bloomColor = '#FFC0CB',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const treePathRef = useRef<Path2D>(new Path2D());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const generateStaticTree = () => {
      const tempCtx = document.createElement('canvas').getContext('2d')!;
      const path = new Path2D();

      const drawBranch = (
        x: number,
        y: number,
        length: number,
        angle: number,
        depth: number,
      ) => {
        if (depth === 0) return;
        tempCtx.save();
        tempCtx.translate(x, y);
        tempCtx.rotate((angle * Math.PI) / 180);
        path.moveTo(0, 0);
        path.lineTo(0, -length);
        if (depth < 3) {
          path.arc(0, -length, 2 + depth, 0, Math.PI * 2);
        }
        const newLength = length * 0.8;
        drawBranch(0, -length, newLength, -20, depth - 1);
        drawBranch(0, -length, newLength, 20, depth - 1);
        tempCtx.restore();
      };

      drawBranch(canvas.width / 2, canvas.height, 150, 0, 6); // \u8C03\u6574\u6811\u9AD8\u5EA6\u548C\u5206\u652F\u5C42\u6570
      treePathRef.current = path;
    };
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStaticTree();
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // \u4FEE\u6539\u82B1\u74E3\u751F\u6210\u903B\u8F91\uFF1A\u5168\u5C4F\u968F\u673A\u4F4D\u7F6E + \u66F4\u5927\u5C3A\u5BF8
    const createPetal = (): Petal => ({
      x: Math.random() * canvas.width, // \u5168\u5C4F\u968F\u673Ax\u5750\u6807
      y: -Math.random() * 100, // \u4ECE\u5C4F\u5E55\u9876\u90E8\u5916\u968F\u673A\u9AD8\u5EA6\u5F00\u59CB
      size: 8 + Math.random() * 24, // \u82B1\u74E3\u5C3A\u5BF88-20px\uFF08\u539F6-14px\uFF09
      speed: 1.0 + Math.random() * 1.5, // \u9002\u5F53\u8C03\u6162\u901F\u5EA6\uFF08\u539F1.2-3.2\uFF09
      angle: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI,
      rotateSpeed: (Math.random() - 0.5) * 0.1,
      alpha: 0.7 + Math.random() * 0.3,
    });

    const petals: Petal[] = Array.from({ length: petalCount }, createPetal);

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      // \u8C03\u6574\u8D1D\u585E\u5C14\u66F2\u7EBF\u53C2\u6570\u4F7F\u82B1\u74E3\u5F62\u72B6\u66F4\u9971\u6EE1
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(
        p.size * 0.5,
        p.size * 0.3,
        p.size * 1.0,
        p.size * 0.6,
        p.size * 0.6,
        p.size * 1.0,
      );
      ctx.bezierCurveTo(
        p.size * 0.3,
        p.size * 0.6,
        p.size * 0.5,
        p.size * 0.3,
        0,
        0,
      );
      ctx.fillStyle = petalColor;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = treeColor;
      ctx.fillStyle = bloomColor;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.stroke(treePathRef.current);
      ctx.fill(treePathRef.current);

      petals.forEach((petal) => {
        petal.y += petal.speed;
        petal.x += Math.sin(petal.angle) * windStrength;
        petal.angle += 0.02; // \u589E\u52A0\u89D2\u5EA6\u53D8\u5316\u9891\u7387\u4F7F\u6446\u52A8\u66F4\u660E\u663E
        petal.rotation += petal.rotateSpeed;

        // \u8D85\u51FA\u5C4F\u5E55\u5E95\u90E8\u65F6\u4ECE\u9876\u90E8\u91CD\u65B0\u751F\u6210\uFF08\u5168\u5C4F\u8303\u56F4\uFF09
        if (petal.y > canvas.height + 20) {
          Object.assign(petal, createPetal());
          petal.y = -20;
        }

        drawPetal(petal);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [petalCount, petalColor, windStrength, treeColor, bloomColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default SakuraFall;
`}}]);
