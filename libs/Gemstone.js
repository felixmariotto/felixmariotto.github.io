
/*
	version: 0.1
	28.02.19
	last changes: gemstoneGeometry produce bufferGeometry
	ProngsEndFromGirdle added
*/


function Gemstone() {

	this.parameters = {
		contour: undefined,
		width: undefined,
		depth: undefined, 
		height: undefined,
		isProngOnCorner: undefined,
		extraProng: undefined
	},

	this.contourMarquise = [
		new THREE.Vector3(0, 0, -5),
		new THREE.Vector3(2.2, 0, -3),
		new THREE.Vector3(3, 0, 0),
		new THREE.Vector3(2.2, 0, 3),
		new THREE.Vector3(0, 0, 5),
		new THREE.Vector3(-2.2, 0, 3),
		new THREE.Vector3(-3, 0, 0),
		new THREE.Vector3(-2.2, 0, -3)
	],


	this.contourPear = [
		new THREE.Vector3(0, 0, -4),
		new THREE.Vector3(2.3, 0, -3),
		new THREE.Vector3(3, 0, -0.5),
		new THREE.Vector3(2.3, 0, 3),
		new THREE.Vector3(0, 0, 6),
		new THREE.Vector3(-2.5, 0, 3),
		new THREE.Vector3(-3, 0, -0.5),
		new THREE.Vector3(-2.3, 0, -3)
	],


	this.contourTroidia = [
		new THREE.Vector3(0, 0, -3.2),
		new THREE.Vector3(4.2, 0, -2.4),
		new THREE.Vector3(2.7, 0, 1.6),
		new THREE.Vector3(0, 0, 4.7),
		new THREE.Vector3(-2.7, 0, 1.6),
		new THREE.Vector3(-4.2, 0, -2.4)
	],


	this.contourOval = [
		new THREE.Vector3(0, 0, -5),
		new THREE.Vector3(2.8, 0, -4),
		new THREE.Vector3(3.7, 0, 0),
		new THREE.Vector3(2.8, 0, 4),
		new THREE.Vector3(0, 0, 5),
		new THREE.Vector3(-2.8, 0, 4),
		new THREE.Vector3(-3.7, 0, 0),
		new THREE.Vector3(-2.8, 0, -4)
	],


	this.contourEmerald = [
		new THREE.Vector3(2.2, 0, -5),
		new THREE.Vector3(3.4, 0, -3.8),
		new THREE.Vector3(3.4, 0, 3.8),
		new THREE.Vector3(2.2, 0, 5),
		new THREE.Vector3(-2.2, 0, 5),
		new THREE.Vector3(-3.4, 0, 3.8),
		new THREE.Vector3(-3.4, 0, -3.8),
		new THREE.Vector3(-2.2, 0, -5)
	],


	this.contourTrapeze = [
		new THREE.Vector3(2.2, 0, -5),
		new THREE.Vector3(3.5, 0, -3.5),
		new THREE.Vector3(2.5, 0, 3.8),
		new THREE.Vector3(1.5, 0, 5),
		new THREE.Vector3(-1.5, 0, 5),
		new THREE.Vector3(-2.5, 0, 3.8),
		new THREE.Vector3(-3.5, 0,  -3.5),
		new THREE.Vector3(-2.2, 0, -5)
	]


	this.randomContour = function() {

		/*
		randomContour put one of the available contours in the
		Gemstone.contour parameter.
		*/

		let randomIndex = Math.floor( Math.random() * 6 );
		let contourArray = [
				this.contourMarquise,
				this.contourPear,
				this.contourTroidia,
				this.contourOval,
				this.contourEmerald,
				this.contourTrapeze
			];

		this.parameters.contour = contourArray[randomIndex];

		switch(randomIndex) {
			case 0 :
				this.parameters.isProngOnCorner = true ;
				this.parameters.extraProng = [0, 4];
			break
			case 1 :
				this.parameters.isProngOnCorner = true ; 
				this.parameters.extraProng = 4;
			break
			case 2 : this.parameters.isProngOnCorner = true ; break
			case 3 : this.parameters.isProngOnCorner = true ; break
			case 4 : this.parameters.isProngOnCorner = false ; break
			case 5 : this.parameters.isProngOnCorner = false ; break
		}
	},


	this.randomSize = function() {

		/*
		randomSize will create random width, height and depth values to put in
		Gemstone.parameters, according to each contour requirements.
		It need Gemstone.contour not to be undefined.
		*/

		switch(this.parameters.contour) {


			case undefined :
				console.log("Gemstone.parameters.contour is undefined");
				break;


			case this.contourMarquise :

				this.parameters.depth = 20;

				this.parameters.width = THREE.Math.randInt(8, 18);

				this.parameters.height = THREE.Math.randInt(10, 10 + ((this.parameters.width - 8) / 3));

				break;


			case this.contourPear : 

				this.parameters.depth = 20;

				this.parameters.width = THREE.Math.randInt(10, 15);

				this.parameters.height = THREE.Math.randInt(8, 10 + ((this.parameters.width - 10) / 2));

				break;


			case this.contourTroidia :

				this.parameters.depth = 20;

				this.parameters.width = THREE.Math.randInt(10, 16);

				this.parameters.height = THREE.Math.randInt(8, 10 + ((this.parameters.width - 10) / 4));

				break;


			case this.contourOval :

				this.parameters.depth = 20;

				this.parameters.width = THREE.Math.randInt(11, 18);

				this.parameters.height = THREE.Math.randInt(8, 10 + ((this.parameters.width - 10) / 4));

				break;


			case this.contourEmerald :

				this.parameters.depth = 20;

				this.parameters.width = THREE.Math.randInt(10, 20);

				this.parameters.height = THREE.Math.randInt(8, 10 + ((this.parameters.width - 10) / 4));

				break;


			case this.contourTrapeze :

				this.parameters.depth = 20;

				this.parameters.width = THREE.Math.randInt(10, 20);

				this.parameters.height = THREE.Math.randInt(8, 10 + ((this.parameters.width - 10) / 4));

				break;
		}
	}
}








