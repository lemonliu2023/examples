import * as THREE from 'three';

// 着色器代码
const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
varying vec2 vUv;

float lazer(vec2 pos)
{
	
	float x = time/.33 * 2.0;
	float w = fract(x*0.5);
	w = sin(3.14156*w);
	w *= 1.5 + pos.x;
	w *= 2.0;
  float color = w / abs(pos.y) / 16.0;

	float d = distance(pos, vec2(-1.0-fract(x*0.5)*2.,0.8));
	color += (0.25*w/d);
	return color / 4.0 < 0.3 ? 0.0 : color / 4.0;
}

void main()
{
	vec2 pos = ( vUv * 2.0 ) - 1.0; // 归一化 (0, 0) -> (1, 1) => (-1, -1) -> (1, 1)
	gl_FragColor = vec4(1.7, 0.2, 3., lazer(pos));
}
`;

export default (options?: any) => {
  const {
    lineWidth,
    height,
    width,
    position,
    lineOpenTime,
    scanTime,
    opacityTime,
    renderer
  } = Object.assign(
    {
      lineWidth: 10,
      height: 1000,
      width: 1000,
      position: [0, 0, 0],
      lineOpenTime: 0.8,
      scanTime: 2.0,
      opacityTime: 0.2,
    },
    options
  );
  // 材质
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      lineWidth: { value: lineWidth / height },
      lineOpenTime: { value: lineOpenTime },
      scanTime: { value: scanTime },
      opacityTime: { value: opacityTime },
      resolution: {value: new THREE.Vector2(100, 100)},
      mouse: {value: new THREE.Vector2(0, 0)},
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    // wireframe: true,
    side: THREE.DoubleSide,
  });

  // 平面几何体
  var myCylinderGeometry = new THREE.PlaneGeometry(200, 20, 100, 100);
  // var myCylinderGeometry = new THREE.CylinderGeometry(6, 6, 10, 32);
  const plane = new THREE.Mesh(myCylinderGeometry, material);
  plane.position.copy(new THREE.Vector3(...position));

  const startTime = performance.now();


  renderer.domElement.addEventListener('mousemove', (event: any) => {
    // 归一化
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = - (event.clientY / window.innerHeight) * 2 + 1;
    material.uniforms.mouse.value = new THREE.Vector2(x, y)
  });

  function animate() {
    const currentTime = performance.now();
    requestAnimationFrame(animate)
    const elapsed = (currentTime - startTime) / 1000; // 时间转换为秒
    material.uniforms.time.value = elapsed; // 更新时间
  }

  animate();
  return plane;
};