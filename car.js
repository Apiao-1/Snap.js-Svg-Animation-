// car_running
var svg = Snap("#svg")

var pathPoints = [[285,210], [186,259], [381,388], [211,498], [421,388], [591,488]]

var currentPointIndex = 0, direction = 1

var car = svg.select("#car")
car.attr('x', pathPoints[0][0])
car.attr('y', pathPoints[0][1])

function move() {
	if((currentPointIndex === pathPoints.length - 1) && direction > 0
		|| (currentPointIndex === 0) && direction < 0) {
		direction = - direction
	}

	var currentPoint = pathPoints[currentPointIndex]
	var nextPoint = pathPoints[currentPointIndex + direction]
	currentPointIndex = currentPointIndex + direction

	var imageUrl = ""

	if(nextPoint[0] < currentPoint[0] && nextPoint[1] < currentPoint[1])
		imageUrl = "img/car/car_1.png"
	else if(nextPoint[0] > currentPoint[0] && nextPoint[1] < currentPoint[1])
		imageUrl = "img/car/car_2.png"
	else if(nextPoint[0] > currentPoint[0] && nextPoint[1] > currentPoint[1])
		imageUrl = "img/car/car_3.png"
	else if(nextPoint[0] < currentPoint[0] && nextPoint[1] > currentPoint[1])
		imageUrl = "img/car/car_4.png"

	car.attr('xlink:href', imageUrl)

	car.animate({x: nextPoint[0], y: nextPoint[1]}, speed(nextPoint[0],nextPoint[1], currentPoint[0], currentPoint[1]), move);
}


function speed(nextPointX,nextPointY,currentPointX,currentPointY)
{
	var distance = Math.sqrt((Math.pow((nextPointX-currentPointX), 2)+Math.pow((nextPointY-currentPointY), 2)))
	return distance*5
}

move()