/*

	ProngsEndFromGirdle get the position of the end of the prongs of a passed
	gemstone. I returns an array of vector3. This function need some parameters
	of the gemstone object, like isPointyStone and extraProngs. If a new contour is
	designed, one has to make sure these parameters are fullfilled in the gemstone
	methods.

*/

function ProngsEndFromGirdle(gemstone, gemGeom) {

	let prongTops = [];

	if (gemstone.parameters.isProngOnCorner) {

		let line = gemGeom.userData.bottomGirdle;
		let prongsCounter = line.length - 1;

		while (prongsCounter >= 0) {

			let prongPoint = line[prongsCounter];
			prongTops.push(prongPoint);
			prongsCounter -= 2;
		};

		if (gemstone.parameters.extraProng != undefined) {

			if (Array.isArray(gemstone.parameters.extraProng)) {

				for (i=0 ; i<gemstone.parameters.extraProng.length ; i++) {

					let prongPoint = line[gemstone.parameters.extraProng[i]];
					prongTops.push(prongPoint);
				}

			} else {

				let prongPoint = line[gemstone.parameters.extraProng];
				prongTops.push(prongPoint);
			}
		}

	} else {

		let line = gemGeom.userData.bottomGirdle;
		let prongsCounter = line.length - 1;

		while (prongsCounter >= 0) {

			let prongPoint = PointOnLine(line[prongsCounter], line[prongsCounter -1], 0.5);
			prongTops.push(prongPoint);
			prongsCounter -= 2;
		};
	};

	return prongTops;
}









function getBackFrameOffset(girdle) {

	let backFrameLine = [];

	for (i=0 ; i<girdle.length ; i++) {
		let newVector = new THREE.Vector3().copy(girdle[i]);
		newVector['y'] = 0;
		backFrameLine.push(newVector);
	}

	backFrameLine = ClosedPolylineOffset(backFrameLine, 2.8);

	return backFrameLine;
}







function makeBackFrameGeometry(polyline) {

	let curve = new THREE.CatmullRomCurve3(polyline, true);
	curve.tension = 0.2 ;
	var geometry = new THREE.TubeBufferGeometry( curve, 16, 1.3, 8, false );
	
	return geometry ;
};







/*

GemstoneBufferGeometry returns a buffer goemetry of gemstone, that it create from
a passed contour (an array of vector3), and passed dimensions. It offset the passed contour
in height and scale it to create new vertices positions.

*/


