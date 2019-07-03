
/*

version 0.1
28.02.19
last changes : drawLine()
revolveSinglePointOnAxis added

*/



/*

revolvePointsArrayOnAxis copies a passed array of points arround an axis.
This axis goes from the origin to the passed vector3 in the axis argument.
One must specify a number of sections, which is the number of copies of the passed
array that the function will add arround the axis.

Two optional parameters allow to give a max angle for the revolution. The distance
between each sections will be scaled accordingly. The other parameter is a boolean
to specify if one want the new array of points to be drawn as a line on the scene.

*/


function revolvePointsArrayOnAxis(ptsArrayToRevolve, axis, sections, maxAngle, drawOnScreen) {


	var arrayToReturn = []
	arrayToReturn.push(ptsArrayToRevolve);

	axis.normalize();



	// this set default values for optional arguments

	if (maxAngle == undefined) {
		maxAngle = 2 * Math.PI;
	};

	if (drawOnScreen == undefined) {
			drawOnScreen = false;
	};


	// start a loop for as many sections as required in argument

	for (y=0 ; y<sections ; y++) {

		let rotatedArray = []
		arrayToReturn.push(rotatedArray);

		let angle = maxAngle / sections ;
		angle = (y + 1) * angle;


		// start a loop for as many point in the points array passed

		for (i=0 ; i<ptsArrayToRevolve.length ; i++) {

			let point = new THREE.Vector3(0,0,0).copy(ptsArrayToRevolve[i]);

			rotatedArray.push(point);

			point.applyAxisAngle(axis, angle);

			// console.log(ptsArrayToRevolve[i]);
			// console.log(rotatedArray[i]);
		};




		// draw each new points array on the screen

		if (drawOnScreen == true) {

			drawLine(rotatedArray, scene);

		};

	};

	return arrayToReturn

};











/*

revolveSinglePointOnAxis works like revolvePointsArrayOnAxis, but with only one vector3.
"axis" argument is a vector3 indicating a direction starting from the origin.
sections is the number of points that will be created.
maxAngle is the angle around which the revolution will occur.
drawOnScreen will add points in scene for every point in the array.

*/

function revolveSinglePointOnAxis(vector3, axis, sections, maxAngle, drawOnScreen) {


	var arrayToReturn = []
	arrayToReturn.push(vector3);

	axis.normalize();



	// this set default values for optional arguments

	if (maxAngle == undefined) {
		maxAngle = 2 * Math.PI;
	};

	if (drawOnScreen == undefined) {
			drawOnScreen = false;
	};


	// start a loop for as many sections as required in argument

	for (y=0 ; y<sections ; y++) {

		let angle = maxAngle / sections ;
		angle = (y + 1) * angle;

		let point = new THREE.Vector3().copy(vector3);

		arrayToReturn.push(point);

		point.applyAxisAngle(axis, angle);

		// draw each new points array on the screen

		if (drawOnScreen == true) {

			drawVector3(point, scene);

		};

	};

	return arrayToReturn

};














/*

GeometryFromSections is meant to create a mesh that passes through sections lines.
An array of points array must be passed in.
The function does not draw the new geometry on the screen, a material and a mesh must be created
outside the function for this purpose.

*/


function GeometryFromSections(sections) {

	var geometry = new THREE.Geometry();
	var secLength = sections[0].length;

	/*
	this loop iterate through all sections, whereas the next skip the last one
	as it would throw an error.
	*/

	for ( i=0 ; i<sections.length ; i++) {

		// check that every sections has the same number of points

		if (sections[i].length != secLength) {
			console.log("sections must have the same number of points");
			return;
		};

		// add each point to the vertices of the whole geometry

		for ( y=0 ; y<sections[i].length ; y++ ) {
			geometry.vertices.push(sections[i][y]);
		};

	};



	/*
	This loop iterate through all the sections but the last, as it would throw
	an error.
	*/

	for ( i=0 ; i<sections.length - 1 ; i++) {

		/*
		This loop iterate through all point of the section but the last,
		as it will have already created a face with the last point and
		the one before.
		*/

		for ( w=0 ; w<secLength - 1 ; w++ ) {

			sectionAddition = ( secLength * i);

			geometry.faces.push(

				new THREE.Face3(
					w + sectionAddition,
					w + sectionAddition + secLength,
					w + sectionAddition + 1
				),

				new THREE.Face3(
					w + sectionAddition + 1,
					w + sectionAddition + secLength,
					w + sectionAddition + secLength + 1
				)

				);

		};

	};

	geometry.computeVertexNormals();

	return geometry;

};











