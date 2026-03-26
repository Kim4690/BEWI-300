(function (cjs, an) {

var p;
var lib = {};
var ss = {};
var img = {};

lib.ssMetadata = [
	{name:"BygTek_300x250_mar26_atlas_1", frames: [[0,1335,490,192],[492,1335,472,96],[966,1335,162,42],[1130,1335,151,42],[1283,1335,108,34],[0,0,2000,1333]]}
];

// 🔧 MovieClip base
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
}).prototype = p = new cjs.MovieClip();

// 🔧 Sprites
(lib.CachedBmp_5 = function() { this.initialize(ss["BygTek_300x250_mar26_atlas_1"]); this.gotoAndStop(0); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_4 = function() { this.initialize(ss["BygTek_300x250_mar26_atlas_1"]); this.gotoAndStop(1); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_2 = function() { this.initialize(ss["BygTek_300x250_mar26_atlas_1"]); this.gotoAndStop(2); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_1 = function() { this.initialize(ss["BygTek_300x250_mar26_atlas_1"]); this.gotoAndStop(3); }).prototype = p = new cjs.Sprite();
(lib.CachedBmp_3 = function() { this.initialize(ss["BygTek_300x250_mar26_atlas_1"]); this.gotoAndStop(4); }).prototype = p = new cjs.Sprite();
(lib.LinkedFile = function() { this.initialize(ss["BygTek_300x250_mar26_atlas_1"]); this.gotoAndStop(5); }).prototype = p = new cjs.Sprite();

// 🔧 helper
function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	return clone;
}
function getMCSymbolPrototype(symbol, nominalBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	return prototype;
}

// 🔧 Text + CTA (beholdt)
(lib.text2 = function() {
	cjs.MovieClip.apply(this,[{}]);
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));
}).prototype = p = new cjs.MovieClip();

(lib.Text1 = function() {
	cjs.MovieClip.apply(this,[{}]);
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));
}).prototype = p = new cjs.MovieClip();

(lib.CTA = function() {
	cjs.MovieClip.apply(this,[{}]);
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(2.7,0,0.5,0.5);
	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(0,0.65,0.5,0.5);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(300));
}).prototype = p = new cjs.MovieClip();

// 🔧 Stage content (forkortet – din animation er bevaret)
(lib.Untitled3 = function() {
	cjs.MovieClip.apply(this,[{}]);

	this.instance = new lib.LinkedFile();
	this.instance.setTransform(-53.1,-1.95,0.1776,0.1902);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));
}).prototype = p = new lib.AnMovieClip();

// 🔧 Properties
lib.properties = {
	id: 'F76BD3534F92AF479E891204213A05E2',
	width: 300,
	height: 250,
	fps: 30,
	manifest: [
  {src:"https://kim4690.github.io/BEWI-300/BygTek_300x250_mar26_atlas_1.png", id:"BygTek_300x250_mar26_atlas_1"}
]
};

// 🔧 Stage
(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

// 🔥 FIX: ingen Adobe responsive
an.makeResponsive = function() {};

// 🔧 Composition
an.compositions = an.compositions || {};
an.compositions['F76BD3534F92AF479E891204213A05E2'] = {
  getLibrary: function() { return lib; },
  getSpriteSheet: function() { return ss; },
  getImages: function() { return img; }
};

an.getComposition = function(id) {
	return an.compositions[id];
};

})(window.createjs = window.createjs||{}, window.AdobeAn = window.AdobeAn||{});
