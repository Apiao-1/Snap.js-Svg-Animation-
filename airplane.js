
//飞机飞行动画
var svg = Snap("#svg");

// 飞机素材尺寸
var height = 72
var width = height * (700/531)

//飞机起点坐标
var startAirplaneX = 535 - width/2
var startAirplaneY = 312 - height/2

var overAirplaneX = 535 - width/2
var overAirplaneY = 312 - height/2

//飞机终点坐标
// var overAirplaneX = 410
// var overAirplaneY = 360

var gAirplane = svg.paper.g()
// 飞机帧动画原始素材
var airplane = []

for(var k=1; k<=4; k++) {
	var airplaneOfOneDirection = []

	for(var i=1; i<=2; i++) {
		airplaneOfOneDirection.push(svg.paper.image("img/airplane/" + (k) + "/" + (i) + ".png", 
			startAirplaneX, startAirplaneY, width, height)
			.attr({visibility: "hidden"}))
	}
	airplane[k] = airplaneOfOneDirection
	for(var j=0; j<=1; j++) {
		gAirplane.add(airplane[k][j])
	}
}

var airplaneDirection = 2
var airplaneAnimationFrameCount = 0
var airplaneAnimationFrameDelta = .1
var airplaneFrameIndex = 0
var airplaneFrame = null

function changeAirplaneFrame() {
	if(airplaneAnimationFrameCount > 0.2) {
		airplaneAnimationFrameCount = 0
		if(airplaneFrame) airplaneFrame.attr({visibility: "hidden"})
		airplaneFrame = airplane[airplaneDirection][airplaneFrameIndex]
		airplaneFrame.attr({visibility: "visible"})
		airplaneFrameIndex++
		if(airplaneFrameIndex == airplane[airplaneDirection].length) airplaneFrameIndex = 0
	} else {
		airplaneAnimationFrameCount += airplaneAnimationFrameDelta
	}
	
	requestAnimationFrame(changeAirplaneFrame)
}

function chooseAirplaneDirection(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY){
	if (startAirplaneX > overAirplaneX && startAirplaneY>overAirplaneY)
		return 1
	else if (startAirplaneX > overAirplaneX && startAirplaneY<overAirplaneY)
		return 3
	else if (startAirplaneX < overAirplaneX && startAirplaneY<overAirplaneY)
		return 4
	else if (startAirplaneX < overAirplaneX && startAirplaneY>overAirplaneY)
		return 2
}

function fly(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY){
	airplaneDirection = chooseAirplaneDirection(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY)
	changeAirplaneFrame()
	gAirplane.animate({'transform': 'translate('+ (overAirplaneX - startAirplaneX) + ',' + (overAirplaneY - startAirplaneY) + ')'}, 3000, function(){

	})
}

var point1 = svg.paper.circle(744, 460, 10).click(function(){
	overAirplaneX = this.getBBox().x - width/2
	overAirplaneY = this.getBBox().y - height/2
	fly(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY)
})

var point2 = svg.paper.circle(392, 608, 10).click(function(){
	overAirplaneX = this.getBBox().x - width/2
	overAirplaneY = this.getBBox().y - height/2
	fly(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY)
})

var point3 = svg.paper.circle(614, 153, 10).click(function(){
	overAirplaneX = this.getBBox().x - width/2
	overAirplaneY = this.getBBox().y - height/2
	fly(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY)
})

var point4 = svg.paper.circle(158, 408, 10).click(function(){
	overAirplaneX = this.getBBox().x - width/2
	overAirplaneY = this.getBBox().y - height/2
	fly(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY)
})
var point5 = svg.paper.circle(369, 148, 10).click(function(){
	overAirplaneX = this.getBBox().x - width/2
	overAirplaneY = this.getBBox().y - height/2
	fly(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY)
})
var point6 = svg.paper.circle(662, 597, 10).click(function(){
	overAirplaneX = this.getBBox().x - width/2
	overAirplaneY = this.getBBox().y - height/2
	fly(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY)
})
var point7 = svg.paper.circle(130, 227, 10).click(function(){
	overAirplaneX = this.getBBox().x - width/2
	overAirplaneY = this.getBBox().y - height/2
	fly(startAirplaneX, startAirplaneY, overAirplaneX, overAirplaneY)
})