/*

geometrySymmetryWithPlane return a new geometry : the symmetry of the passed geometry, according
to the past plane.
However for unknown reason, the function sawp the values of geometry and symGeometry : the passed object
is the new symmetric object become symmetric, whereas the return new geometry is identical to the
one passed as argument.

*/


function GeometrySymmetryWithPlane(geometryToToggle, plane) {

	plane.normalize();

	let symGeometry = new THREE.Geometry().copy(geometryToToggle);

	/*
	This loop iterate through every point in the passed geometry,
	find its closest point on the plane, then take the difference to report on the other side
	of the plane.
	*/

	for ( i=0 ; i<geometryToToggle.vertices.length ; i++ ) {

		let projectedPoint = plane.projectPoint(geometryToToggle.vertices[i], new THREE.Vector3());

		xFactor = projectedPoint["x"] - geometryToToggle.vertices[i]["x"];
		yFactor = projectedPoint["y"] - geometryToToggle.vertices[i]["y"];
		zFactor = projectedPoint["z"] - geometryToToggle.vertices[i]["z"];

		projectedPoint["x"] += xFactor;
		projectedPoint["y"] += yFactor;
		projectedPoint["z"] += zFactor;

		geometryToToggle.vertices[i] = projectedPoint;

	};

	/*
	here both geometryToToggle's and symGeometry's normals must be recomputed, because for unknown reason
	the function swap the values of the two variables.
	*/

	geometryToToggle.computeVertexNormals();
	symGeometry.computeVertexNormals();

	return symGeometry;

};











/*

The planeScale function is intended to scale a pointsArray into one direction,
perpendicular to a plane passed in argument.
The last argument is a scale factor : numbers up to 1 increase the distance,
while values bellow will scale down.

*/

function planeScale(pointsArray, plane, scaleFactor) {


	if (scaleFactor == undefined) {
		scaleFactor = 1.5;
	};


	for (i=0 ; i<pointsArray.length ; i++) {

		let projectedPoint = plane.projectPoint(pointsArray[i], new THREE.Vector3());


		let xFactor = (projectedPoint["x"] - pointsArray[i]["x"]) ;
		let yFactor = (projectedPoint["y"] - pointsArray[i]["y"]) ;
		let zFactor = (projectedPoint["z"] - pointsArray[i]["z"]) ;

		pointsArray[i]["x"] = projectedPoint["x"] - (xFactor * scaleFactor);
		pointsArray[i]["y"] = projectedPoint["y"] - (yFactor * scaleFactor);
		pointsArray[i]["z"] = projectedPoint["z"] - (zFactor * scaleFactor);
	
	};

};






/*

ScaledPointsArray is almost the same as planeScale, at the difference that
it doesn't scale the passed array of vertices, but return a scaled array instead.
The last argument, scaleFactor, is a float number. scaleFactor = 0 will return
the array unscaled, numbers up to 1 will raise distances, and bellow 1 will
reduce distances.

*/


function ScaledPointsArray(pointsArray, plane, scaleFactor) {

	let newArray = []

	if (scaleFactor == undefined) {
		scaleFactor = 1.5;
	};


	for (i=0 ; i<pointsArray.length ; i++) {

		let projectedPoint = plane.projectPoint(pointsArray[i], new THREE.Vector3());


		let xFactor = (projectedPoint["x"] - pointsArray[i]["x"]) ;
		let yFactor = (projectedPoint["y"] - pointsArray[i]["y"]) ;
		let zFactor = (projectedPoint["z"] - pointsArray[i]["z"]) ;

		newArray[i] = new THREE.Vector3();

		newArray[i]["x"] = projectedPoint["x"] - (xFactor * scaleFactor);
		newArray[i]["y"] = projectedPoint["y"] - (yFactor * scaleFactor);
		newArray[i]["z"] = projectedPoint["z"] - (zFactor * scaleFactor);
	
	};

	return newArray ;

};












/*

movePointsArray is a simple function that iterate through an array of
points, to apply some position change to each of them.

*/

function movePointsArray(pointsArray, vectorToAdd) {

	for (i=0 ; i<pointsArray.length ; i++) {

		pointsArray[i].add(vectorToAdd);

	};
};










/*

RandomVividColor return a random Three.Color object.

*/

function RandomColor() {

	let rFactor = Math.random()
	let gFactor = Math.random()
	let bFactor = Math.random()

	let color = new THREE.Color(rFactor, gFactor, bFactor);

	return color ;
};






