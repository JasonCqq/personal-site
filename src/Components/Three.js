import * as THREE from "three";

// Dotted Background
function Three() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#bg"),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);
  renderer.render(scene, camera);

  const geometry = new THREE.SphereGeometry(0.2, 15, 25);
  const material = new THREE.MeshMatcapMaterial({ color: 0x504eeb });
  const addDots = () => {
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z);
    scene.add(star);
  };

  Array(200).fill().forEach(addDots);

  scene.background = new THREE.Color(0x111827);

  const moveCamera = () => {
    const top = document.body.getBoundingClientRect().top;
    camera.position.z = top * -0.02;
    camera.position.x = top * -0.0002;
    camera.position.y = top * -0.0002;
  };

  document.body.onscroll = moveCamera;

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
}

export default Three;
