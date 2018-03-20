//行人行走
var svg = Snap("#svg");

//行人起点坐标
var startX = 240
var startY = 255

//行人终点坐标
var overX = 410
var overY = 360

var g = svg.paper.g()
// 行人帧动画原始素材
var personFrames = []
for(var k=3; k<=4; k++) {
	var personFramesOfOneDirection = []

	// 行人素材尺寸
	var height = 36
	var width = height * (62/128)

	for(var i=0; i<16; i++) {
		var filename = 10000 + i + 1
		personFramesOfOneDirection.push(svg.paper.image("img/avatar/" + (k) + "/" + filename + ".png", 
			startX, startY, width, height)
			.attr({visibility: "hidden"}))
	}
	personFrames[k] = personFramesOfOneDirection
	for(var j=0; j<16; j++) {
		g.add(personFrames[k][j])
	}
}

var personDirection = 3
var personAnimationFrameCount = 0
var personAnimationFrameDelta = .1
var personFrameIndex = 0
var personFrame = null

function changePersonFrame() {
	if(personAnimationFrameCount > 0.2) {
		personAnimationFrameCount = 0
		if(personFrame) personFrame.attr({visibility: "hidden"})
		personFrame = personFrames[personDirection][personFrameIndex]
		personFrame.attr({visibility: "visible"})
		personFrameIndex++
		if(personFrameIndex == personFrames[personDirection].length) personFrameIndex = 0
	} else {
		personAnimationFrameCount += personAnimationFrameDelta
	}
	
	requestAnimationFrame(changePersonFrame)
}

function walkEast(){
	personDirection = 3	
	g.animate({'transform': 'translate('+ (overX - startX) + ',' + (overY - startY) + ')'}, 10000, function(){
		walkWest()
	})
}

function walkWest(){
	personDirection = 4
	g.animate({'transform': 'translate(0, 0)'}, 10000, function(){
		walkEast()
	})
}

changePersonFrame()
walkEast()