/*

RandomVividColor returns a color whose r+g+b values = 1.5.
this makes the color vivid (but not necessarily primary).

*/

function RandomVividColor() {

	let rFactor = Math.random();
	let gFactor = Math.random();
	let bFactor = Math.random();

	let sumFactors = rFactor + gFactor + bFactor;

	rFactor = 1.5 * rFactor / sumFactors;
	gFactor = 1.5 * gFactor / sumFactors;
	bFactor = 1.5 * bFactor / sumFactors;

	let color = new THREE.Color(rFactor, gFactor, bFactor);

	return color ;
};






/*

DarkerColor takes a color as argument and return a darker color
according to the second argument : a darkening factor contained
within 0 and 1, where 1 is black and 0 the passed color unchanged.

LighterColor is similar to DarkerColor, but returns a lighter
color instead. 1 is white, 0 is the passed color unchanged.

*/

function DarkerColor(color, darkeningFactor) {

	if (darkeningFactor < 0 || darkeningFactor > 1) {
		console.log("darkeningFactor must be contained within 0 and 1");
		return;
	};

	let f = 1 - darkeningFactor;

	let currentSum = color["r"] + color["g"] + color["b"];
	let targetSum = (0 + currentSum) * f;

	let rFactor = targetSum * color["r"] / currentSum;
	let gFactor = targetSum * color["g"] / currentSum;
	let bFactor = targetSum * color["b"] / currentSum;

	let newColor = new THREE.Color(rFactor, gFactor, bFactor);

	return newColor ;
};



function LighterColor(color, lighteningFactor) {

	if (lighteningFactor < 0 || lighteningFactor > 1) {
		console.log("lighteningFactor must be contained within 0 and 1");
		return;
	};

	let rFactor = color["r"] + ((1 - color["r"]) * lighteningFactor);
	let gFactor = color["g"] + ((1 - color["g"]) * lighteningFactor);
	let bFactor = color["b"] + ((1 - color["b"]) * lighteningFactor);

	let newColor = new THREE.Color(rFactor, gFactor, bFactor);

	return newColor ;
};











function either(option1, option2, chancesOutOf1) {

	if (chancesOutOf1 == undefined) {chancesOutOf1 = 0.5};

	let randomNumber = Math.random();

	if (randomNumber < chancesOutOf1) {
		return option1 ;
	} else {
		return option2 ;
	};
};












/*

BisectorVector return a vector on the bisector line between the two lines formed by
the three passed vectors. It first find the length of the shortest line, then find the
vector on the longest line at the same distance. Then it return the middle point.

*/


function BisectorVector(v1, v2, v3) {


	let distanceToV1 = v2.distanceTo(v1);
	let distanceToV3 = v2.distanceTo(v3);

	let tVector;
	let shorterVector;


	if (distanceToV1 <= distanceToV3) {
					
		let t = distanceToV1 / distanceToV3;
		tVector = PointOnLine(v2, v3, t);
		shorterVector = v1;
	};


	if (distanceToV1 > distanceToV3) {

		let t = distanceToV3 / distanceToV1;
		tVector  = PointOnLine(v2, v1, t);
		shorterVector = v3;
	};


	let bisectorVector = PointOnLine(tVector, shorterVector, 0.5);
	
	return bisectorVector ;

};












/*

PointOnLine return a vector between two passed vector, at a t distance.
t is a normalize factor between 0 and 1.
t = 0 will return the vector v1. t = 1 will return the vector v2.

*/

function PointOnLine(v1, v2, t) {

	/*
	For each direction, lerp compute a new value from the t normalized factor;
	*/

	let x = THREE.Math.lerp(v1["x"], v2["x"], t);
	let y = THREE.Math.lerp(v1["y"], v2["y"], t);
	let z = THREE.Math.lerp(v1["z"], v2["z"], t);

	return new THREE.Vector3(x, y, z);
};













/*

radiansBetweenThreePoints return the angle in radians formed by
the three passed vector, at the point of the middle one (v2);
To this end, it first find the bisector vector between v1 and v3,
which will be called v4. Then it compute the angle from a cosine relation
between v1, v2, and v4.

*/

