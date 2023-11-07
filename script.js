/*  We need 4 elements to get started 
*   -   A scene that will contain objects
*   -   Some objects
*   -   A camera
*   -   A renderer
*/

/*******        Scene       ********/
//  Like a container
//  We put objects, models, lights, etc. in it
//  At some point we ask Three.js to render that scene
const scene = new THREE.Scene();

/*******        Objects       ********
*   Can be many things
*  -   Primitive geometries
*  -   imported models
*  -   Particles
*  -   Lights
*  -   Etc.
*/

/*******        Primitive geometries       ********/
// We need to create a Mesh : combination of geometry and a material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

/*******        Camera       ********
*   -   Not visible
*   -   Serve as point of view when doing a render
*   -   Can have multiple and switch between them
*   -   Different types
*   -   We are going to use "PerspectiveCamera"
*/

// It needs two parameters

/***   1. The field of View
    ->  Vertical vision angle
    ->  In degrees
    ->  Also called fov
    -> for this exercise we will use a 75 degrees angle
*/

/***   2. The Aspect Ratio
    The width of the render divided by the height of the render, 
    We can decide on a size now, Create a sizes object containing 
    temporary values.
*/
const sizes = {
    width: 800,
    height: 600
}


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3
camera.position.x = 2
camera.position.y = 1
scene.add(camera)

/*********         Renderer     **********
*   -   Render the scene from the camera point of view
*   -   Result drawn into a canvas
*   -   A canvas is a HTML element in which you can draw stuff
*   -   Three.js will use WebGL to draw the render inside this canvas
*   -   You can create it or you can let Three.js
*/
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// Use the setSize method to update the size of the renderer
renderer.setSize(sizes.width, sizes.height)

// Call the render() method on the renderer with scene and the camera as parameters
renderer.render(scene, camera);

// Move the camera backward to view the cube