function GemstoneBufferGeometry(contour, width, height, depth) {


	/*
	Scaling of the contour and the tip to match the passed
	x and y values.
	*/

	let tip = new THREE.Vector3(0, 0, 0);
	let xContour = 0 ;
	let userData = {
		width: width,
		height: height,
		depth: depth
	};

	for (i=0 ; i<contour.length ; i++) {

		let compare = contour[i]["x"];
		if ( xContour < compare ) { xContour = compare };
	};



	let zContour = 0 ;

	for (i=0 ; i<contour.length ; i++) {

		let compare = contour[i]["z"];
		if ( zContour < compare ) { zContour = compare };
	};

	let xScaleFactor = (width / 2) / xContour;
	let zScaleFactor = (depth / 2) / zContour;

	let xPlane = new THREE.Plane(new THREE.Vector3(1,0,0));
	let zPlane = new THREE.Plane(new THREE.Vector3(0,0,1));

	planeScale(contour, xPlane, xScaleFactor);
	planeScale(contour, zPlane, zScaleFactor);



	// offsets

	/*
	This part creates different offset of the contour at different height,
	in order to get all the vertices needed to create the faces of the stone.
	*/

	for (i=0 ; i<contour.length ; i++) {
		contour[i]["y"] = height;
	};

	let distanceOffsetTable = ( (width + depth) / 2 ) / 5.5 ;

	let tableContour = ClosedPolylineOffset(contour, distanceOffsetTable);
	userData.tableContour = tableContour;

	let crownHeigth = height / 5;

	for (i=0 ; i<contour.length ; i++) {
		contour[i]["y"] -= crownHeigth;
	};

	let midCrown = ClosedPolylineOffset(contour, distanceOffsetTable / 2);

	for (i=0 ; i<midCrown.length ; i++) {
		midCrown[i]["y"] += crownHeigth / 1.6;
	};

	let midCrownMiddlePoints = [];

	for (i=0 ; i<midCrown.length ; i++) {

		let line = new THREE.Line3(midCrown[i], midCrown[(i + 1) % midCrown.length]);

		midCrownMiddlePoints.push( line.getCenter(new THREE.Vector3()) );
	}

	let bottomGirdle = [];
	userData.bottomGirdle = bottomGirdle;

	for (i=0 ; i<contour.length ; i++) {

		bottomGirdle.push( new THREE.Vector3().copy(contour[i]) );
		bottomGirdle[i]["y"] -= 0.5 ;
	};

	let distanceOffsetMidPavilion = ( (width + depth) / 2 ) / 7 ;
	let midPavilion = ClosedPolylineOffset(bottomGirdle, distanceOffsetMidPavilion);

	for (i=0 ; i<midPavilion.length ; i++) {
		midPavilion[i]["y"] = height / 3.5 ;
	};

	let midPavilionMiddlePoints = [];

	for (i=0 ; i<midPavilion.length ; i++) {

		let line = new THREE.Line3(midPavilion[i], midPavilion[(i + 1) % midPavilion.length]);

		midPavilionMiddlePoints.push( line.getCenter(new THREE.Vector3()) );
	}



	// drawing

	/*
	as BufferGeometry doesn't take Vector3 nor Face3 in argument, these coordinates
	are extracted from the vector3 arrays
	*/

	let geometry = new THREE.BufferGeometry();
	geometry.userData = userData;
	let l = contour.length;
	let vertices = [];
	let indices = [];

		// geometry's array of vertices

	function pushVerticesFromVector3(array, vector3) {
		let [x, y, z] = [ vector3['x'], vector3['y'], vector3['z'] ];
		array.push(x, y, z);
	};

	for (i=0 ; i<l ; i++) {
		pushVerticesFromVector3(vertices, contour[i])
	};

	for (i=0 ; i<l ; i++) {
		pushVerticesFromVector3(vertices, midCrownMiddlePoints[i])
	};
	
	for (i=0 ; i<l ; i++) {
		pushVerticesFromVector3(vertices, tableContour[i])
	};

	for (i=0 ; i<l ; i++) {
		pushVerticesFromVector3(vertices, bottomGirdle[i])
	};

	for (i=0 ; i<l ; i++) {
		pushVerticesFromVector3(vertices, midPavilionMiddlePoints[i])
	};

	vertices.push(tip['x'], tip['y'], tip['z']);

	

		// geometry's array of faces

		// first raw of facets up to the girdle
	for (i=0 ; i<l ; i++) {

		indices.push(
			i,
			i + l,
			(i + 1) % l
			);
	}

		// first raw of vertical facet of the crown
	for (i=0 ; i<l ; i++) {

		indices.push(
			(2 * l) + ((i + 1) % l),
			l + ((i + 1) % l),
			(i + 1) % l
			);
	}

		// second raw of vertical facet of the crown
	for (i=0 ; i<l ; i++) {

		indices.push(
			(2 * l) + ((i + 1) % l),
			(i + 1) % l,
			l + (i % l)
			);
	}

		// top raw of facets of the crown
	for (i=0 ; i<l ; i++) {

		indices.push(
			i + l,
			i + (2 * l),
			(2 * l) + ((i + 1) % l)
			);
	}

		// table
	for (i=0 ; i < l-2 ; i++) {

		indices.push(
			l * 2,
			((l * 2) + i + 2) % (l * 3),
			((l * 2) + i + 1) % ((l * 3) - 1)
			);
	}

		// girdle 1
	for (i=0 ; i<l ; i++) {

		indices.push(
			i,
			(i + 1) % l,
			i + (3 * l)
			);
	}

		// girdle 2
	for (i=0 ; i<l ; i++) {

		indices.push(
			(i + 1) % l,
			((i + 1) % l) + (3 * l),
			i + (3 * l)
			);
	}

		// top pavilion
	for (i=0 ; i<l ; i++) {

		indices.push(
			((i + 1) % l) + (3 * l),
			i + (4 * l),
			i + (3 * l)
			);
	}

		// mid pavilion
	for (i=0 ; i<l ; i++) {

		indices.push(
			((i + 1) % l) + (3 * l),
			((i + 1) % l) + (4 * l),
			i + (4 * l)
			);
	}

		// tip
	for (i=0 ; i<l ; i++) {

		indices.push(
			((i + 1) % l) + (4 * l),
			(l * 5),
			i + (4 * l)
			);
	}
	
	geometry.setIndex( indices );
	geometry.addAttribute('position', new THREE.Float32BufferAttribute( vertices, 3 ));

	geometry.computeVertexNormals();

	return geometry ;

};