function radiansBetweenThreePoints(v1, v2, v3) {


	let v4 = BisectorVector(v1, v2, v3);

	let adjacent = v2.distanceTo(v4);
	let oppose = v1.distanceTo(v4);


	/*
	It's very important to check which one of the two segments here is
	of the hypotenuse length, as the BisectorVector constructor place its
	vector a the middle point between the end of the shortest segment of
	the angle, and a point of equal length on the longest segment.
	*/

	let hypotenuse;
	let v2v1 = v2.distanceTo(v1);
	let v2v3 = v2.distanceTo(v3);

	if (v2v1 < v2v3) {
		hypotenuse = v2v1;
	} else {
		hypotenuse = v2v3;
	};

	let angle = 2 * ( Math.acos(adjacent / hypotenuse) );

	return angle ;

};












/*

drawLine take an array of points as argument, and draw lines on the screen between
these points.
optionally a color can be passed for the material applied to the line, default is black.
If isClosed = true, then drawLine will draw a line between the start point
and the end point.

*/


function drawLine(pointsArray, scene, isClosed, color) {

	let material;
	let line;
	let geometry = new THREE.BufferGeometry().setFromPoints(pointsArray);

	if (color == undefined) {
		material = new THREE.LineBasicMaterial({color: 0x000000});
	} else {
		material = new THREE.LineBasicMaterial({color: color});
	};

	if (isClosed == undefined) {isClosed = false};


	if (isClosed == false) {

		line = new THREE.Line(geometry, material);
		scene.add(line);
	};


	if (isClosed == true) {

		line = new THREE.LineLoop(geometry, material);
		scene.add(line);
	};
	
	return line;

};












/*

PolylineOffsetIntersection return a vector on the bisector of two segments,
at an equal given distance from each segment. It uses radiansBetweenThreePoints()
and the passed offset distance to get the distance of the new point on the bisector
with a sine equation. It then scale up the vector created by BisectorVector
from the two segments.

*/


function PolylineOffsetIntersection(v1, v2, v3, distanceOffset) {

	let bisectorVector = BisectorVector(
		v1,
		v2,
		v3
		);

	let angle = radiansBetweenThreePoints(
		v1,
		v2,
		v3
		) / 2;


	let distanceBisector = v2.distanceTo(bisectorVector);
	let distanceIntersection = distanceOffset / Math.sin(angle);
	let scaleFactor = distanceIntersection / distanceBisector;


	let intersection = ScaledVector3FromStartPoint(bisectorVector, v2, scaleFactor);

	return intersection ;
};














/*

ScaledVector3FromStartPoint apply a 3D scale to a vector from a passed start point.
The base scale is 1, lower values will scale down and higher will scale up.

*/


function ScaledVector3FromStartPoint(vecToScale, vecStart, scaleFactor) {

	// This first get the distances from the start point to the one to scale

	let x = vecToScale["x"] - vecStart["x"];
	let y = vecToScale["y"] - vecStart["y"];
	let z = vecToScale["z"] - vecStart["z"];

	// Then the new vector is raised of the same distances multiplied by the scale factor.

	let scaledPoint = new THREE.Vector3(
		vecStart["x"] + ( x * scaleFactor ),
		vecStart["y"] + ( y * scaleFactor ),
		vecStart["z"] + ( z * scaleFactor )
		);

	return scaledPoint ;

};















/*

drawVector is a simple way to get a vector3 drawn on the screen as a small sphere.
color and diameter arguments have default values to make the use faster.

*/

function drawVector3(vector3, scene, color, sphereDiam) {

	if (sphereDiam == undefined) {sphereDiam = 0.2};
	if (color == undefined) {color = 0x000000};

	if (vector3.isVector3 != true) {

	} else {

		let geometry = new THREE.SphereGeometry(sphereDiam / 2, 16, 16);
		let material = new THREE.MeshBasicMaterial({color: color});
		let mesh = new THREE.Mesh(geometry, material);
		mesh.position.set(vector3["x"], vector3["y"], vector3["z"]);

		scene.add(mesh);
	};

};











/*

ClosedPolylineOffset return a new array of vectors, offset from the passed one
at a passed distance, with all this vectors on the bisectors formed by the angles
of the passed array.
Thanks to a modulo in the loop, it iterate also between the first and the last vectors.

*/

function ClosedPolylineOffset(vectorsArray, distanceOffset) {

	let offsetPolyline = [];

	for (let i=0 ; i<vectorsArray.length ; i++) {
		
		offsetPolyline.push(PolylineOffsetIntersection(
			vectorsArray[ (i + vectorsArray.length -1) % vectorsArray.length ],
			vectorsArray[ i % vectorsArray.length ],
			vectorsArray[ (i + 1) % vectorsArray.length ],
			distanceOffset
			));
		
	};

	return offsetPolyline ;

};


















function ClosestPointToTriangle(vector3, vec3Array) {

	let plane = new THREE.Plane()
	plane.setFromCoplanarPoints(vec3Array[0], vec3Array[1], vec3Array[2]);

	let ray = new THREE.Ray(vector3, plane.normal);

	let distanceToPlane = ray.distanceToPlane(plane);

	let intersectP = ray.intersectTriangle(
		vec3Array[0],
		vec3Array[1],
		vec3Array[2],
		false,
		new THREE.Vector3()
	);


	/*
		DistanceToPlane == null if the plane's normal is in the wrong direction
		(meaning the ray "hit the back"). So when distanceToPlane == null,
		we negate the plane and recheck for intersection.
	*/
	if (distanceToPlane == null) {

		let invertedPlane = new THREE.Plane().copy(plane).negate();

		ray = new THREE.Ray(vector3, invertedPlane.normal);

		intersectP = ray.intersectTriangle(
			vec3Array[0],
			vec3Array[1],
			vec3Array[2],
			false,
			new THREE.Vector3()
		);
	};


	/*
		If intersectP == null, it means that the ray directed to the triangle's plane
		does not hit the triangle, then we have to look for the closest point on the
		triangle's perimeter.
	*/
	if (intersectP == null) {

		let closestPoint = new THREE.Vector3(Infinity, Infinity, Infinity);
		
		for (let i=0 ; i<3 ; i++) {

			let line3 = new THREE.Line3( vec3Array[i % 2], vec3Array[(i + 1) % 2] );
			let pointOnLine = line3.closestPointToPoint( vector3, true, new THREE.Vector3() );

			if ( vector3.distanceTo(closestPoint) >
				vector3.distanceTo(pointOnLine) ) {

				closestPoint = pointOnLine;
			};

		};

		intersectP = closestPoint;

	};

	return intersectP ;
};













/*
	attractPolylineOnGeometry() takes an array of vector3 and find the closest point
	for each of these point on the passed geometry. It returns the array of these new
	points.
*/


function attractPolylineOnGeometry(polyline, geometry) {

	let attractedPolyline = []

	// Loop for each point
	for (i=0 ; i<polyline.length ; i++) {

		let attractedVector = new THREE.Vector3(Infinity, Infinity, Infinity);
		
		// Loop for each face
		for (j=0 ; j<geometry.faces.length ; j++) {

			let vec = ClosestPointToTriangle(
			polyline[i],
			[
				geometry.vertices[ geometry.faces[j]['a'] ],
				geometry.vertices[ geometry.faces[j]['b'] ],
				geometry.vertices[ geometry.faces[j]['c'] ],
			]);

			if ( polyline[i].distanceTo(attractedVector) >
				polyline[i].distanceTo(vec) ) {

				attractedVector = vec;
			};
		};

		attractedPolyline.push(attractedVector);
		
	};

	return attractedPolyline;
};














/*
	ExtrudePolyline return an extrusion geometry from the passed polyline.
	It require a directionVector argument, that also provide the distance.
	If "bothSides" is set to true, extrudePolyline() will offset the polyline
	in the opposite direction and create the geometry from the two new sections
*/


function extrudePolyline(v3Array, directionVector, bothSides) {

	let offset = [];
	let negOffset = [];
	let newGeom;

	for (i=0 ; i<v3Array.length ; i++) {

		let newVector = new THREE.Vector3().copy(v3Array[i]);

		newVector.add(directionVector);
		offset.push(newVector);
	};

	if (bothSides == true) {

		for (i=0 ; i<v3Array.length ; i++) {

			let negativeDir = new THREE.Vector3().copy(directionVector).negate();
			let newVector = new THREE.Vector3().copy(v3Array[i]);

			newVector.add(negativeDir);
			negOffset.push(newVector);
		};

		newGeom = GeometryFromSections([negOffset, offset]);

	} else {

		newGeom = GeometryFromSections([v3Array, offset]);
	};

	return newGeom ;
};










function subdividePolyline(v3Array, segments, isClosed) {

	let newPolyline = [];
	let t = 1 / segments;

	// Loop for each vector3 in the array
	for (let i=0 ; i<v3Array.length ; i++) {

		newPolyline.push(v3Array[i]);
		
		// Loop for each new subdivision to make
		for (let j=1 ; j<segments ; j++) {

			let newVector = PointOnLine(
				v3Array[ i % v3Array.length ],
				v3Array[ (i + 1) % v3Array.length ],
				t * j
				);

			newPolyline.push(newVector);
		};
	};

	return newPolyline;
};
















